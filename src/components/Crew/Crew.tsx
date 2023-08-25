import imageToAdd from "./crew/image-anousheh-ansari.png"
import "../pages.css"
import { Link } from "react-router-dom"

export const Crew = () => {
  return (
    <div className="crew-page d-flex" >
      <div className="crew-left w-50">
        <div className="crew-left-first fs-4 mb-5">
          <span>02</span> MEET YOUR CREW
        </div>
        <div className="crew-left-second mt-1 ">
          <h2 className="mb-3 fs-3">FLIGHT ENGINEER</h2>
          <h1 className="mb-3">ANOUSHEH ANSARI</h1>
          <p> Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
            Ansari was the fourth self-funded space tourist, the first self-funded woman to
            fly to the ISS, and the first Iranian in space. </p>
        </div>
        <div className="crew-buttons  d-flex gap-3">
          <Link to="/crew/engineer">
            <button id='crew-button' className="fs-4 vehicle-button " ></button>
          </Link>
          <Link to="/crew/commander">
            <button id='crew-button' className="fs-4 spaceport-button" ></button>
          </Link>
          <Link to="/crew/pilot">
            <button id='crew-button' className="fs-4 capsule-button" ></button>
          </Link>
          <Link to="/crew/specialist">
            <button id='crew-button' className="fs-4 capsule-button" ></button>
          </Link>
        </div>
      </div>
      <div className="crew-right w-50 p-2">
        <img width="450px" height="450px" src={imageToAdd} alt="" />
      </div>


    </div>
  )
}
