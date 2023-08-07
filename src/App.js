import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
