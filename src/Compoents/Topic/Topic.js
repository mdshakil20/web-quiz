import React from 'react';
import { Link } from 'react-router-dom';

const Topic = (props) => {
    const { id, name, logo, total } = props.Stopic;

    return (
        <div className='border border-green-600 w-56  p-5 mx-auto rounded-lg text-center shadow-[5px_5px_60px_8px_rgba(111,255,0,0.3)]'>
            <img className='' src={logo} alt="" />
            <h2 className='my-2'>{name}</h2>
            <p className='mb-3'>Total Quix: {total}</p>

            <Link to={`/quiz/${id}`} className='border border-green-400  rounded-lg  my-5 hover:bg-green-400
                hover:text-black px-10 py-1 '>Start Quiz</Link>
            
        </div>
    );
};

export default Topic;