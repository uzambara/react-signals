import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import './App.css'
import { HomePage } from './pages'
import { HomePageTabs } from './pages/HomePage/models.ts'

const browserRouter = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to='home' />
      },
      { path: 'home', element: <Navigate to={HomePageTabs.StateExample} /> },
      { path: 'home/:tab', Component: HomePage }
    ]
  }
])
function App() {
  return <RouterProvider router={browserRouter}></RouterProvider>
}

export default App
