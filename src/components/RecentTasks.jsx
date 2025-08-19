import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useNavigate, Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import toast from "react-hot-toast";

const RecentTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("https://task-marketplace-server.onrender.com/api/tasks");
        if (!res.ok) throw new Error("Failed to fetch tasks");
        const data = await res.json();
        setTasks(data);
      } catch (err) {
        toast.error(err.message || "Failed to load tasks");
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const recent = tasks.slice(0, 6);

  return (
    <section className="w-full bg-gradient-to-b from-[#f0fdf4] to-[#dcfce7] dark:from-gray-900 dark:to-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Recent Tasks</h2>
        <div className="flex justify-center mt-3">
          <div className="w-20 h-1 rounded-full bg-emerald-600"></div>
        </div>
      </div>

      {loading ? (
        <div className="grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6).fill().map((_, i) => (
            <Card key={i} className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl">
              <Skeleton height={20} width={"70%"} />
              <Skeleton height={14} width={"45%"} className="my-2" />
              <Skeleton count={2} />
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recent.map((task) => (
            <Card key={task._id} className="flex flex-col h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
              <CardContent className="p-6 md:p-4 flex flex-col justify-between h-full">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{task.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{task.category}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{task.description.slice(0, 80)}...</p>
                </div>
                <Button onClick={() => navigate(`/task-details/${task._id}`)} className="mt-4 text-xs px-3 py-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white self-start">See Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="max-w-6xl mx-auto text-center mt-10">
        <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
          <Link to="/browse-tasks">See All Tasks</Link>
        </Button>
      </div>
    </section>
  );
};

export default RecentTasks;