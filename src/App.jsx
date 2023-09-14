import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Cities from "./pages/Cities";
import CityInfo from "./pages/CityInfo";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MainLayout from "./layouts/MainLayout";
import HttpStatus404 from "./pages/HttpStatus404";
import HttpStatus503 from "./pages/HttpStatus503";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCities } from "./redux/actions/citiesActions";
import { authenticate } from "./redux/actions/authenticateUserActions";
import LogOut from "./pages/LogOut";
// import destinations from "./data/destinations.json" // Load static data content in JSON format

const App = () => {

  // Línea comentada porque se reemplaza por useSelector() de Redux
  //const [destinations, setDestinations] = useState(null);

  const dispatch = useDispatch();

  // constantes del store de Redux
  const { loadingMainInterfase, cities } = useSelector(
    (store) => store.citiesReducers
  );
  // console.log(cities);
  // store está exportado en store.js
  // citiesReducer está referenciado en store.js
  // cities es una propiedad citiesReducer.js
  // Anteriormente era
  // const destinations = useSelector(store => store.citiesReducers.cities)
    
  useEffect(() => {
    /* Así era la carga de las ciudades:
    server("http://localhost:3000/api/cities/getAllCities") // si se omite el método, por defecto es GET
        .then((response) => {
          setDestinations(response.data.response);
          console.log("Starting app...");
        })
        .catch(function (error) {
          alert(error); //this alert shows up correctly
        }); 
    */

    console.log("Starting app...");

    async function fetchData() {
      await dispatch(getAllCities());
      console.log("Data Loaded");
      // console.log(data);

      // Con Redux ya no es necesario
      // setDestinations(data.payload);
    }
    fetchData();

    // Recarga el token almacenado en local storage si hay usuario logueado
    dispatch(authenticate())
    
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout /* destinations={destinations} */ />,
      children: [
        {
          path: "/",
          element: <Index />,
        },
        {
          path: "/index",
          element: <Index />,
        },
        {
          path: "/cities",
          element: <Cities />,
        },
        {
          path: "/cities/:city",
          element: <Cities />,
        },
        {
          path: "/travelTo/:id",
          element: <CityInfo />,
        },
        {
          path: "/register",
          element: (
            <SignUp
              bgSectionPath="/images/bgGeneral/"
              bgSection="sign-up-1920.webp"
            />
          ),
        },
        {
          path: "/signIn",
          element: (
            <SignIn
              bgSectionPath="/images/bgGeneral/"
              bgSection="sign-in-1920.webp"
            />
          ),
        },
        {
          path: "/logOut",
          element: (
            <LogOut
              bgSectionPath="/images/bgGeneral/"
              bgSection="log-out-1920.webp"
            />
          ),
        },
        {
          path: "/serverMaintenance",
          element: (
            <HttpStatus503
              bgSectionPath="/images/bgHttpStatusCodes/"
              bgSection="Departures-Board-DB-offline-1920.webp"
            />
          ),
        },
        {
          path: "*",
          element: (
            <HttpStatus404
              bgSectionPath="/images/bgHttpStatusCodes/"
              bgSection="Desert-Island-Middle-Of-Nowhere-1920.webp"
            />
          ),
        },
      ],
    },
  ]);

  if (loadingMainInterfase) {
    return (
      <>
        <div className="flex flex-col gap-10 w-[100vw] h-[100vh] justify-center items-center">
          <img
            src="/src/assets/logos/mytinerary-logo.svg"
            alt="MYTINERARY"
            className="w-[360px] h-[120px]"
          ></img>
          <h1 className="text-white text-3xl">
            Loading interfase. Please, wait...
          </h1>
        </div>
      </>
    );
  } else {
    if (cities.length > 0) {
      console.log("Rendering Router");
      return (
        <>
          {<RouterProvider router={router} />} {/* Espera la carga de datos */}
        </>
      );
    }
  }
};

export default App;
