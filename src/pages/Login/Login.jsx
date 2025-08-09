import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { CiRead, CiUnread } from "react-icons/ci";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/Context";
import SignUpGoogle from "../../Sharing/SignUpGoogle";
import NavBar from "../../components/NavBar/NavBar";

const Login = () => {
  const notify = () => toast.success("login account successfully");
  const errorToast = (er) => toast.error(er);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  

  const { userLogin } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password } = Object.fromEntries(formData.entries());
    userLogin(email, password)
      .then(() => {
        notify();
        navigate( location?.state || "/");
      })
      .catch((error) => {
        errorToast(error.message);
      });
  };

 

  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-screen  flex items-center justify-center bg-background p-6">
        <div className="w-full max-w-md bg-surface rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-text mb-6">
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-text-muted mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-xl "
              />
            </div>
            <div className="relative">
              <label className="block text-text-muted mb-1">Password</label>
              <input
                type={show ? "teat" : "password"}
                name="password"
                required
                className="w-full px-4 py-2 border rounded-xl "
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
              className="w-full cursor-pointer bg-primary text-white py-2 rounded-xl  transition"
            >
              Login
            </button>
          </form>
          <SignUpGoogle></SignUpGoogle>

          <div className="mt-6 flex items-center justify-center">
            <p className="text-text-muted text-sm">
              Don’t have an account?{" "}
              <Link state={location?.state} to="/sign-up" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Login;
