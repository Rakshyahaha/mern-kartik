import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home/Home";
import Rootlayout from "./components/Rootlayout";
import MealList from "./pages/meals/MealList";
import Meal from "./pages/meals/Meal";
import SearchMeal from "./pages/meals/SearchMeal";
export default function App() {
const router = createBrowserRouter([
{
  path: '/',
  element: <Rootlayout/>,
  children: [
    {
      index:true,
      element:<Home/>
    },
    {
      path:'meal/:id',
      element:<Meal/>
    },
    {
path:'search-meal',
element: <SearchMeal/>

    },
{
  path: 'meal-list/:category',
  element: <MealList/>
}
// {
//   path: '*',
//   element:<NotFound/>
// }
  ]}]);


// console.log(router);
  return <RouterProvider router={router}/> }
  //  (<div>App</div>)



