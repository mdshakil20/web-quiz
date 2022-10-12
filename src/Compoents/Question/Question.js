import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = (props) => {
    const { question, options, correctAnswer } = props.question;


    const handleGetValue = (a) => {

        if (a === correctAnswer) {
            toast("Right Answer!");
        }
        else {
            toast("Wrong Answer!");
        }
    }
    const ans = () => {

    }

    return (

        <div className='p-3 pb-5 my-5 hover:shadow-[5px_5px_60px_8px_rgba(111,255,0,0.2)] rounded-lg '>
            <div className='flex justify-between w-full'>
                <p className='text-xl my-2'>{question.replace(/(<([^>]+)>)/ig, '')}</p>
                <EyeIcon onClick={() => toast(correctAnswer)} className='w-5 cursor-pointer mr-3' ></EyeIcon>
            </div>
            <div className="text-xl p-2 grid lg:grid-cols-2 md:lg:grid-cols-2 gap-3 text-left">
                {
                    options.map(option =>
                        <div className='p-2 text-left bg-slate-800 p-3 rounded-lg hover:bg-slate-600'>
                            <input onClick={(e) => handleGetValue(e.target.value)} type="radio" name="option" className='' value={option} id={option} />
                            <label className='ml-4 text-xs md:text-base w-full' htmlFor={option}>{option}</label>
                            <ToastContainer
                                position="top-right"
                                autoClose={3000}
                                theme="dark"
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Question;


        // 