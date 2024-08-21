import { Outlet } from "@remix-run/react"
import { HomeHeader } from "../_main._index/componets/home-header"

export default function MainLayout() {
  return (
    <>
      <HomeHeader />
      <Outlet />
    </>
  )
}
