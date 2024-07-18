"use client";

import { useForm } from "react-hook-form";
import styles from "./Signup.module.scss";
import { useEffect, useRef } from "react";
import classNames from "classnames";

const PLACEHOLDEREMAIL_OBJECT = {
  placeholder: "chakrulos@email.com",
};

const PLACEHOLDERPASS_OBJECT = {
  placeholder: "At least six characters",
};

const PLACEHOLDERREenter_OBJECT = {
  placeholder: "Re-enter password",
};

interface RegisterForm {
  email: string;
  password: string;
  reenter: string;
  privacy: boolean;
}

export const Register = () => {
  useEffect(() => {
    document.title = "Sign up - Chakrulos";
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onRegisterFinished = (values: RegisterForm) => {
    console.log("FORM SUBMITTED");
  };

  const password = useRef({});
  password.current = watch("password", "");

  console.log(errors);

  return (
    <div className={styles.main}>
      <div className={styles.mainLogo}>
        <img className={styles.chakrulo} src={`./logo.png`} alt="icons" />
      </div>
      <form
        onSubmit={handleSubmit(onRegisterFinished)}
        className={styles.formContainer}
      >
        <span className={styles.first}>
          Sign up to <span className={styles.second}>CHAKRULOS!</span> <br />
        </span>

        <div className={styles.email}>
          <p className={styles.paragraph}>Email address</p>
          <input
            {...PLACEHOLDEREMAIL_OBJECT}
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
          <p className={styles.paragraph}>Create a password</p>
          <input
            {...PLACEHOLDERPASS_OBJECT}
            className={classNames(styles.firstinput, {
              [styles.errorBorder]: errors.password,
            })}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters.",
              },
            })}
          />
          {errors.password && (
            <span className={styles.errorText}>{errors.password.message}</span>
          )}
        </div>
        <div className={styles.reenterPassword}>
          <p className={styles.paragraph}>Repeat password</p>
          <input
            {...PLACEHOLDERREenter_OBJECT}
            className={classNames(styles.firstinput, {
              [styles.errorBorder]: errors.reenter,
            })}
            {...register("reenter", {
              required: "Please repeat your password",
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          />
          {errors.reenter && (
            <span className={styles.errorText}>{errors.reenter.message}</span>
          )}
        </div>
        
        <div className={styles.check}>
          <span>I Agree to Privacy Policy</span>
          <input
            id="privacy"
            type="checkbox"
            {...register("privacy", {
              required: "You must accept the privacy policy",
            })}
          />
          <label htmlFor="privacy"></label>
        </div>
        {errors.privacy && (
          <span className={styles.errorText}>{errors.privacy.message}</span>
        )}
        <div className={styles.flex}>
          <span>
            Already a member? <span className={styles.login}>Log in</span>
          </span>
        </div>
        <input className={styles.signin} type="submit" value={"Sign up"} />
      </form>
    </div>
  );
};

export default Register;
