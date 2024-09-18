import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../index.css";
import toast from "react-hot-toast";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../utils/firebase";

export default function Signup() {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const createUserWithEmailAndPasswordAuth = async () => {
    console.log(signupData);
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, signupData.email, signupData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Signup Successfully");
        navigate("/home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        toast.error(errorMessage);
        // ..
      });
  };

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full h-full">
        <div className="flex flex-col justify-center items-center h-full">
          {/* Label */}
          <h1 className="text-3xl p-6 font-semibold">Sign-Up</h1>

          {/* email */}
          <div className="flex flex-col p-4 gap-3 w-80">
            <div className="flex flex-col space-y-2">
              <label className="font-medium text-left">E-mail:</label>
              <div className="relative">
                <input
                  className="custom-input peer border-b-2 border-gray-300 py-2 focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="xyz@gmail.com"
                  value={signupData.email}
                  required
                  onChange={handleRegistrationChange}
                />
                <span className="input-underline peer-focus:w-full"></span>
              </div>
            </div>

            {/* password */}
            <div className="flex flex-col space-y-2">
              <label className="font-medium text-left">Password:</label>
              <div className="relative">
                <input
                  className="custom-input peer border-b-2 border-gray-300 py-2 focus:outline-none"
                  type="password"
                  name="password"
                  placeholder="password"
                  value={signupData.password}
                  required
                  onChange={handleRegistrationChange}
                />
                <span className="input-underline peer-focus:w-full"></span>
              </div>
            </div>

            {/* Confirm password */}
            <div className="flex flex-col space-y-2">
              <label className="font-medium text-left">Confirm Password:</label>
              <div>
                <input
                  className="custom-input peer border-b-2 border-gray-300 py-2 focus:outline-none"
                  type="password"
                  name="confirmPassword"
                  placeholder="password"
                  value={signupData.confirmPassword}
                  required
                  onChange={handleRegistrationChange}
                />
                <span className="input-underline peer-focus:w-full"></span>
              </div>
            </div>
          </div>

          {/* Button */}
          <Button onSubmit={createUserWithEmailAndPasswordAuth}>Sign-up</Button>

          {/* signup if doesn't login */}
          <div className="flex gap-4 mt-3">
            <p>Already have an account?</p>
            <Link className="font-normal underline hover:font-medium" to="/login">
              {" "}
              Login{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
