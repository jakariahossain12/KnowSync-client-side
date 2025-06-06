import React from 'react';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link, useRouteError } from 'react-router';
const Error = () => {
  const error = useRouteError();
  console.log(error);
    return (
      <div className="">
        <div className="h-screen flex flex-col justify-center items-center">
          <DotLottieReact
            className="w-200 h-50"
            src="/Error.json"
            loop
            autoplay
          />
          <p className="text-accent text-2xl font-bold">{error?.data}</p>
          <p className="text-accent text-2xl font-bold">
            Go Back To{" "}
            <Link className="text-primary" to={"/"}>
              Home
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Error;