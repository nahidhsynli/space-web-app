import { Link } from "react-router-dom"
import VehicleImage from "./technology/image-space-capsule-portrait.jpg"

export const Capsule = () => {
    return (
        <div className="technology d-flex gap-5">
            <div className="tech-left w-50 ">
                <div className="tech-left-header fs-4 mb-5">
                    <span>03</span> SPACE LAUNCH 101
                </div>
                <div className="tech-left-main d-flex gap-4">
                    <div className="tech-buttons  d-flex flex-column p-5 gap-4 ">
                        <Link to="/technology/vehicle">
                            <button id='tech-button' className="fs-4 vehicle-button d-inline " >1</button>
                        </Link>
                        <Link to="/technology/spaceport">
                            <button id='tech-button' className="fs-4 spaceport-button" >2</button>
                        </Link>
                        <Link to="/technology/capsule">
                            <button id='tech-button' className="fs-4 capsule-button" >3</button>
                        </Link>
                    </div>
                    <div className="tech-left-second mt-5">
                        <p className='fs-4' >THE TERMINOLOGY...</p>
                        <h1>SPACE CAPSULE</h1>
                        <p className='fs-5'>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry
                            capsule to reenter the Earth's atmosphere without wings. Our capsule is where
                            you'll spend your time during the flight. It includes a space gym, cinema,
                            and plenty of other activities to keep you entertained.</p>
                    </div>
                </div>
            </div>
            <div className="tech-right w-50 ">
                <img src={VehicleImage} alt="vehicle image" />
            </div>
        </div>
    )
}
