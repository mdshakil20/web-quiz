import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="blog my-10 lg:w-3/4 md:w-3/4 sm:11/12 mx-auto text-justify border p-4 border-green-300 rounded-lg hover:shadow-[5px_5px_60px_8px_rgba(111,255,0,0.3)]">
                <h2 className='text-2xl'>What is the purpose of react router ?</h2>
                <p className='my-3 text-lg'>
                    <span className='underline mr-2'>Answer:</span>
                    React Router is a standard library for routing in React. It enables the navigation among
                    views of various components in a React Application, allows changing the browser URL, and keeps
                    the UI in sync with the URL.
                </p>
            </div>
            <div className="blog my-10 lg:w-3/4 md:w-3/4 sm:11/12 mx-auto text-justify border p-4 border-green-300 rounded-lg hover:shadow-[5px_5px_60px_8px_rgba(111,255,0,0.3)]">
                <h2 className='text-2xl'>How does context api work ?</h2>
                <p className='my-3 text-lg'>
                    <span className='underline mr-2'>Answer:</span>
                     The React Context API is a way for a React app to effectively produce global variables that can be passed around.
                    This is the alternative to "prop drilling" or moving props from grandparent to child to parent,
                    and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                </p>
            </div>
            <div className="blog my-10 lg:w-3/4 md:w-3/4 sm:11/12 mx-auto text-justify border p-4 border-green-300 rounded-lg hover:shadow-[5px_5px_60px_8px_rgba(111,255,0,0.3)]">
                <h2 className='text-2xl'>What is useref in react ?</h2>
                <p className='my-3 text-lg'>
                    <span className='underline mr-2'>Answer:</span>
                     The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.
                    It can be used to access a DOM element directly.
                    useRef can be used to store local mutable value in a component. It doesn't participate in rerendering (unline state data). useMemo is used to memoize
                    (like we do in Dynamic Programming, concept wise) and skip recalculation.
                    If you want to update data and cause a UI update, useState is your Hook. If you need some kind of data container throughout the component's lifecycle without causing render
                    cycles on mutating your variable, then useRef is your solution.
                </p>
            </div>
        </div>
    );
};

export default Blog;