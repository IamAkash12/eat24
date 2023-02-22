import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header, MainContainer , CreateContainer } from './components';
import { async } from '@firebase/util';
import { getAllFoodItems } from './utils/FirebaseFunction';
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';

const App = () => {

  const[{}, dispatch]= useStateValue();

  const fetchData= async () =>{
    await getAllFoodItems().then((data)=>{
      dispatch({
        type:actionType.SET_FOOD_ITEMS,
        foodItems:data
      })
    });
  };

  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <AnimatePresence mode='wait'>
             <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-1 md:mt-2 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
   
  )
}

export default App;
