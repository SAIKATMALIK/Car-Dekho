import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css'
import { Button } from "./components/ui/button";
import Header from './Routes/Header';
import Footer from "./Routes/Footer";
import Home from "./Routes/Home";
import Loginpage from './Routes/Loginpage';
import Errorpage from './Routes/Errorpage';
import Search from './Routes/Search';
import Newpage from './Routes/Newpage';
import Preowned from "./Routes/Preowned";



const Applayout=()=>{
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
     
    </>
  )
  }
  const Approuter = createBrowserRouter(
    [
      {
        path: "/",
        element: <Applayout />,
        errorElement: <Errorpage />,
        children: [{
          path: "home",
          element: <Home />
        },
        {
          path: "search",
          element: <Search />
        }, {
          path: "new",
          element: <Newpage/>
        }
      ,{
        path:"login",
        element:<Loginpage/>
      },{
        path:"preowned",
        element:<Preowned/>
      }
      ]
      }]
);



function App(){
  return <RouterProvider router={Approuter} />
}


export default App;
