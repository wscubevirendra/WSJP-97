import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosHeartDislike } from "react-icons/io";


function ProductCard(props) {
    const [liked, setLiked] = useState(true);
    function toggleHandler() {
        setLiked(!liked)
    }
    return (
        <div className="card ">
            <img width={"200px"} src={props.source} alt="" />
            <h5 className="card-title">{props.title}</h5>
            <div className="overview">
                <p>
                    Description:-{props.description}
                </p>
                <h3 onClick={toggleHandler}>
                    {
                        liked == true ?
                            <FaHeart />
                            :
                            <IoIosHeartDislike style={{ color: "red" }} />
                    }
                </h3>
            </div>
        </div>
    )
}

export default ProductCard;