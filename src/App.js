import "./css/App.css";
import "./css/main.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import Findit from "./components/Findit";
import Home from "./components/Home ";
import About from "./components/About";
import ShowQueries from "./components/ShowQueries";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const Root = () => {
    return (
      <>
        <div className="nav-container">
          <div className="nav-sec-2">
            <Link className="nav-element" to="/">
              Home
            </Link>
            <Link className="nav-element" to="findit">
              Find it
            </Link>
            <Link className="nav-element" to="about">
              About
            </Link>
            <Link className="nav-element" to="show-queries">
              Queries
            </Link>
          </div>
        </div>
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route exact path="/" element={<Root />}>
        <Route exact index element={<Home />} />
        <Route exact path="/findit" element={<Findit />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/show-queries" element={<ShowQueries />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
