import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useAuth } from "../context/AuthProvider";
import TasksTable from "../components/TasksTable";

const MyPostedTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();

  useEffect(() => {
    if (authLoading) return;

    if (!user?.email) {
      setLoading(false);
      return;
    }

    axios
      .get("https://task-marketplace-server.onrender.com/api/tasks")
      .then((res) => {
        const userTasks = res.data.filter(
          (task) => task.userEmail === user.email
        );
        setTasks(userTasks);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tasks:", tasks, err);
        setLoading(false);
      });
  }, [authLoading, user?.email]);

  const handleDelete = (task) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete? `);

    if (!confirmDelete) return;

    axios
      .delete(
        `https://task-marketplace-server.onrender.com/api/tasks/${task._id}`
      )
      .then(() => {
        setTasks((prev) => prev.filter((t) => t._id !== task._id));
        toast.success("Task deleted successfully");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to delete task");
      });
  };

  if (authLoading)
    return (
      <p className="text-center py-10 text-gray-700 dark:text-gray-300">
        Authenticating...
      </p>
    );

  if (!user?.email)
    return (
      <p className="text-center py-10 text-red-500 dark:text-red-400">
        You are not authorized to view this page.
      </p>
    );

  return (
    <div className="min-h-screen bg-[#e8faf4] dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full min-h-[300px] md:min-h-[600px] max-w-6xl mx-auto px-4 py-10 bg-white dark:bg-gray-900 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#0f172a] dark:text-white">
          My Posted Tasks
        </h1>

        {loading ? (
          <div className="space-y-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 p-4 border rounded-lg dark:border-gray-700"
              >
                <Skeleton height={20} />
                <Skeleton height={20} />
                <Skeleton height={20} />
              </div>
            ))}
          </div>
        ) : tasks.length === 0 ? (
          <p className="text-center py-10 text-gray-600 dark:text-gray-400">
            No tasks posted yet.
          </p>
        ) : (
          <TasksTable
            tasks={tasks}
            onDelete={handleDelete}
            navigate={navigate}
          />
        )}
      </div>
    </div>
  );
};

export default MyPostedTasks;
