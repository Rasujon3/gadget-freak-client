import React from "react";
import auth from "../../Firebase/Firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleSignIn = () => {
    signInWithGoogle();
  };
  return (
    <div className="container text-center mt-5">
      <button onClick={handleSignIn} type="button" className="btn btn-warning">
        Google Sign in
      </button>
    </div>
  );
};

export default Login;
