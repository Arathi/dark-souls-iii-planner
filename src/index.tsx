import { createRoot } from "react-dom/client";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router";
import Root from "./pages/root";
import DarkSouls3 from "./pages/dark-souls-3";

const root = document.getElementById("root");
if (root) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Navigate to="/dark-souls-iii" />,
        },
        {
          path: "dark-souls-iii",
          element: <DarkSouls3 />,
        },
      ],
    },
  ]);
  createRoot(root).render(<RouterProvider router={router} />);
}
