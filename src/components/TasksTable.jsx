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

const TasksTable = ({ tasks, onDelete, navigate }) => {
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
                  onClick={() => onDelete(task)}
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
  );
};

export default TasksTable;
