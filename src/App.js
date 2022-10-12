import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Compoents/Home/Home';
import Main from './layout/Main';
import Topics from './Compoents/Topics/Topics';
import QuizDetails from './Compoents/QuizDetails/QuizDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader:()=> fetch(' https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/topics',
          element: <Topics></Topics>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({params})=>{
            console.log(params);
          } ,
          element: <QuizDetails></QuizDetails>
        },
        {
          path: '*',
          element: <div className='text-center text-4xl'>This route is not found...</div>
        }
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



//https://openapi.programming-hero.com/api/quiz/${id}