import { Home } from "../components/pages/Home";
import { Mypage } from "../components/pages/Mypage";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/mypage",
    exact: false,
    children: <Mypage />,
  },
];
