import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Button } from "../components/ui/button";

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
      .get("http://localhost:3000/api/tasks")
      .then((res) => {
        const userTasks = res.data.filter(
          (task) => task.userEmail === user.email
        );
        setTasks(userTasks);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tasks:", err);
        setLoading(false);
      });
  }, [authLoading, user?.email]);

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    axios
      .delete(`http://localhost:3000/api/tasks/${id}`)
      .then(() => {
        setTasks((prev) => prev.filter((task) => task._id !== id));
        toast.success("Task deleted successfully");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to delete task");
      });
  };

  if (authLoading)
    return <p className="text-center py-10">Authenticating...</p>;

  if (!user?.email)
    return (
      <p className="text-center py-10 text-red-500">
        You are not authorized to view this page.
      </p>
    );

  if (loading) return <p className="text-center py-10">Loading tasks...</p>;

  if (tasks.length === 0)
    return <p className="text-center py-10">No tasks posted yet.</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        My Posted Tasks
      </h1>
      <Table>
        <TableCaption>Your tasks posted to the marketplace</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Budget</TableHead>
            <TableHead>Deadline</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task._id}>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.category}</TableCell>
              <TableCell>${task.budget}</TableCell>
              <TableCell>{task.deadline}</TableCell>
              <TableCell className="flex justify-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => navigate(`/update-task/${task._id}`)}
                >
                  Update
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(task._id)}
                >
                  Delete
                </Button>
                <Button size="sm" variant="secondary">
                  Bids
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyPostedTasks;
