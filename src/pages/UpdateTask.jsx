import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Card, CardContent } from "../components/ui/card";
import UpdateTaskForm from "../components/UpdateTaskForm";
import UpdateTaskHeader from "../components/UpdateTaskHeader";

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch(`https://task-marketplace-server.onrender.com/api/tasks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
        setSelectedCategory(data.category);
      })
      .catch(() => toast.error("Failed to fetch task data"));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedTask = {
      title: form.title.value,
      category: selectedCategory,
      budget: form.budget.value,
      deadline: form.deadline.value,
      description: form.description.value,
      email: task.email,
      username: task.username,
    };

    try {
      const res = await fetch(
        `https://task-marketplace-server.onrender.com/api/tasks/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedTask),
        }
      );

      const result = await res.json();
      if (res.ok) {
        toast.success("Task updated successfully!");
        navigate("/posted-task");
      } else {
        toast.error(result.error || "Failed to update task");
      }
    } catch (err) {
      toast.error("Update failed");
    }
  };

  if (!task) return <p className="text-center mt-10">Loading task data...</p>;

  return (
    <div className="min-h-screen bg-[#e8faf4] dark:bg-gray-900 py-12 px-4 transition-colors duration-300">
      <Card className="max-w-4xl mx-auto rounded-2xl backdrop-blur bg-white/90 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-300">
        <UpdateTaskHeader />
        <CardContent className="p-6 md:p-10">
          <UpdateTaskForm
            task={task}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            handleUpdate={handleUpdate}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateTask;
