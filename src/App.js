import "./App.css";
import logo from "./assets/logo.png";
import trophy from "./assets/1.png";
import award from "./assets/2.png";
import material from "./assets/3.png";

function App() {
  return (
    <>
      <div style={{ borderBottom: "1px solid #904b28" }}>
        <nav>
          <div id="center_logo">
            <img src={logo} width="30%" id="logo" alt="logo" />
          </div>
        </nav>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={trophy} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p>
                  <b>
                    C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVETION AWARD
                    2018 for the 4th time
                  </b>
                  <ul>
                    <li>
                      C.R.I.'s energy efficient products are well recognized by
                      various Government Institutions, as trustworthy products
                      for various projects across the globe to save energy.
                    </li>
                    <li>
                      C.R.I. is the highest contributor in the country for the
                      projects of EESL (Energy Efficiency Services Limited) to
                      replace the old inefficient pumps with 5 Star rated energy
                      efficient smart pumps with IoT enabled control panel.
                    </li>
                  </ul>
                </p>
                <img src={award} alt="award img" className="img-thumbnail" />
                <p>
                  Government of India has awarded the{" "}
                  <b>"National Energy Conservation Award 2018"</b>. Mr. G.
                  Selvaraj, Joint Managing Director of C.R.I. Group received the
                  award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
                  Raj Kumar Singh, Honorable Minister of State.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p id="para2">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <div class="card container" id="material_area">
          <img src={material} class="card-img-top" alt="material" />
          <div class="card-body">
            <p class="card-text text-center">
              Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables
              - Solar Systems - Motors
            </p>
          </div>
        </div>
      </div>

      {/* before footer part */}
      <div className="mt-5">
        <p className="text-center">
          <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>
        </p>
        <p className="text-center container-fluid">
          CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS PHARMA
          SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL &
          MINING | FOOD & BEVERAGE PETROCHEMICAL & REFINERIES | SOLAR | BUILDING
          | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL
        </p>
      </div>

      {/* footer part */}
      <div className="mx-1 mb-1 p-5" style={{ backgroundColor: "#ec3237" }}>
        <div class="row row-cols-md-3 g-4">
          <div class="card footer_text">
            <i class="fa-solid fa-phone" style={{ color: "white" }}>
              <sub className="ms-2">Toll free +91 1800 200 1234</sub>
            </i>
          </div>

          <div class="card footer_text">
            <i class="fa-brands fa-facebook" style={{ color: "white" }}>
              <sub className="ms-2">www.facebook.com/cripumps</sub>
            </i>
          </div>

          <div class="card footer_text">
            <i class="fa-solid fa-globe" style={{ color: "white" }}>
              <sub className="ms-2">www.crigroups.com</sub>
            </i>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
