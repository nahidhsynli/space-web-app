import imageToAdd from "./crew/image-victor-glover.png"
import "../pages.css"
import { Link } from "react-router-dom"

export const Pilot = () => {
    return (
        <div className="crew-page d-flex" >
            <div className="crew-left w-50">
                <div className="crew-left-first fs-4 mb-5">
                    <span>02</span> MEET YOUR CREW
                </div>
                <div className="crew-left-second mt-1 ">
                    <h2 className="mb-3 fs-3">PILOT</h2>
                    <h1 className="mb-3">VICTOR GLOVER</h1>
                    <p> Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
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
