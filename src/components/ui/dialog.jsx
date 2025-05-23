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

// Import modal components from shadcn-ui
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

const MyPostedTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteTaskId, setDeleteTaskId] = useState(null); // store id to delete
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const openDeleteModal = (id) => {
    setDeleteTaskId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    axios
      .delete(`http://localhost:3000/api/tasks/${deleteTaskId}`)
      .then(() => {
        setTasks((prev) => prev.filter((task) => task._id !== deleteTaskId));
        toast.success("Task deleted successfully");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to delete task");
      })
      .finally(() => {
        setIsModalOpen(false);
        setDeleteTaskId(null);
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
    <div className="max-w-6xl mx-auto px-4 min-h-[600px] my-8 py-10 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#0f172a]">
        My Posted Tasks
      </h1>
      <div className="rounded-lg overflow-x-auto border w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[150px] text-sm font-semibold text-gray-600">
                Title
              </TableHead>
              <TableHead className="min-w-[120px] text-sm font-semibold text-gray-600">
                Category
              </TableHead>
              <TableHead className="min-w-[100px] text-sm font-semibold text-gray-600">
                Budget
              </TableHead>
              <TableHead className="min-w-[120px] text-sm font-semibold text-gray-600">
                Deadline
              </TableHead>
              <TableHead className="min-w-[160px] text-center text-sm font-semibold text-gray-600">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task._id}>
                <TableCell className="min-w-[150px] font-medium text-sm md:text-base text-blue-700">
                  {task.title}
                </TableCell>
                <TableCell className="min-w-[120px] text-sm md:text-base">
                  {task.category}
                </TableCell>
                <TableCell className="min-w-[100px] text-green-600 text-sm md:text-base">
                  ${task.budget}
                </TableCell>
                <TableCell className="min-w-[120px] text-sm md:text-base">
                  {task.deadline}
                </TableCell>
                <TableCell className="min-w-[160px] flex flex-wrap justify-center gap-2 py-3">
                  <Button
                    size="sm"
                    className="bg-[#10b981] text-white text-xs px-2 py-1 rounded"
                    onClick={() => navigate(`/update-task/${task._id}`)}
                  >
                    Update
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    className="text-xs px-2 py-1 rounded"
                    onClick={() => openDeleteModal(task._id)}
                  >
                    Delete
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[#10b981] text-white text-xs px-2 py-1 rounded"
                  >
                    Bids
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Delete Confirmation Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this task? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(false)}
              className="mr-2"
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyPostedTasks;
