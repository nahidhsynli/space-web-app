import { NavLink } from "react-router-dom";
// import './index.css'

export const Navbar = () => {
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
        <nav className="home-nav">
            <NavLink style={navLinkStyles} to="home">
                <span>00</span>  HOME
            </NavLink>
            <NavLink style={navLinkStyles} to="destination">
                <span>01</span> DESTINATION
            </NavLink>
            <NavLink style={navLinkStyles} to="crew">
                <span>02</span> CREW
            </NavLink>
            <NavLink style={navLinkStyles} to="technology">
                <span>03</span>  TECHNOLOGY
            </NavLink>
        </nav>
    );
};
