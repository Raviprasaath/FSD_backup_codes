import { useState } from "react";
import { imageArray } from "../support";


const Carousel = () => {
    const [image, setImage] = useState(0);
    
    const handlerClick = (input) => {
        if(input === "next") {
            setImage((prev)=>prev === (imageArray.length-1) ? prev % (imageArray.length-1)  : prev+1);
        } else {
            setImage((prev)=>prev === 0? imageArray.length-1 : prev-1);
        }
    }

    return (
        <div className="flex justify-center items-center gap-2">
            <button onClick={()=>handlerClick("prev")}>Prev</button>
            {imageArray.map((item, index)=> (
                <img key={index} className={`w-96 h-96 object-cover ${image===index?'block':"hidden"}`} src={item} alt="" />
            ))}
            <button onClick={()=>handlerClick("next")}>Next</button>
        </div>
    ) 

}

export default Carousel;