import React from 'react'
import { postedComments } from './service'

const SingleComments = ( {data} ) => {
    return (
        <div className='flex items-center gap-4 bg-gray-100'>
            <div>
                <img className='w-8' src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="" />
            </div>
            <div>
                <p className='text-lg font-bold'>{data.name}</p>
                <p className='text-sm'>{data.profile}</p>
            </div>
        </div>

    )
}

const CommentsBody = ( {data} ) => {
    console.log(data);
    return (
        <div>
            <div>
                <SingleComments data={data}/>
            </div>
            <div className='mx-4 border-2 border-l-black'>
                {data?.replies?.map((item, id)=><CommentsBody key={id} data={item}/>)}
            </div>
        </div>
    )
}

const NestedComments = () => {
    return (
        <div>
            {postedComments.map((item, id)=><CommentsBody key={id} data={item}/>)}
        </div>
    )
}

export default NestedComments;
