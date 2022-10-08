import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './components/layouts/Main';
import Orders from './components/Orders/Orders';

function App() {

  const router = createBrowserRouter(
  [

    {
      path: '/',
      element:<Main></Main>,
      children:[
{
  path:'/',
  loader: ()=> fetch('tShirts.json'),
  element: <Home></Home>
},

{
  path:'/orders',
  element:<Orders></Orders>
},


      ]
    }

  ])
  return (
    <div className="App">
    
<RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
