// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import server from "../../../utils/axios";
// import jwtDecode from "jwt-decode";
import GoogleLoginButton from "../../../components/Google/GoogleLoginButton";
import { getAllCountries } from "../../../services/countriesQueries";
import { Link as Anchor } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/actions/authenticateUserActions";

const SignUpSection = () => {

  const dispatch = useDispatch()

  // Get Country list
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    getAllCountries().then(setCountries);
  }, []);

  // Bindeo múltiple
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
    passConfirmation: "",
    dateOfBirth: "",
    country: "",
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
    if (userData.terms && userData.pass === userData.passConfirmation) {
      delete userData.terms;
      delete userData.passConfirmation;

      console.log("Form submitted!");

      const response = await server.post("/auth/register", userData);

      console.log(response);
      dispatch(register(response.data))
    }
  };

  // function to handle Google submit
  const handleSubmitGoogle = async (data) => {
    const userData = { ...data };
    if (userData.terms) {
      delete userData.terms;

      console.log("Google login")
      
      const response = await server.post("/auth/register", userData);

      console.log(response);
      dispatch(register(response.data))
    }
  };

  return (
    countries && (
      <div className="SignUpSection flex w-full justify-center py-24">
        <div className="flex justify-center self-center bg-black bg-opacity-40 w-[75vw] max-w-[800px] rounded-3xl p-10 shadow-lg shadow-white/50">
          <div className="flex flex-col w-80 grow justify-center items-center pt-6 sm:justify-center sm:pt-0">
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white bg-opacity-80 shadow-md sm:max-w-lg sm:rounded-lg">
              <form role="form" onSubmit={handleSubmitData}>
                <div>
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
                    htmlFor="pass"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Password
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      onChange={handleChangeData}
                      value={data.pass}
                      type="password"
                      name="pass"
                      id="pass"
                      autoComplete="off"
                      className="p-1 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="passConfirmation"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Confirm Password
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      onChange={handleChangeData}
                      value={data.passConfirmation}
                      type="password"
                      name="passConfirmation"
                      id="passConfirmation"
                      autoComplete="off"
                      className="p-1 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    First Name
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      onChange={handleChangeData}
                      value={data.firstName}
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="off"
                      className="p-1 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Last Name
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      onChange={handleChangeData}
                      value={data.lastName}
                      type="text"
                      name="lastName"
                      id="lastName"
                      autoComplete="off"
                      className="p-1 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="dateOfBirth"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Date of Birth
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      onChange={handleChangeData}
                      value={data.dateOfBirth}
                      type="date"
                      name="dateOfBirth"
                      id="dateOfBirth"
                      autoComplete="off"
                      className="p-1 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    Country
                  </label>
                  <div className="flex flex-col items-start">
                    <select
                      name="country"
                      id="country"
                      autoComplete="off"
                      value={data.country}
                      onChange={handleChangeData}
                      className="p-1 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                      <option key="-1" value="-1">
                        Select a country
                      </option>
                      {countries.map((option) => (
                        <option key={option._id} value={option._id}>
                          {option.country}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
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
                <Anchor
                  to={"/signIn"}
                  className="text-[#3c88ae] hover:underline"
                >
                  Log in
                </Anchor>
              </div>
              <div className="flex items-center w-full my-4">
                <hr className="w-full border-[#3c88ae]" />
                <p className="px-3 ">OR</p>
                <hr className="w-full border-[#3c88ae]" />
              </div>

              {/* Google Login -- Provider is in main.jsx to be present in all the app */}

              <GoogleLoginButton fn={handleSubmitGoogle} action="signUp" />

              {/* <GoogleLogin
                shape="rectangular"
                text="sign_up_with"
                width="100%"
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse)
                  const userInfo = jwtDecode(credentialResponse.credential)
                  console.log(userInfo)
                  
                  handleSubmitGoogle({
                    email: userInfo.email,
                    pass: "LOGIN_by_GOOGLE_2023",
                    firstName: userInfo.given_name,
                    lastName: userInfo.family_name,
                    googleAccount: true,
                    terms: true,
                  })
                  

                }}
                onError={() => {
                  console.log("Login Failed")
                }}
              /> */}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SignUpSection;
