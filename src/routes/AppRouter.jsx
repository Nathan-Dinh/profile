import { createBrowserRouter } from "react-router-dom"
import Index from "../pages/Index"

const routes = createBrowserRouter ([
    {
        path: '/',
        element:  <Index/>, 
    }
])

export default routes