import React from 'react';
import { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";


const Statistic = () => {
    const topics = useLoaderData();
    const allTopics = topics.data;
    return (
        <div className='text-center mx-auto'>
            <h3 className='text-2xl my-5'> The Line Chart according to the number of quizzes per topic: </h3>
            <LineChart className='mx-auto' width={400} height={400} data={allTopics}>
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="rgb(0, 255, 26)"/>
                <YAxis  stroke="rgb(0, 255, 26)"/>
                <Line type="monotone" dataKey="total" stroke="rgb(0, 255, 26)" />
            </LineChart>
        </div>
    );
};

export default Statistic;