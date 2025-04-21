import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../ContextProvider/ContextProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import logImg from "../../assets/logo-fiherman.png";
import SocialLogin from "../Shared/SocialLogin";
import AxiosPublic from "../../AxiosPublic/AxiosPublic";

const SignUp = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthProvider);
  const navigate = useNavigate();
  const [publicAxios] = AxiosPublic();
  const [userType, setUserType] = useState("customer"); // Default to customer

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
              photo: data.photoURL,
              role: userType, // Use the selected user type
              ...(userType === 'fisherman' && { 
                licenseNumber: data.licenseNumber,
                vesselInfo: data.vesselInfo
              }),
              ...(userType === 'hatchery' && {
                hatcheryName: data.hatcheryName,
                hatcheryLocation: data.hatcheryLocation
              })
            };

            publicAxios.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Account created successfully!",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: '<a href="#">Why do I have this issue?</a>',
            });
          });
      });
  };

  const backgroundImageUrl = "https://i.ibb.co/SQLKxz7/authentication.png";

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <Helmet>
        <title>Fish Market | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen" style={containerStyle}>
        <div
          className="hero-content flex-col lg:flex-row shadow-2xl rounded-xl w-2/3"
          style={containerStyle}
        >
          <div>
            <img src={logImg} alt="" />
          </div>
          <div className="text-center w-full">
            <h1 className="text-5xl font-bold m-5">Create Your Account</h1>

            <div className="card flex-shrink-0 w-full max-w shadow-2xl bg-base-100">
              <div className="tabs tabs-boxed justify-center my-4">
                <button
                  className={`tab ${userType === 'customer' ? 'tab-active' : ''}`}
                  onClick={() => setUserType('customer')}
                >
                  Customer
                </button>
                <button
                  className={`tab ${userType === 'fisherman' ? 'tab-active' : ''}`}
                  onClick={() => setUserType('fisherman')}
                >
                  Fisherman
                </button>
                <button
                  className={`tab ${userType === 'hatchery' ? 'tab-active' : ''}`}
                  onClick={() => setUserType('hatchery')}
                >
                  Hatchery Owner
                </button>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Your full name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>

                {userType === 'fisherman' && (
                  <>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Fishing License Number</span>
                      </label>
                      <input
                        type="text"
                        {...register("licenseNumber", { required: userType === 'fisherman' })}
                        placeholder="License number"
                        className="input input-bordered"
                      />
                      {errors.licenseNumber && (
                        <span className="text-red-600">License number is required</span>
                      )}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Vessel Information</span>
                      </label>
                      <input
                        type="text"
                        {...register("vesselInfo")}
                        placeholder="Boat name/type"
                        className="input input-bordered"
                      />
                    </div>
                  </>
                )}

                {userType === 'hatchery' && (
                  <>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Hatchery Name</span>
                      </label>
                      <input
                        type="text"
                        {...register("hatcheryName", { required: userType === 'hatchery' })}
                        placeholder="Your hatchery name"
                        className="input input-bordered"
                      />
                      {errors.hatcheryName && (
                        <span className="text-red-600">Hatchery name is required</span>
                      )}
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Hatchery Location</span>
                      </label>
                      <input
                        type="text"
                        {...register("hatcheryLocation", { required: userType === 'hatchery' })}
                        placeholder="Location address"
                        className="input input-bordered"
                      />
                      {errors.hatcheryLocation && (
                        <span className="text-red-600">Location is required</span>
                      )}
                    </div>
                  </>
                )}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder="Profile photo URL"
                    name="photoURL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-600">Photo URL is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="Your email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="Create password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">Password must be 6 characters</p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one uppercase letter, one lowercase letter,
                      one number, and one special character.
                    </p>
                  )}
                </div>

                <div className="form-control mt-6">
                  <button
                    className="btn bg-[#D1A054] border-none text-white btn-secondary"
                    type="submit"
                  >
                    Sign Up as {userType.charAt(0).toUpperCase() + userType.slice(1)}
                  </button>
                </div>
              </form>

              <p className="text-center mb-4">
                <small className="text-[#D1A054]">
                  Already have an account? <Link to="/login">Login</Link>
                </small>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;