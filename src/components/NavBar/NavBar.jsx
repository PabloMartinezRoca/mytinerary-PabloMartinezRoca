// eslint-disable-next-line no-unused-vars
import React, { Fragment, useEffect } from "react";
import { PropTypes } from "prop-types";
import NavBarLink from "./NavBarLink";
import { useSelector } from "react-redux";

const NavBar = ({ navBarLinks, section }) => {
  const url = window.location.pathname;
  const { status } = useSelector((store) => store.authenticateUserReducers);

  const links = navBarLinks.filter((item) => {
    const isIncluded = item.showIn.includes(section);
    const isExcluded =
      item.hideIfActive && item.docUrl === url.replace(/\//g, "");
    return isIncluded && !isExcluded;
  });

  return (
    <nav className="flex align-middle h-100">
      <ul className="flex gap-5 self-center">
        {
          // No es forEach, porque forEach no retorna nada; map retorna la lista de elementos renderizables confirgurados con cada elemento de la colección de datos mapeada. Es decir, devuelve una lista de nodos que luego React interpretará y renderizará.

          links
            .filter(
              (link) =>
                link.showOnlyOnUserStatus === status ||
                link.showOnlyOnUserStatus === undefined
            )
            .map((props, indice) => {
              return (
                <Fragment key={indice}>
                  <NavBarLink props={props} />
                </Fragment>
              );
            })
        }
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  navBarLinks: PropTypes.array.isRequired,
  section: PropTypes.string,
};

export default NavBar;
