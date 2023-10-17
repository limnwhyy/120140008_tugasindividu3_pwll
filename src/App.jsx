import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Beranda from "./pages/Beranda";
import Kontak from "./pages/Kontak";
import Proyek from "./pages/Proyek";
import RootElements from "./layouts/RootElements";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootElements />}>
      <Route index element={<Beranda />} />
      <Route path="projects" element={<Proyek />} />
      <Route path="contact" element={<Kontak />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
