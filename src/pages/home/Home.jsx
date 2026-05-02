import { NavLink, Outlet } from "react-router";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
        <h1>This is homepage</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur accusantium nulla deserunt provident excepturi, vitae molestiae, deleniti praesentium, aut nesciunt aliquam? Ab, 
            vitae dicta. Ducimus distinctio id iure maxime?</p>
    
       <NavLink to={'/page1'}> Page1</NavLink>
           <NavLink to={'/page2'}> Page2</NavLink>

    <Outlet/>
    </div>
  )
}
