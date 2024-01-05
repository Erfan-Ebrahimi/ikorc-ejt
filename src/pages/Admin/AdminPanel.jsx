import { Outlet } from "react-router-dom"
import Sidebar from "../../components/AdminCom/Sidebar/Sidebar"
import "./AdminPanel.scss"
const AdminPanel = () => {
  return (
    <div className="w-full flex">
      <div className="w-[20%]">
        <Sidebar/>

      </div>
      <div className="w-[80%]">
        <Outlet/>

      </div>
    </div>
  )
}

export default AdminPanel