import { useState, useEffect } from "react";
import logo from "./assets/logo-spacex.png";
import * as API from "./services/launches";
import "./css/App.css";
import { Lauching } from "./components/Launching";

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
    //API.getAllLaunches().then(data =>setLaunches(data)); //es lo mismo que el de arriba
  }, []);

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <img className="nav__img" src={logo} />
            <h1 className="nav__title">SpaceX Launches</h1>
          </nav>
        </div>
      </header>
      <div className="container">
        <section className="releases">
            {launches.map((launch) => (
              <Lauching key={launch.mission_name} {...launch}/>
            ))}
        </section>
      </div>
    </>
  );
}
