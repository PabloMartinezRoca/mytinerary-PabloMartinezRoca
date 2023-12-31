// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

let mapIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 me-1 inline"
  >
    <path
      fillRule="evenodd"
      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
      clipRule="evenodd"
    />
  </svg>
);

let exitIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-5 h-5 me-1 inline"
  >
    <path
      d="M16 17L21 12M21 12L16 7M21 12H9M9 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

let profileIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-5 h-5 me-1 inline"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
);

let twitterIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    aria-hidden="true"
    className="h-5 w-5 me-1 inline fill-white"
  >
    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"></path>
  </svg>
);

const navBarLinks = [
  {
    docUrl: "index",
    linkText: "Home",
    hideIfActive: false,
    linkType: "underline",
    icon: "",
    showIn: ["header", "footer"],
  },
  {
    docUrl: "cities",
    linkText: "Cities",
    hideIfActive: false,
    linkType: "underline",
    icon: "",
    showIn: ["header", "footer"],
  },
  {
    docUrl: "register",
    linkText: "Register",
    hideIfActive: true,
    linkType: "button",
    icon: "",
    showIn: ["header"],
    showOnlyOnUserStatus: "offline",
  },
  {
    docUrl: "signIn",
    linkText: "Log In",
    hideIfActive: true,
    linkType: "button",
    icon: profileIcon,
    showIn: ["header"],
    showOnlyOnUserStatus: "offline",
  },
  {
    linkType: "profileIcon",
    showIn: ["header"],
    showOnlyOnUserStatus: "online",
  },
  {
    docUrl: "/logOut",
    linkText: "log Out",
    hideIfActive: false,
    linkType: "button",
    icon: exitIcon,
    showIn: ["header"],
    showOnlyOnUserStatus: "online",
  },
  {
    docUrl: "#",
    linkText: "Find Us",
    hideIfActive: false,
    linkType: "button",
    icon: mapIcon,
    showIn: ["footer"],
  },
  {
    docUrl: "#",
    linkText: "Share on Twitter",
    hideIfActive: false,
    linkType: "button",
    icon: twitterIcon,
    showIn: ["footer"],
  },
];

const MainLayout = (/* { destinations } */) => {
  console.log("Starting Main Layout");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    location.pathname == "/" && navigate("/index");
  }, [location.pathname, navigate]);

  /* Antes de Redux
  const bgSection =
  destinations[Math.floor(Math.random() * destinations.length)].imgUrl
  */

  return (
    <div className="mainLayout flex flex-col">
      <Header navBarLinks={navBarLinks} />
      <Outlet /> {/* context={[bgSection, destinations]} */}
      <Footer navBarLinks={navBarLinks} />
    </div>
  );
};

export default MainLayout;
