import React, { Suspense } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { Loading } from "../components/shared/Loading";
import { ROUTES_URL } from "../constants/RoutsURL";

const HomePage = React.lazy(() => import("../Pages/HomePage"));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading loading={true} />}>
      <Switch>
        <Route path={ROUTES_URL.HOME} element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
      </Switch>
    </Suspense>
  );
};
