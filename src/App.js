import "./App.css";
import React from 'react';
import { Link } from "react-scroll";
import img1 from '../src/img/SvgAnimação.svg'

function IrAoTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function App() {
  const menuItems = [
    {
      id: 1,
      title: "PAG1",

    },
    {
      id: 2,
      title: "PAG2",
    },
    {
      id: 3,
      title: "PAG3",
    },
    {
      id: 4,
      title: "PAG4",
    },
  ];

  return (
    <div className="App">
      <header>
        <nav>
          <h2 onClick={IrAoTopo}>‹AR/›</h2>
          <h1 style={{ width: "100%", color: "white" }}></h1>

          <ul>
            {menuItems.map((menu) => (
              <li>
                <Link
                  to={menu.title}
                  smooth={true}
                  offset={-430}
                  duration={850}
                >
                  {menu.title}

                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </header>

      <main>


        {menuItems.map((menu) => (
          <div className="content">
            <h1 className="content-header" id={menu.title} >
              {(() => {
                switch (menu.title) {
                  case "PAG1": return "a";
                  case "PAG2": return "b";
                  case "PAG3": return "c";
                  case "PAG4": return "d";
                }
              })()}
            </h1>
          </div>
        ))}



        <div className="svgA">
          <img className="svgA" src={img1} alt={"Ilustração representando um hacker sentado mexendo no notebook."} data-tilt={""} />
        </div>

      </main>


    </div>
  );
}

export default App;
