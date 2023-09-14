// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import server from "../../../utils/axios";
// import jwtDecode from "jwt-decode";
import GoogleLoginButton from "../../../components/Google/GoogleLoginButton";
import { getAllCountries } from "../../../services/countriesQueries";
import { Link as Anchor } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/actions/authenticateUserActions";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpSection = () => {
  const dispatch = useDispatch();

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
    dateOfBirth: "",
    photo: "",
    country: "",
    terms: false,
  });

  // Password show/hide functionallity
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChangeData = (e) => {
    setData((prevState) => {
      // representa a data
      return e.target.name === "terms"
        ? { ...prevState, [e.target.name]: e.target.checked }
        : { ...prevState, [e.target.name]: e.target.value };
    });
  };

  // function to handle Google submit
  const handleSubmitData = async (e) => {
    e.preventDefault();

    const userData = { ...data };

    if (!userData.terms) {
      toast.error("You must agree the Terms of Use and Privacy Policy!", {
        autoClose: 4000,
      });
    } else {
      delete userData.terms;

      console.log("Form register submitted!");

      try {
        const response = await server.post("/auth/register", userData);

        dispatch(register(response.data));
      } catch (err) {
        console.log("Register Error:", err);
        if (err.response.data.dataValidator) {
          toast.error(err.response.data.error["message"], {
            autoClose: 4000,
          });
        } else if (err.response.data.message === "EMAIL_ALREADY_EXISTS") {
          toast.error(
            "The email entered is associated with an existing account! Try to Log In!",
            {
              autoClose: 4000,
            }
          );
          return;
        }
      }
    }
  };

  // function to handle Google submit
  const handleSubmitGoogle = async (data) => {
    const userData = { ...data };
    if (userData.terms) {
      delete userData.terms;

      console.log("Google Register submitted!");

      console.log("USER DATA:", userData);
      try {
        const response = await server.post("/auth/register", userData);

        // console.log(response);
        dispatch(register(response.data));
      } catch (err) {
        if (err.response.data.message === "EMAIL_ALREADY_EXISTS") {
          toast.error("Your Google account already exists! Try to Log In!", {
            autoClose: 4000,
          });
          return;
        }
      }
    }
  };

  return (
    countries && (
      <div className="SignUpSection flex w-full justify-center py-24">
        <div className="flex justify-center self-center bg-black bg-opacity-40 w-[75vw] max-w-[800px] rounded-3xl p-10 shadow-lg shadow-white/50">
          <div className="flex flex-col w-80 grow justify-center items-center pt-6 sm:justify-center sm:pt-0">
            <h2 className="welcome-section text-5xl drop-shadow mb-4 text-center">
              Welcome traveller!
            </h2>
            <h3 className="welcome-section text-lg drop-shadow text-center">
              To unlock our full content,
              <span className="line-break">you must register or log in!</span>
            </h3>
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
                    <div className="relative w-full">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="p-1 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={data.pass}
                        onChange={handleChangeData}
                        name="pass"
                        id="pass"
                        autoComplete="off"
                      />
                      <span
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
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
                    htmlFor="photo"
                    className="block text-sm font-medium text-gray-700 undefined"
                  >
                    URL Profile Photo
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      onChange={handleChangeData}
                      value={data.photo}
                      type="text"
                      name="photo"
                      id="photo"
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
                      <option key="-1" value="">
                        Select your country
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

              <GoogleLoginButton
                fn={handleSubmitGoogle}
                action={"signUp"}
                buttonText={"Register with Google"}
              />

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
