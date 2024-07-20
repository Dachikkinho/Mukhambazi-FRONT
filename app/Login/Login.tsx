"use client";

import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { FaEye, FaEyeSlash } from "react-icons/fa"; //icon for password hidden
import styles from "../Login/Login.module.scss"
import { PLACEHOLDEREMAILLOGIN_OBJECT, PLACEHOLDERPASSLOGIN_OBJECT } from "@/public/script";


interface LoginForm {
  email: string;
  password: string;
  reenter: string;
  privacy: boolean;
}

export const Login = () => {
  useEffect(() => {
    document.title = "Log in - Chakrulos";
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginForm>();

  const [showPassword, setShowPassword] = useState(false);

  const onRegisterFinished = (values: LoginForm) => {
    console.log("FORM SUBMITTED");
  };

  const password = useRef({});
  password.current = watch("password", "");


  return (
    <div className={styles.main}>
      <div className={styles.mainLogo}>
        <img className={styles.chakrulo} src="./logo.png" alt="icons" />
      </div>
      <form
        onSubmit={handleSubmit(onRegisterFinished)}
        className={classNames(styles.formContainer, styles.fadeIn)}
      >
        <span className={styles.first}>
          Log in to <span className={styles.second}>CHAKRULOS!</span> <br />
          <div className={styles.container}>
            <span>New to CHAKRULOS ? <span className={styles.signup}>Sign up</span> now</span>
          </div>
        </span>

        <div className={styles.email}>
          <p className={styles.paragraph}>Email address</p>
          <input
            {...PLACEHOLDEREMAILLOGIN_OBJECT}
            className={classNames(styles.firstinput, {
              [styles.errorBorder]: errors.email,
            })}
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message:
                  "Invalid email address. Verify the spelling and try again.",
              },
            

            })}
          />
          {errors.email && (
            <span className={styles.errorText}>{errors.email.message}</span>
          )}
        </div>
        <div className={styles.password}>
          <p className={styles.paragraph}>Password</p>
          <div className={styles.passwordInput}>
            <input
              type={showPassword ? "text" : "password"}
              {...PLACEHOLDERPASSLOGIN_OBJECT}
              className={classNames(styles.firstinput, {
                [styles.errorBorder]: errors.password,
              })}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "",
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
            <span className={styles.errorText}>{errors.password.message}</span>
          )}
        </div>
        <input className={styles.signin} type="submit" value={"Log in"} />
      </form>
    </div>
  );
};

export default Login;

