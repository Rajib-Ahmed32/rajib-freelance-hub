import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import toast from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const BrowseTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/tasks");
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

  return (
    <div className="min-h-screen w-full  mx-auto bg-[#e8faf4] dark:bg-gray-900 transition-colors duration-300 px-4 py-14">
      <div className="relative mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#0f172a] dark:text-white">
          Browse All Tasks
        </h1>
        <div className="flex justify-center mt-3">
          <div className="w-24 h-1 rounded-full bg-[#10b981] dark:bg-[#059669]"></div>
        </div>
      </div>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6)
            .fill()
            .map((_, idx) => (
              <Card
                key={idx}
                className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <Skeleton height={20} width={"80%"} />
                <Skeleton height={15} width={"60%"} className="my-2" />
                <Skeleton count={2} />
                <Skeleton height={30} width={100} className="mt-3" />
              </Card>
            ))}
        </div>
      )}

      {!loading && tasks.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-4">
          No tasks available right now.
        </p>
      )}

      {!loading && tasks.length > 0 && (
        <div className="grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <Card
              key={task._id}
              className="shadow-md flex flex-col h-full transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#10b981] dark:hover:border-[#059669] border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              <CardContent className="p-8 md:p-5 flex flex-col justify-between h-full">
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-[#0f172a] dark:text-white">
                    {task.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {task.category}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {task.description.slice(0, 80)}...
                  </p>
                  <p className="font-medium text-green-600 dark:text-green-400 text-sm">
                    Budget: ${task.budget}
                  </p>
                </div>
                <Button
                  onClick={() => navigate(`/task-details/${task._id}`)}
                  className="mt-4 text-xs px-3 py-1 rounded bg-[#10b981] hover:bg-[#0f766e] dark:bg-[#059669] dark:hover:bg-[#047857] text-white self-start transition duration-200"
                >
                  See Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseTasks;
