import { Outlet } from "react-router-dom"
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar"
import Footer from "../Pages/Shared/Footer/Footer"

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="pt-28 pb-20">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Main
