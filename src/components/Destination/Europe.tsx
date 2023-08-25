import { NavLink, } from "react-router-dom";
import imageToAdd from "./destination/image-europa.png"
import "../pages.css"

export const Europe = () => {
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
                    <div className="destination-right-header mb-3">EUROPE</div>
                    <p>
                        The smallest of the four Galilean moons orbiting Jupiter, Europa is a
                        winter lover’s dream. With an icy surface, it’s perfect for a bit of
                        ice skating, curling, hockey, or simple relaxation in your snug
                        wintery cabin.
                    </p>
                    <div className="destination-right-last d-flex gap-5">
                        <div className="destination-last-left">
                            <p>Avg. distance</p>
                            <h4>628 mil. km</h4>
                        </div>
                        <div className="destination-last-right">
                            <p>Est. travel time</p>
                            <h4>3 years</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
