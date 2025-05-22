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
      .catch((err) => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!task) return <p className="text-center py-10">Task not found.</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Card className="shadow-xl">
        <CardContent className="p-6 space-y-5">
          <h1 className="text-3xl font-bold text-blue-700">{task.title}</h1>
          <div className="text-gray-700 space-y-2">
            <p>
              <span className="font-semibold">Category:</span> {task.category}
            </p>
            <p>
              <span className="font-semibold">Description:</span>{" "}
              {task.description}
            </p>
            <p>
              <span className="font-semibold">Deadline:</span> {task.deadline}
            </p>
            <p>
              <span className="font-semibold">Budget:</span> ${task.budget}
            </p>
            <p>
              <span className="font-semibold">Posted By:</span> {task.userName}{" "}
              ({task.userEmail})
            </p>
          </div>
          <Button className="mt-4">Bid on Task</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskDetails;
