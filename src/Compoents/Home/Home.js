import React from 'react';
import './Home.css';
import img from '../../img/banner.png'
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData();
    const allTopic = topics.data;
    // console.log(allTopic);
    return (
        <div className=''>
            <div className="grid lg:grid-cols-2 md:grid-cols-1  my-14 items-center ">
                <div>
                    <h1 className='md:mx-auto sm:mx-auto text-2xl font-bold ml-2 '>Start Your Quiz with Web Quiz</h1>
                    <p>Keeping yourself entertained and educated is just a quiz away. Want to have some fun or learn about a topic? Curated to learn while having fun, our online quizzes are an excellent source of knowledge and entertainment. Take a quiz today to discover amazing facts about yourself or the world.</p>
                </div>
                <img src={img} className="md:mx-auto sm:mx-auto" alt="" width={500} height={500} />
            </div>

            <div className='my-14 py-6 mx-auto grid gap-3 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 '>
                {
                    allTopic.map(Stopic => <Topic Stopic={Stopic} key={Stopic.id}></Topic>)
                }
            </div>

        </div>
    );
};

export default Home;