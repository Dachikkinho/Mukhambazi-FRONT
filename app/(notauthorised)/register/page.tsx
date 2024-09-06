'use client';

import { useForm } from 'react-hook-form';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './page.module.scss';
import {
    PLACEHOLDEREMAIL_OBJECT,
    PLACEHOLDERPASS_OBJECT,
    PLACEHOLDERREenter_OBJECT,
} from '@/public/script';
import { RegisterForm } from '@/app/interfaces/register.interface';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import useRedirectIfAuthenticated from '@/app/useRedirectIfAuthenticated';

const Signup = () => {
    useEffect(() => {
        document.title = 'Sign up - Chakrulos';
    }, []);

    const router = useRouter();
    useRedirectIfAuthenticated('/');

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<RegisterForm>();
    const [showPassword, setShowPassword] = useState(false);
    const [showReenterPassword, setShowReenterPassword] = useState(false);

    const onRegisterFinished = async (values: RegisterForm) => {
        try {
            await axios.post('https://back.chakrulos.ge/users', values);
            router.push('/login');
        } catch (error) {
            alert(
                'Registration failed. Please check your details and try again.',
            );
        }
    };

    const password = useRef({});
    password.current = watch('password', '');

    const reenterPassword = useRef({});
    reenterPassword.current = watch('reenter', '');

    return (
        <div className={styles.main}>
            <div className={styles.mainLogo}>
                <img
                    className={styles.chakrulo}
                    src="./logo.png"
                    alt="icons"
                    draggable={false}
                />
            </div>
            <form
                onSubmit={handleSubmit(onRegisterFinished)}
                className={classNames(styles.formContainer, styles.fadeIn)}
            >
                <span className={styles.first}>
                    Sign up to <span className={styles.second}>CHAKRULOS!</span>
                    <br />
                </span>
                <div className={styles.email}>
                    <p className={styles.paragraph}>Email address</p>
                    <input
                        {...PLACEHOLDEREMAIL_OBJECT}
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
                    <p className={styles.paragraph}>Create a password</p>
                    <div className={styles.passwordInput}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            {...PLACEHOLDERPASS_OBJECT}
                            className={classNames(styles.firstinput, {
                                [styles.errorBorder]: errors.password,
                            })}
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message:
                                        'Password must be at least 6 characters.',
                                },
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
                <div className={styles.reenterPassword}>
                    <p className={styles.paragraph}>Repeat password</p>
                    <div className={styles.passwordInput}>
                        <input
                            type={showReenterPassword ? 'text' : 'password'}
                            {...PLACEHOLDERREenter_OBJECT}
                            className={classNames(styles.firstinput, {
                                [styles.errorBorder]: errors.reenter,
                            })}
                            {...register('reenter', {
                                required: 'Please repeat your password',
                                validate: (value) =>
                                    value === password.current ||
                                    'The passwords do not match',
                            })}
                        />
                        <button
                            type="button"
                            className={styles.passwordToggle}
                            onClick={() =>
                                setShowReenterPassword(!showReenterPassword)
                            }
                        >
                            {showReenterPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {errors.reenter && (
                        <span className={styles.errorText}>
                            {errors.reenter.message}
                        </span>
                    )}
                </div>
                <div className={styles.flex}>
                    <span>
                        Already a member?
                        <Link href="/login">
                            <span className={styles.login}> Log in</span>
                        </Link>
                    </span>
                </div>
                <input
                    className={styles.signin}
                    type="submit"
                    value={'Sign up'}
                />
            </form>
        </div>
    );
};

export default Signup;
