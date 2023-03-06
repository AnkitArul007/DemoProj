import './App.css';
import { createBrowserRouter, createRoutesFromElements ,Route, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./HomePage"
import ProductsPage from './components/ProductsPage';

function App() { 
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index path='/' element={<Home />} />
        <Route path='/products' element={<ProductsPage />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

const Root = ()=>{
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  )
}
