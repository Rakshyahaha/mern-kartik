import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Rootlayout from "./components/Rootlayout";


export default function App() {
const router = createBrowserRouter([
{
  // path: '/',
  // element: <Rootlayout />,
  children: [
    {
      index:true,
      element:<Home/>
    },
// {
//   path: 'about',
//   element: <About />
// },
// {
//   path: '*',
//   element:<NotFound/>
// }
  ]
}
]);

// console.log(router);
  return <RouterProvider router={router}/>
  //  (<div>App</div>)
}


