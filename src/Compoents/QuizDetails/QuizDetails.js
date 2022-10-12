import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const QuizDetails = () => {
    const quiz = useLoaderData();
    console.log(quiz.data.questions);
    return (
        <div>
            <h1 className='text-3xl text-center pb-3 border-b border-green-400 '>Quiz for {quiz.data.name}</h1>
            <h3> new; {quiz.data.questions.length}</h3>
            {
                quiz.data.questions.map(Squestion => <Question
                    key={Squestion.id}
                    question={Squestion}
                ></Question>)
            }
        </div>
    );
};

export default QuizDetails;