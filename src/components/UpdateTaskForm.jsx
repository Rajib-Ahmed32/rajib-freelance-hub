// src/components/UpdateTaskForm.jsx
import React from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

const UpdateTaskForm = ({
  task,
  selectedCategory,
  setSelectedCategory,
  handleUpdate,
}) => {
  return (
    <form
      onSubmit={handleUpdate}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div className="col-span-1 md:col-span-2">
        <Label htmlFor="title">Task Title</Label>
        <Input id="title" name="title" defaultValue={task.title} required />
      </div>

      <div>
        <Label htmlFor="category">Category</Label>
        <Select
          name="category"
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        >
          <SelectTrigger>
            <SelectValue placeholder="Choose a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Web Development">Web Development</SelectItem>
            <SelectItem value="Design">Design</SelectItem>
            <SelectItem value="Writing">Writing</SelectItem>
            <SelectItem value="Marketing">Marketing</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="deadline">Deadline</Label>
        <Input
          type="date"
          id="deadline"
          name="deadline"
          defaultValue={
            task.deadline
              ? new Date(task.deadline).toISOString().substring(0, 10)
              : ""
          }
          required
        />
      </div>

      <div>
        <Label htmlFor="budget">Budget (USD)</Label>
        <Input
          type="number"
          id="budget"
          name="budget"
          defaultValue={task.budget}
          required
        />
      </div>

      <div className="col-span-1 md:col-span-2">
        <Label htmlFor="description">Task Description</Label>
        <Textarea
          id="description"
          name="description"
          defaultValue={task.description}
          required
          rows={5}
        />
      </div>

      <div>
        <Label htmlFor="username">Your Name</Label>
        <Input
          type="text"
          id="username"
          name="username"
          value={task.username}
          readOnly
        />
      </div>

      <div>
        <Label htmlFor="email">Your Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={task.email}
          readOnly
        />
      </div>

      <div className="col-span-1 md:col-span-2">
        <Button
          type="submit"
          className="w-full bg-[#059669] hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-all mt-2"
        >
          Update Task
        </Button>
      </div>
    </form>
  );
};

export default UpdateTaskForm;
