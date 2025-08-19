import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import toast from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

const FeaturedTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(
          "https://task-marketplace-server.onrender.com/api/tasks?featured=true"
        );
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
    <div className="w-full mx-auto bg-gradient-to-b from-[#e8faf4] to-[#d1f2eb] dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 px-6 py-[100px]">
      <div className="relative mb-10 max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-3xl font-extrabold text-[#064e3b] dark:text-[#a7f3d0] tracking-wide drop-shadow-md">
          Featured Tasks
        </h1>
        <div className="flex justify-center mt-3">
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#10b981] to-[#047857] shadow-lg"></div>
        </div>
      </div>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Array(6)
            .fill()
            .map((_, idx) => (
              <Card
                key={idx}
                className="p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm animate-pulse"
              >
                <Skeleton height={20} width={"70%"} />
                <Skeleton height={14} width={"45%"} className="my-2" />
                <Skeleton count={2} />
                <Skeleton height={36} width={100} className="mt-4 rounded-lg" />
              </Card>
            ))}
        </div>
      )}

      {!loading && tasks.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 text-xs md:text-sm mt-6 italic">
          No featured tasks available right now. Check back soon!
        </p>
      )}

      {!loading && tasks.length > 0 && (
        <Zoom cascade damping={0.1} triggerOnce>
          <div className="grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <Card
                key={task._id}
                className="flex flex-col h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl hover:-translate-y-1 transform transition duration-300 ease-in-out"
              >
                <CardContent className="p-6 md:p-4 flex flex-col justify-between h-full">
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-[#065f46] dark:text-[#bbf7d0] leading-snug">
                      {task.title}
                    </h2>
                    <p className="text-xs font-medium text-[#10b981] dark:text-[#34d399] tracking-wide uppercase">
                      {task.category}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {task.description.length > 80
                        ? task.description.slice(0, 80) + "..."
                        : task.description}
                    </p>
                    <p className="font-semibold text-green-700 dark:text-green-400 text-base">
                      Budget: ${task.budget}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Deadline:{" "}
                      {new Date(task.deadline).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <Button
                    onClick={() => navigate(`/task-details/${task._id}`)}
                    className="mt-4 px-4 py-1 rounded-md bg-gradient-to-r from-[#10b981] to-[#047857] hover:from-[#047857] hover:to-[#065f46] text-white font-semibold tracking-wide shadow-sm transition duration-300 self-start text-sm"
                  >
                    See Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Zoom>
      )}
    </div>
  );
};

export default FeaturedTasks;
