import { data } from "./constant";
import AccordionBody from "./AccordionBody";
import { useState } from "react";

const Accordion = () => {
    const [toggle, setToggle] = useState("");
    const filteredData = data.filter((item)=>item.card.card.title)

    const handlerToggle = (value) => {
        if (toggle === value) {
            setToggle("")            
        } else {
            setToggle(value);
        }
    }

    return (
        <>
            {filteredData.map((item, index)=>(
                <AccordionBody key={index} item={item} handlerToggle={handlerToggle} toggle={toggle}/>
            ))}
        </>
    )
}

export default Accordion;