import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddTask from "../pages/AddTask";
import Login from "../pages/Login";
import MyPostedTasks from "../pages/MyPostedTasks";
import TaskDetails from "../pages/TaskDetails";
import UpdateTask from "../pages/UpdateTask";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../routes/PrivateRoute";
import BrowseTasks from "../pages/BrowseTasks";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/add-task",
        element: (
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        ),
      },
      {
        path: "/posted-task",
        element: (
          <PrivateRoute>
            <MyPostedTasks />
          </PrivateRoute>
        ),
      },
      {
        path: "/task-details/:id",
        element: (
          <PrivateRoute>
            <TaskDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-task/:id",
        element: (
          <PrivateRoute>
            <UpdateTask />
          </PrivateRoute>
        ),
      },
      { path: "/browse-tasks", element: <BrowseTasks /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
