import { Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./routes";
import HomePage from "../pages/Home/HomePage";
import { LayoutApp, LayoutAuth } from "../ui/layouts";

export const AppRoutes = () => {
  return (
    <Routes>
      // ? Auth Routes
      <Route path={`${PublicRoutes.AUTH}/*`} element={<LayoutAuth />}>
        {/* <Route index path={PublicRoutes.LOGIN} element={<Login />} /> */}
      </Route>
      // ? Guest PublicRoutes
      <Route path={PublicRoutes.ROOT} element={<LayoutApp />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
};
