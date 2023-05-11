import "./App.css";
import "./css/main.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import Comute from "./components/Comute";
import Home from "./components/Home ";
import About from "./components/About";

function App() {
  const Root = () => {
    return (
      <>
        <div className="nav-container">
          <div className="nav-sec-1">
            <Link className="nav-element" to="/perlas">Home</Link>
          </div>
          <div className="nav-sec-2">
            <Link className="nav-element" to="/">Home</Link>
            <Link className="nav-element" to="comute">Comute</Link>
            <Link className="nav-element" to="about">About</Link>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </>
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route exact path="/" element={<Root />}>
        <Route exact index element={<Home />} />
        <Route exact path="/comute" element={<Comute />} />
        <Route exact path="/about" element={<About />} />
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
