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

    return (

        <div className='p-3 pb-5 my-5 hover:shadow-[5px_5px_60px_8px_rgba(111,255,0,0.2)] rounded-lg '>

            <div className='lg:flex md:flex justify-between w-full'>
                <p className='lg:text-xl md:text-xl w-12/12 my-2'>{question.replace(/(<([^>]+)>)/ig, '')}</p>
                <p className='flex items-center'> Ans: <EyeIcon onClick={() => toast(correctAnswer)} className='w-6 cursor-pointer ml-2 lg:mr-3 md:mr-3' ></EyeIcon></p>
            </div>
            <div className="text-xl p-2 grid lg:grid-cols-2 md:lg:grid-cols-2 gap-3 text-left">
                {
                    options.map(option =>
                        <div className='text-left bg-slate-800 rounded-lg hover:bg-slate-600'>
                            <label className='ml-4 p-3 block text-xs md:text-base w-full' htmlFor={option}>
                                <input onClick={(e) => handleGetValue(e.target.value)} type="radio" name="option" className='mr-2' value={option} id={option} />
                                {option}
                            </label>
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