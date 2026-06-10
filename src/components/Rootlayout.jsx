import { Outlet } from "react-router";
import Header from "./Header";


export default function Rootlayout() {

  return (
    <div>

  <Header/>
<Outlet/>

    </div>
  )
}
