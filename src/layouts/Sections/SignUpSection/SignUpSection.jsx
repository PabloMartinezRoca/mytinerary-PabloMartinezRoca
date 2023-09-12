// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import server from "../../../utils/axios";

const SignUpSection = () => {
  // Bindeo múltiple
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    terms: false,
  });

  const handleChangeData = (e) => {
    setData((prevState) => {
      // representa a data
      return e.target.name === "terms"
        ? { ...prevState, [e.target.name]: e.target.checked }
        : { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmitData = async (e) => {
    e.preventDefault();

    const userData = { ...data };
    console.log(userData)
    if (userData.terms) {
      delete userData.terms;
      console.log("Form submitted!")
      const response = await server.post("/auth", userData);
      console.log(response);
    }
  };

  return (
    <div className="SignUpSection flex w-full justify-center py-24">
      <div className="flex justify-center self-center bg-black bg-opacity-40 w-[75vw] max-w-[800px] rounded-3xl p-10 shadow-lg shadow-white/50">
        <div className="flex flex-col w-80 grow justify-center items-center pt-6 sm:justify-center sm:pt-0">
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white bg-opacity-80 shadow-md sm:max-w-lg sm:rounded-lg">
            <form role="form" onSubmit={handleSubmitData}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Name
                </label>
                <div className="flex flex-col items-start">
                  <input
                    onChange={handleChangeData}
                    value={data.name}
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    className="p-1 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
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
              <div className="mt-4">
                <label
                  htmlFor="passwordConfirmation"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Confirm Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    onChange={handleChangeData}
                    value={data.passwordConfirmation}
                    type="password"
                    name="passwordConfirmation"
                    id="passwordConfirmation"
                    autoComplete="off"
                    className="p-1 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <a href="#" className="text-xs text-[#3c88ae] hover:underline">
                Forget Password?
              </a>

              <div className="mt-4 text-grey-600 flex">
                <div className="pe-2">
                  <input
                    onChange={handleChangeData}
                    value={data.terms}
                    name="terms"
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className=""
                    required=""
                  />
                </div>
                <div className="text-xs">
                  <label className="" htmlFor="terms">
                    By signing up, you are creating a MYTINERARY account, and
                    you agree to MYTINERARY’s{" "}
                    <a
                      className="text-primary-600 dark:text-primary-500 "
                      href="#"
                    >
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a
                      className="text-primary-600 dark:text-primary-500 "
                      href="#"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>
              </div>

              <div className="flex items-center mt-4">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#b43abe] rounded-md hover:bg-[#d84cc7] focus:outline-none focus:bg-[#d84cc7]"
                >
                  Register
                </button>
              </div>
            </form>
            <div className="mt-4 text-grey-600">
              Already have an account?{" "}
              <span>
                <a className="text-[#3c88ae] hover:underline" href="#">
                  Log in
                </a>
              </span>
            </div>
            <div className="flex items-center w-full my-4">
              <hr className="w-full border-[#3c88ae]" />
              <p className="px-3 ">OR</p>
              <hr className="w-full border-[#3c88ae]" />
            </div>
            <div className="my-6 space-y-2">
              <button
                aria-label="Login with Google"
                type="button"
                className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 bg-white hover:border-[#3c88ae]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 21 20"
                  className="w-5 h-5 fill-current"
                >
                  <path
                    d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
                    fill="#3F83F8"
                  ></path>
                  <path
                    d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
                    fill="#FBBC04"
                  ></path>
                  <path
                    d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
                    fill="#EA4335"
                  ></path>
                </svg>
                <p>Login with Google</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSection;
