// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import NavBarLink from "./NavBarLink";

const NavBar = ({ navBarLinks, section }) => {

  const links = navBarLinks.filter(item => item.showIn.includes(section));
  
  return (
    <nav className="flex align-middle h-100">
      <ul className="flex gap-5 self-center">
        {
          // No es forEach, porque forEach no retorna nada; map retorna la lista de elementos renderizables confirgurados con cada elemento de la colección de datos mapeada. Es decir, devuelve una lista de nodos que luego React interpretará y renderizará.
                    
          links.map((props, indice) => {
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

export default NavBar;

