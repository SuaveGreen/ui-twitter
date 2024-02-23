import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { TimeLine } from "./pages/TimeLine";
import { Status } from "./pages/Status";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <TimeLine />
      },
      {
        path: 'status',
        element: <Status />
      },
    ]
  }
])