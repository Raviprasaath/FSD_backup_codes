import React, { useState } from 'react'

const AccordionBody = ( {item, handlerToggle, toggle} ) => {


    return (
        <div className="flex flex-col w-3/4 m-auto shadow-lg p-2 justify-center items-center">
            <div onClick={()=>handlerToggle(item.card.card.title)} className="flex justify-between w-full cursor-pointer">
                <div className="flex gap-5 font-bold p-2">
                    {item.card.card.title}
                    <p>
                    {item.card.card.itemCards.length}
                    </p>
                </div>
                <h1>
                    ⬇️
                </h1>
            </div>
            <div className={`bg-gray-100 w-full p-2 ${toggle === item.card.card.title?'block':'hidden'}`} >
                {item.card.card.itemCards.map((item)=>(
                    <div key={item.card.info.id}>
                        {item.card.info.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AccordionBody
