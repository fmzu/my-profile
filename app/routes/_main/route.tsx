import { Outlet } from "@remix-run/react"
import { HomeHeader } from "../_main._index/components/home-header"

export default function MainLayout() {
  return (
    <>
      <HomeHeader />
      <Outlet />
    </>
  )
}
