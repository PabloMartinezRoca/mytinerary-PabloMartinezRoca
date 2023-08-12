import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Cities from "./pages/Cities";
import MainLayout from "./layouts/MainLayout";
import HttpStatus404 from "./pages/HttpStatus404";

const destinations = [
  [
    {
      city: "Buenos Aires",
      country: "Argentina",
      imgUrl: "Buenos-Aires-Argentina.webp",
    },
    {
      city: "Cartagena",
      country: "Colombia",
      imgUrl: "Cartagena-Colombia.jpg",
    },
    {
      city: "Rio de Janeiro",
      country: "Brazil",
      imgUrl: "Rio-de-Janeiro-Brasil.webp",
    },
    { city: "New York", country: "USA", imgUrl: "New-York-USA.webp" },
  ],
  [
    { city: "Bruges", country: "Belgium", imgUrl: "Bruges-Belgium.jpg" },
    { city: "London", country: "England", imgUrl: "London-England.webp" },
    { city: "Madrid", country: "Spain", imgUrl: "Madrid-Spain.webp" },
    { city: "Rome", country: "Italy", imgUrl: "Rome-Italy.webp" },
  ],
  [
    { city: "Seoul", country: "Korea", imgUrl: "Seoul-Korea.webp" },
    {
      city: "Fuji Mountain",
      country: "Japan",
      imgUrl: "Fuji-Mountain-Japan.webp",
    },
    {
      city: "Marina Bay",
      country: "Singapore",
      imgUrl: "Marina-Bay-Singapore.jpg",
    },
    { city: "Shanghai", country: "China", imgUrl: "Shanghai-China.webp" },
  ],
];

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
        path: "*",
        element: <HttpStatus404 bgSectionPath = './images/bgHttpStatusCodes/' bgSection='Desert-Island-Middle-Of-Nowhere-1920.webp' />
      }
    ],
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
