
import { Toaster } from 'react-hot-toast';

import AppRouter from "./routes"; // Import your router




function App() {
  return (
    <div className='  '>
      <Toaster position="top-right" reverseOrder={false} />
      <AppRouter  />
      

    </div>
  )
}

export default App