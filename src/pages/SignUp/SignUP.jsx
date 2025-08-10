import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { CiRead, CiUnread } from "react-icons/ci";
import { AuthContext, ImgContext } from "../../Context/Context";
import SignUpGoogle from "../../Sharing/SignUpGoogle";
import NavBar from "../../components/NavBar/NavBar";

const SignUp = () => {
  const notify = () => toast.success("Account crate successfully");
  const errorToast = (er) => toast.error(er);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { userSignUp, userUpdateProfile } = use(AuthContext);
  const { setProfilePik } = use(ImgContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, email, password, photo } = Object.fromEntries(
      formData.entries()
    );

    if (password.length < 6) {
      return errorToast("Password Length must be at least 6 character");
    } else if (!/[A-Z]/.test(password)) {
      return errorToast("Must have an Uppercase letter in the password ");
    } else if (!/[a-z]/.test(password)) {
      return errorToast("Must have a Lowercase letter in the password");
    }

    userSignUp(email, password)
      .then(() => {
        const upDateInfo = {
          displayName: name,
          photoURL: photo,
        };

        userUpdateProfile(upDateInfo)
          .then(() => {
            navigate(location?.state || "/");
            setProfilePik(photo);
          })
          .catch((error) => {
            errorToast(error.message);
          });

        notify();
      })
      .catch((error) => {
        errorToast(error.message);
      });
  };

  return (
    <div className="">
      <NavBar></NavBar>
      <div className="min-h-screen   flex items-center justify-center bg-background p-6">
        <div className="w-full max-w-md bg-surface rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-primary mb-6">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-text-muted mb-1">Name</label>
              <input
                type="text"
                required
                name="name"
                className="w-full px-4 py-2 border rounded-xl "
              />
            </div>
            <div>
              <label className="block text-text-muted mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-xl "
              />
            </div>
            <div>
              <label className="block text-text-muted mb-1">Photo URL</label>
              <input
                type="text"
                name="photo"
                required
                className="w-full px-4 py-2 border rounded-xl "
              />
            </div>
            <div className="relative">
              <label className="block text-text-muted mb-1">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                required
                className="w-full px-4 py-2 border rounded-xl   "
              />

              {show ? (
                <span
                  onClick={() => setShow((prv) => !prv)}
                  className="absolute top-10 right-5 cursor-pointer"
                >
                  <CiUnread size={20} />
                </span>
              ) : (
                <span
                  onClick={() => setShow((prv) => !prv)}
                  className="absolute top-10 right-5 cursor-pointer"
                >
                  <CiRead size={20} />
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-primary cursor-pointer text-white py-2 rounded-xl  transition font-bold"
            >
              Sign Up
            </button>
          </form>
          <SignUpGoogle></SignUpGoogle>

          <div className="mt-6 flex items-center justify-center">
            <p className="text-text-muted text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
