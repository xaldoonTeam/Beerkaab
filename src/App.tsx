
import { Toaster } from 'react-hot-toast';
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';




function App() {
  return (
    <div className='  '>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
      

    </div>
  )
}

export default App