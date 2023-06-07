import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./components/parts/Loader";

import routes from "./routes";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}

export default App;
