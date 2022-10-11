import React from 'react';
import './Home.css';
import img from '../../img/logo.png'

const Home = () => {
    return (
        <div className='container flex items-center'>
            <img src={img} alt="" width={50} height={50} />
            <h1 className=' text-2xl font-bold ml-2  '>Start Your Quiz with Web Quiz</h1>
        </div>
    );
};

export default Home;