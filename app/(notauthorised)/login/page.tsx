'use client';

import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';
import {
    PLACEHOLDEREMAILLOGIN_OBJECT,
    PLACEHOLDERPASSLOGIN_OBJECT,
} from '@/public/script';
import { LoginForm } from '@/app/interfaces/login.interface';
import axios, { AxiosError } from 'axios';
import { useAuth } from '@/app/AuthContext';
import useRedirectIfAuthenticated from '@/app/useRedirectIfAuthenticated';
import Link from 'next/link';
import Notification from '@/app/components/Notification/Notification';

const Login = () => {
    useEffect(() => {
        document.title = 'Log in - Chakrulos';
    }, []);

    const router = useRouter();
    useRedirectIfAuthenticated('/');

    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
    } = useForm<LoginForm>();
    const [showPassword, setShowPassword] = useState(false);
    const { login } = useAuth();
    const [notification, setNotification] = useState<{
        message: string;
        type: 'success' | 'error' | 'info';
    } | null>(null);

    const onLoginFinished = async (values: LoginForm) => {
        try {
            setNotification({ message: 'Processing login...', type: 'info' });

            const response = await axios.post(
                'https://back.chakrulos.ge/login',
                values,
            );

            localStorage.setItem('user', JSON.stringify(response.data));

            login(response.data.token);
            router.push('/');

            login();
            setNotification({
                message: 'Login successful! Redirecting...',
                type: 'success',
            });

            setTimeout(() => {
                router.push('/');
            }, 1000);

        } catch (error) {
            handleLoginError(error);
        }
    };

    const handleLoginError = (error: unknown) => {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;

            if (axiosError.response) {
                if (axiosError.response.status === 400) {
                    setError('email', {
                        type: 'manual',
                        message: 'Invalid email or password. Please try again.',
                    });
                    setError('password', {
                        type: 'manual',
                        message: 'Invalid email or password. Please try again.',
                    });
                } else if (axiosError.response.status === 401) {
                    setError('email', {
                        type: 'manual',
                        message:
                            'Unauthorized access. Please check your credentials.',
                    });
                } else {
                    console.error(
                        'An error occurred during login:',
                        axiosError.response.data || axiosError.message,
                    );
                }
            } else {
                console.error(
                    'An unexpected error occurred:',
                    axiosError.message,
                );
            }
        } else {
            console.error('An unknown error occurred:', error);
        }
        setNotification({
            message: 'Login failed. Please try again.',
            type: 'error',
        });
    };

    const password = useRef({});
    password.current = watch('password', '');

    return (
        <div className={styles.main}>
            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}
            <div className={styles.mainLogo}>
                <img
                    className={styles.chakrulo}
                    src="./logo.png"
                    alt="icons"
                    draggable={false}
                />
            </div>
            <form
                onSubmit={handleSubmit(onLoginFinished)}
                className={classNames(styles.formContainer, styles.fadeIn)}
            >
                <span className={styles.first}>
                    Log in to <span className={styles.second}>CHAKRULOS!</span>
                    <br />
                    <div className={styles.container}>
                        <span>
                            New to CHAKRULOS?
                            <Link href="/register">
                                <span className={styles.signup}> Sign up</span>
                            </Link>
                        </span>
                        <span> now </span>
                    </div>
                </span>

                <div className={styles.email}>
                    <p className={styles.paragraph}>Email address</p>
                    <input
                        {...PLACEHOLDEREMAILLOGIN_OBJECT}
                        className={classNames(styles.firstinput, {
                            [styles.errorBorder]: errors.email,
                        })}
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'Email is required',
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message:
                                    'Invalid email address. Verify the spelling and try again.',
                            },
                        })}
                    />
                    {errors.email && (
                        <span className={styles.errorText}>
                            {errors.email.message}
                        </span>
                    )}
                </div>
                <div className={styles.password}>
                    <p className={styles.paragraph}>Password</p>
                    <div className={styles.passwordInput}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            {...PLACEHOLDERPASSLOGIN_OBJECT}
                            className={classNames(styles.firstinput, {
                                [styles.errorBorder]: errors.password,
                            })}
                            {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 6, message: '' },
                            })}
                        />
                        <button
                            type="button"
                            className={styles.passwordToggle}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {errors.password && (
                        <span className={styles.errorText}>
                            {errors.password.message}
                        </span>
                    )}
                </div>
                <div className={styles.rememberMe}>
                    <label className={styles.checkboxContainer}>
                        <input type="checkbox" {...register('rememberMe')} />
                        Remember Me
                        <span className={styles.checkmark}></span>
                    </label>
                </div>
                <input
                    className={styles.signin}
                    type="submit"
                    value={'Log in'}
                />
            </form>
        </div>
    );
};

export default Login;
