import { Route, RouterProvider } from "react-router-dom";
import "./App.css";
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./Home";
import Movies from "./movies/Movies";
import MoviesLayout from "./Layout/MovieLayout";
import TheatreSelection from "./theatre-selection/TheatreSelection";
import NotFound from "./NotFound";
import { AppProvider } from "./context/AppContextProps";


const App: React.FC = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>} >
        <Route index element={<Home />} />
        <Route path="/movies"  element={<MoviesLayout />}>
          <Route index element={<Movies />} />
          <Route path=":name" element={<TheatreSelection />} />
        </Route>
        <Route path="*" element={<NotFound />} />
       </Route>
    )
  );

  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;



