import RootLayout from "@/components/layout";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routePaths } from "./route-paths";

const HomePage = lazy(() => import("@/pages/home/home"));
const Login = lazy(() => import("@/pages/auth/login/login"));
const Register = lazy(() => import("@/pages/auth/register/register"));

export default function Router() {
  return (
    <Routes>
      <Route
        path={routePaths.auth.login}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path={routePaths.auth.register}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Register />
          </Suspense>
        }
      />
      <Route path={routePaths.home.root} element={<RootLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
