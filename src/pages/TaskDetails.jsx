import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <p className="text-center py-10 text-gray-700 dark:text-gray-300">
        Loading...
      </p>
    );

  if (!task)
    return (
      <p className="text-center py-10 text-red-500 dark:text-red-400">
        Task not found.
      </p>
    );

  return (
    <div className=" px-12 py-12 pb-20 bg-[#e8faf4] dark:bg-gray-900 rounded-lg shadow-lg  transition-colors duration-300">
      <div className="relative mb-10">
        <h1 className="text-4xl font-extrabold text-center text-[#0f172a] dark:text-white">
          {task.title}
        </h1>
        <div className="flex justify-center mt-3">
          <div className="w-28 h-1 rounded-full bg-[#10b981]"></div>
        </div>
      </div>

      <Card className="shadow-xl max-w-2xl mx-auto border border-gray-200 dark:border-gray-700 transition-colors">
        <CardContent className="p-8 space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">
              Category:
            </span>{" "}
            {task.category}
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">
              Description:
            </span>{" "}
            {task.description}
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">
              Deadline:
            </span>{" "}
            {task.deadline}
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">
              Budget:
            </span>{" "}
            <span className="text-green-600 font-semibold">${task.budget}</span>
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">
              Posted By:
            </span>{" "}
            {task.userName}
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">
              Email:
            </span>{" "}
            {task.userEmail}
          </p>
          <div className="text-center mt-8">
            <Button className="bg-[#10b981] hover:bg-[#0f9b6e] text-white px-6 py-2 rounded-lg text-lg font-semibold transition-colors duration-300">
              Bid on Task
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskDetails;
