import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../utils/firebase";
import "../index.css";
import toast from "react-hot-toast";

export default function Login() {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const doAuth = async () => {
    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        toast.success("Login Successfully");

        console.log(token, user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };
  const doAuthWithEmailAndPassword = () => {
    const auth = getAuth(app);
    console.log(loginData);
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        toast.success("Login Successful");
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error("Login Failed: " + errorMessage);
      });
  };

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false, // Add rememberMe to state
  });

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox state
    }));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full h-full">
        <div className="flex flex-col justify-center items-center h-full">
          {/* Label */}
          <h1 className="text-3xl p-6 font-semibold">Log-In</h1>

          {/* email */}
          <div className="flex flex-col p-4 gap-3 w-80">
            <div className="flex flex-col space-y-1">
              <label className="font-medium text-left">E-mail:</label>
              <div className="relative">
                <input
                  className="custom-input peer border-b-2 border-gray-300 py-2 focus:outline-none"
                  type="email"
                  placeholder="xyz@gmail.com"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                />
                <span className="input-underline peer-focus:w-full"></span>
              </div>
            </div>

            {/* password */}
            <div className="flex flex-col space-y-1">
              <label className="font-medium text-left">Password:</label>

              <div className="relative">
                <input
                  className="custom-input peer border-b-2 border-gray-300 py-2 focus:outline-none"
                  type="password"
                  placeholder="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
                <span className="input-underline peer-focus:w-full"></span>
              </div>
            </div>
          </div>

          {/* Remember me */}
          <div className="flex flex-row mb-3 gap-2">
            <input
              type="checkbox"
              name="rememberMe"
              checked={loginData.rememberMe}
              onChange={handleLoginChange}
              className="rounded focus:outline-none border-gray-400 bg-blue-500"
            />
            <label className="font-medium">Remember Me</label>
          </div>

          {/* Button */}
          <Button onSubmit={doAuthWithEmailAndPassword}>Log-in</Button>

          {/* Login with google account */}
          <div
            onClick={doAuth}
            className="flex flex-row gap-5 border-2 border-neutral-400 mt-8 px-7 py-2 hover:scale-105 hover:transition-all hover:ease-in-out duration-200 rounded-md cursor-pointer"
          >
            <img src="./google.png" className="h-8" />
            <button className="font-medium">Login with google account</button>
          </div>

          {/* signup if doesn't login */}
          <div className="flex gap-4 mt-3">
            <p>Don't have an account?</p>
            <Link
              className="font-normal underline hover:font-medium"
              to="/signup"
            >
              {" "}
              Signup{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
