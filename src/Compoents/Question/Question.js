import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = (props) => {
    const { question, options, correctAnswer } = props.question;

    let notify = () => toast("Right Answer!");

    const handleGetValue = (a) => {

        if (a === correctAnswer) {
            toast("Right Answer!");
        }
        else {
            notify = () => toast("Wrong Answer!");
        }


    }
    console.log(props.question);
    return (



        <div className='p-3 my-5 '>
            {notify}
            <ToastContainer />
            <p className=''>{question.replace(/(<([^>]+)>)/ig, '')}</p>
            <div className="p-2 grid lg:grid-cols-2 md:lg:grid-cols-2 gap-3 text-left">
                {
                    options.map(option =>
                        <div className='p-2 text-left bg-slate-800 p-3 rounded-lg hover:bg-slate-600'>
                            <input onClick={(e) => handleGetValue(e.target.value)} type="radio" name="option" value={option} id={option} />
                            <label className='ml-4 text-xs md:text-base' htmlFor={option}>{option}</label>
                        </div>

                    )
                }
            </div>

        </div>
    );
};

export default Question;


        // 