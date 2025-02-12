import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/main-layout'
import Home from './routes/home'
import Profile from './routes/profile'
import Index from './routes/index'
import ProtectedRoute from "./components/protected-route";

const router = createBrowserRouter([
  {
    path:"/",    
    children:[
      {
        path:"",
        element: <Index/>
      }      
    ]
  },  
  {
    path:"/main",
    element: (
      <ProtectedRoute>
        <MainLayout/>
      </ProtectedRoute>
    ),
    children:[
      {
        path:"home",
        element: <Home/>
      },
      {
        path:"profile",
        element: <Profile/>
      }
    ]
  }
])



function App() {  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
