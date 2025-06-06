import React, { use } from "react";
import { AuthContext, ImgContext } from "../Context/Context";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const SignUpGoogle = () => {
  const notify = () => toast.success("login account successfully");
  const errorToast = (er) => toast.error(er);
  const navigate = useNavigate();
  const location = useLocation();
  const { userSignUpWithGoogle } = use(AuthContext);
  const { setProfilePik } = use(ImgContext);
  const handleGoogleLogin = () => {
    userSignUpWithGoogle()
      .then((res) => {
        setProfilePik(res?.photoURL);
        notify();
        navigate(location?.state || "/");
      })
      .catch((error) => {
        errorToast(error.message);
      });
  };
  return (
    <div className="mt-6">
      <button
        onClick={handleGoogleLogin}
        className="w-full cursor-pointer flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition"
      >
        <FcGoogle size={20} />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default SignUpGoogle;
