// src/pages/BrowseTasks.jsx
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const BrowseTasks = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => {
        console.error("Error fetching tasks:", err);
      });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Browse All Tasks
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <Card key={task._id} className="shadow-md flex flex-col h-full">
            <CardContent className="p-4 flex flex-col justify-between h-full">
              <div className="space-y-3">
                <h2 className="text-xl font-semibold">{task.title}</h2>
                <p className="text-sm text-gray-600">{task.category}</p>
                <p className="text-gray-700">
                  {task.description.slice(0, 80)}...
                </p>
                <p className="font-medium text-green-600">${task.budget}</p>
              </div>
              <Button
                onClick={() => navigate(`/task-details/${task._id}`)}
                className="mt-4 w-full"
              >
                See Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BrowseTasks;
