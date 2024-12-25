import React from 'react'
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';




function App() {
  return (
    <div className=' w-[90%] m-auto'>
      
      <RouterProvider router={router} />
      

    </div>
  )
}

export default App