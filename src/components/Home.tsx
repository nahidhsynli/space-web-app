import "./pages.css"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className="home-page d-flex mt-3" >
            <div className="homepage-left w-50 mt-4 p-5" >
                <div className=" left-first fs-2  ">So, you want to travel to</div>
                <div className="left-second  " >SPACE</div>
                <p className=" left-third ">Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="homepage-right w-50">
                <Link to="/destination">
                    <button className="explore-button fs-3" >EXPLORE</button>
                </Link>
            </div>
        </div>
    )
}
