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
import Search from "./components/Search";
import Home from "./components/Home ";

function App() {
  const Root = () => {
    return (
      <>
        <div className="app-container">
          <Link to="/">Home</Link>
          <Link to="comute">Comute</Link>
          <Link to="search">Search</Link>
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
        <Route exact path="/search" element={<Search />} />
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
