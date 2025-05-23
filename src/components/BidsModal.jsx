import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";

const BidsModal = ({ taskId }) => {
  const [open, setOpen] = useState(false);

  const bids = JSON.parse(localStorage.getItem("bids")) || {};
  const taskBids = bids[taskId] || [];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="bg-[#10b981] text-white text-xs px-2 py-1 rounded"
        >
          Bids
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Bids for This Task</DialogTitle>
          <DialogDescription>
            {taskBids.length === 0
              ? "No bids placed yet."
              : `${taskBids.length} bid${taskBids.length > 1 ? "s" : ""} found`}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 max-h-64 overflow-y-auto">
          {taskBids.map((bid, index) => (
            <div
              key={index}
              className="p-3 border rounded-md bg-gray-100 dark:bg-gray-800"
            >
              <p className="text-sm">
                <span className="font-semibold">Name:</span> {bid.name}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Email:</span> {bid.email}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Bid:</span> ${bid.amount}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Message:</span> {bid.message}
              </p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BidsModal;
