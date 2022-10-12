import './App.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Home from './Compoents/Home/Home';
import Main from './layout/Main';
import Topics from './Compoents/Topics/Topics';
import QuizDetails from './Compoents/QuizDetails/QuizDetails';
import Statistic from './Compoents/Statistic/Statistic';
import Blog from './Compoents/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch(' https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/topics',
          element: <Topics></Topics>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            // console.log(params.quizId);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId} `);
          },
          element: <QuizDetails></QuizDetails>
        },
        {
          path: '/statistic',
          loader: () => fetch(' https://openapi.programming-hero.com/api/quiz'),
          element: <Statistic></Statistic>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '*',
          element: <div className='text-center'>
            <p className='my-12 text-4xl'>Nothing is found in this router.</p>
            <Link className='text-link my-24' to='/'>Go to Home</Link>
            </div>
        },

      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;



