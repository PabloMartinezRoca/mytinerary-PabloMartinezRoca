// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link as Anchor, NavLink } from "react-router-dom";

const NavBarLink = ({ props }) => {
  const { docUrl, linkText, linkType, icon } = props;

  if (linkType == "button") {
    let btn = (
      <li>
        <a
          href={docUrl}
          className={
            "bg-blue-600 px-3 py-2 rounded-xl text-white hover:bg-blue-500 focus:outline-none"
          }
        >
          <span className="inline-block">{icon}</span>
          {linkText}
        </a>
      </li>
    );

    return btn;
  } else {
    return (
      <li>
        {/* <Anchor to={docUrl} className={'font-display max-w-sm font-bold leading-tight'} ><span className={'link link-underline  text-[#3c88ae]'}>{linkText}</span></Anchor> */}

        <NavLink
          to={"/" + docUrl}
          className={({ isActive, isPending }) =>
            isPending
            ? "text-[#3c88ae] font-display max-w-sm font-bold leading-tight"
              : isActive
              ? "font-display max-w-sm font-bold leading-tight text-[#b43abe]"
                : "text-[#3c88ae] font-display max-w-sm font-bold leading-tight hover:text-[#6cc4d8] transition-all duration-300"
          }
        >
          <span className={" link-underline"}>
            {linkText}
          </span>
        </NavLink>
      </li>
    );
  }
};

export default NavBarLink;
