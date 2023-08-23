import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Cities from "./pages/Cities";
import CityInfo from "./pages/CityInfo";
import MainLayout from "./layouts/MainLayout";
import HttpStatus404 from "./pages/HttpStatus404";
import { useEffect, useState } from "react";
import axios from "axios";
// import destinations from "./data/destinations.json" // Load static data content in JSON format

const App = () => {
  const [destinations, setDestinations] = useState(null);

  useEffect(() => {
    axios("http://localhost:3000/api/cities/getAllCities") // si se omite el método, por defecto es GET
      .then((response) => {
        setDestinations(response.data.response);
        console.log("Starting app...");
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout destinations={destinations} />,
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
          path: "*",
          element: (
            <HttpStatus404
              bgSectionPath="./images/bgHttpStatusCodes/"
              bgSection="Desert-Island-Middle-Of-Nowhere-1920.webp"
            />
          ),
        },
      ],
    },
  ])

  return (
  <>
    {destinations && <RouterProvider router={router} />} { /* Espera la carga de datos */ } 
  </>
  )
}

export default App;
