import { useForm } from "react-hook-form";
import { useRef, useState } from "react";

function Register() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const confirmPassword = watch("confirmpassword");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex justify-center mx-auto w-9/12">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Create new Account</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Name"
                      {...register("name", {
                        required: true,
                        maxLength: 30,
                      })}
                    />
                    {errors.name?.type == "required" ? (
                      <p className="text-sm text-red-500">Name is required</p>
                    ) : errors.name?.type == "maxLength" ? (
                      <p className="text-sm text-red-500">
                        Name must be at most 30 characters
                      </p>
                    ) : null}
                    <label className="label">Email</label>
                    <input
                      type="email"
                      className="input"
                      placeholder="Email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      })}
                    />
                    {errors.email?.type == "required" ? (
                      <p className="text-sm text-red-500">Email is required</p>
                    ) : errors.email?.type == "pattern" ? (
                      <p className="text-sm text-red-500">
                        Invalid Email Pattern
                      </p>
                    ) : null}
                    <label className="label">User Name</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="User Name"
                      {...register("username", {
                        required: true,
                        pattern: /^\S+$/,
                      })}
                    />
                    {errors.username?.type == "required" ? (
                      <p className="text-sm text-red-500">
                        User Name is required
                      </p>
                    ) : errors.username?.type == "pattern" ? (
                      <p className="text-sm text-red-500">
                        User Name must not contain spaces
                      </p>
                    ) : null}
                    <label className="label">Password</label>
                    <input
                      type="password"
                      className="input"
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                        pattern:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#])[A-Za-z\d*@%$#]{8,}$/,
                      })}
                    />

                    {errors.password?.type == "required" ? (
                      <p className="text-sm text-red-500">
                        Password is required
                      </p>
                    ) : errors.password?.type == "pattern" ? (
                      <p className="text-sm text-red-500">
                        Invalid Password Pattern
                      </p>
                    ) : null}
                    <label className="label">Confirm Password</label>
                    <input
                      type="password"
                      className="input"
                      placeholder="Confirm Password"
                      {...register("confirmpassword", {
                        required: true,
                        pattern:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#])[A-Za-z\d*@%$#]{8,}$/,
                      })}
                    />
                    {errors.confirmpassword?.type == "required" ? (
                      <p className="text-sm text-red-500">
                        Confirm Password is required
                      </p>
                    ) : errors.confirmpassword?.type == "pattern" ? (
                      <p className="text-sm text-red-500">
                        Invalid Confirm Password Pattern
                      </p>
                    ) : null}

                    {password &&
                    confirmPassword &&
                    password !== confirmPassword ? (
                      <p className="text-sm text-red-500">
                        Password must match Confirm Password
                      </p>
                    ) : null}

                    <button className="btn btn-neutral mt-4">Register</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
