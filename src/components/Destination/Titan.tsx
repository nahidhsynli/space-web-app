import { NavLink, } from "react-router-dom";
import imageToAdd from "./destination/image-titan.png"
import "../pages.css"

export const Titan = () => {
    const navLinkStyles = ({
        isActive,
    }: {
        isActive: boolean;
    }): { fontWeight: string; textDecoration: string } => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            textDecoration: isActive ? "underline" : "none",
        };
    };
    return (
        <div className="destination-page d-flex">
            <div className="destination-left w-50">
                <div className="destinationleft-first fs-4 mb-5">
                    <span>01</span> PICK YOUR DESTINATION
                </div>
                <img width="350px" height="350px" className="" src={imageToAdd} alt="mars image" />
            </div>

            <div className="destination-right w-50">
                <nav>
                    <NavLink style={navLinkStyles} to="/destination/moon">
                        MOON
                    </NavLink>
                    <NavLink style={navLinkStyles} to="/destination/mars">
                        MARS
                    </NavLink>
                    <NavLink style={navLinkStyles} to="/destination/europe">
                        EUROPE
                    </NavLink>
                    <NavLink style={navLinkStyles} to="/destination/titan">
                        TITAN
                    </NavLink>
                </nav>
                <div className="destination-right-bottom ">
                    <div className="destination-right-header mb-3">TITAN</div>
                    <p>
                        The only moon known to have a dense atmosphere other than Earth, Titan
                        is a home away from home (just a few hundred degrees colder!). As a
                        bonus, you get striking views of the Rings of Saturn.
                    </p>
                    <div className="destination-right-last d-flex gap-5">
                        <div className="destination-last-left">
                            <p>Avg. distance</p>
                            <h4>1.6 bil. km</h4>
                        </div>
                        <div className="destination-last-right">
                            <p>Est. travel time</p>
                            <h4>7 years</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
