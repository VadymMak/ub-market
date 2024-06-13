import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<RootLayout />}></Route>)
);
