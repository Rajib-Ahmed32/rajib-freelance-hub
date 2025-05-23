import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Button } from "../components/ui/button";
import { toast } from "react-hot-toast";

const TasksTable = ({ tasks, onDelete, navigate }) => {
  const handleShowBids = (taskId) => {
    console.log("Bids button clicked for Task ID:", taskId);

    const storedBids = JSON.parse(localStorage.getItem("taskBids")) || [];
    console.log("Stored Bids from localStorage:", storedBids);

    const matched = storedBids.find((item) => item.id === taskId);

    if (matched) {
      toast.success(
        `You have placed ${matched.bidCount} ${
          matched.bidCount === 1 ? "bid" : "bids"
        } on this task.`
      );
    } else {
      toast("You haven’t placed any bids on this task.");
    }
  };

  return (
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
                {task.deadline
                  ? new Date(task.deadline).toLocaleDateString("en-GB")
                  : "N/A"}
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
                  onClick={() => onDelete(task)}
                >
                  Delete
                </Button>
                <Button
                  size="sm"
                  className="bg-[#10b981] text-white text-xs px-2 py-1 rounded"
                  onClick={() => handleShowBids(task._id)}
                >
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

export default TasksTable;
