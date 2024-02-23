import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";

export function Default() {
  return(
    <div className='max-w-[1000px] min-h-[100vh] mx-auto my-0 grid grid-cols-phoneTimeline sm:grid-cols-timeline'>
      <SideBar />    

      <div className='border-solid border-y-0 border-[1px] border-borda'>
        <Outlet />
      </div>
    </div>
  )
}