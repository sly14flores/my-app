import { Outlet, useOutlet, useLocation } from "react-router-dom"
import List from "./List"

const Groups = () => {

  const outlet = useOutlet()

  return (
    <>
      {
        outlet
        ?
        <Outlet />
        :
        <List />
      }
    </>
  )
}

export default Groups