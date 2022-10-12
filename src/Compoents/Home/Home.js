import React from 'react';
import './Home.css';
import img from '../../img/logo.png'
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData();
    const allTopic = topics.data;
    // console.log(allTopic);
    return (
        <div className=''>
            <div className="flex items-center ml-3">
                <img src={img} alt="" width={50} height={50} />
                <h1 className=' text-2xl font-bold ml-2 '>Start Your Quiz with Web Quiz</h1>
            </div>

            <div className='my-10 mx-auto grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 '>
                {
                    allTopic.map(Stopic => <Topic Stopic={Stopic} key={Stopic.id}></Topic>)
                }
            </div>

        </div>
    );
};

export default Home;