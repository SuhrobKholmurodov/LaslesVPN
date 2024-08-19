import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import Testimonials from "./pages/Testimonials/Testimonials";
import Features from "./pages/Features/Features";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./Layout/Layout";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Features",
          element: <Features />,
        },
        {
          path: "/Pricing",
          element: <Pricing />,
        },
        {
          path: "/Testimonials",
          element: <Testimonials />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
