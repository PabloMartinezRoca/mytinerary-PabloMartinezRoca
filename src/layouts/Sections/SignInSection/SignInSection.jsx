// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import server from "../../../utils/axios";
// import jwtDecode from "jwt-decode";
import GoogleLoginButton from "../../../components/Google/GoogleLoginButton";
import { Link as Anchor } from "react-router-dom";
import { register } from "../../../redux/actions/authenticateUserActions";
import { useDispatch } from "react-redux";

const SignInSection = () => {

  const dispatch = useDispatch()
  // Bindeo múltiple
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChangeData = (e) => {
    setData((prevState) => {
      // representa a data
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    const response = await server.post("/auth/login", data);
    
    console.log(response);
      dispatch(register(response.data))
  };

  // function to handle Google submit
  const handleSubmitGoogle = async (userData) => {
    const response = await server.post("/auth/login", userData);
    
    console.log(response);
      dispatch(register(response.data))
  };

  return (
    <div className="SignInSection flex w-full justify-center py-24">
      <div className="flex justify-center self-center bg-black bg-opacity-40 w-[75vw] max-w-[800px] rounded-3xl p-10 shadow-lg shadow-white/50">
        <div className="flex flex-col w-80 grow justify-center items-center pt-6 sm:justify-center sm:pt-0">
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white bg-opacity-80 shadow-md sm:max-w-lg sm:rounded-lg">
            <form role="form" onSubmit={handleSubmitData}>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    onChange={handleChangeData}
                    value={data.email}
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    className="p-1 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    onChange={handleChangeData}
                    value={data.password}
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    className="p-1 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <a href="#" className="text-xs text-[#3c88ae] hover:underline">
                Forget Password?
              </a>
              <div className="flex items-center mt-4">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#b43abe] rounded-md hover:bg-[#d84cc7] focus:outline-none focus:bg-[#d84cc7]"
                >
                  Log In
                </button>
              </div>
            </form>
            <div className="mt-4 text-grey-600">
              Don&rsquo;t have an account?{" "}
              <Anchor
                to={"/register"}
                className="text-[#3c88ae] hover:underline"
              >
                Register
              </Anchor>
            </div>
            <div className="flex items-center w-full my-4">
              <hr className="w-full border-[#3c88ae]" />
              <p className="px-3 ">OR</p>
              <hr className="w-full border-[#3c88ae]" />
            </div>

            {/* Google Login -- Provider is in main.jsx to be present in all the app */}
            <GoogleLoginButton fn={handleSubmitGoogle} action="signIn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSection;
