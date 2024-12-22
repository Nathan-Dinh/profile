import { RouterProvider } from "react-router-dom"
import AppRouter from "./routes/AppRouter"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

function App() {
  return (
    <div className='font-sans h-screen p-5'>
      <div className="flex justify-around">
        <div className="h-screen max-w-full md:lg:max-w-[60%] lg:max-w-[40%] flex flex-col justify-between">
          <div>
            <Navigation/>
            <RouterProvider router={AppRouter} />
          </div>
          <div >
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
