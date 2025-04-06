import { Outlet } from "react-router-dom"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"

export const Root = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Header/>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
