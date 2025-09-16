import { Outlet } from "react-router-dom";
import HeaderClient from "../../components/HeaderClients";


export default function ClientHome() {
  return (
    <>
    <HeaderClient />
    <Outlet />
    </>
  )
}
