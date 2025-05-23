import React from "react";
import toast from "react-hot-toast";
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
import { Card, CardContent } from "../components/ui/card";

const AddTask = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const category = form.category.value;
    const description = form.description.value;
    const deadline = form.deadline.value;
    const budget = form.budget.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;

    const newTask = {
      title,
      category,
      description,
      deadline,
      budget,
      userEmail,
      userName,
    };

    try {
      const res = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
      const data = await res.json();
      console.log("Task added:", data);
      toast.success("Task added successfully!");
      form.reset();
    } catch (err) {
      console.error("Failed to add task:", err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-[#e8faf4] dark:bg-gray-900 py-12 px-4 transition-colors duration-300">
      <Card className="max-w-4xl mx-auto rounded-2xl backdrop-blur bg-white/90 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg transition-colors duration-300">
        <div className="text-center px-6 pt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0f172a] dark:text-white">
            Create a Task
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mt-2">
            Post a task to connect with freelance experts.
          </p>
        </div>
        <CardContent className="p-6 md:p-10">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="col-span-1 md:col-span-2">
              <Label htmlFor="title">Task Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g., Build a React portfolio website"
                required
              />
            </div>

            <div>
              <Label htmlFor="category">Category</Label>
              <Select name="category" required>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Web Development">
                    Web Development
                  </SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Writing">Writing</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="deadline">Deadline</Label>
              <Input type="date" id="deadline" name="deadline" required />
            </div>

            <div>
              <Label htmlFor="budget">Budget (USD)</Label>
              <Input
                type="number"
                id="budget"
                name="budget"
                placeholder="e.g., 150"
                required
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <Label htmlFor="description">Task Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Clearly explain the task requirements and expectations"
                required
                rows={5}
              />
            </div>

            <div>
              <Label htmlFor="userEmail">Your Email</Label>
              <Input
                type="email"
                id="userEmail"
                name="userEmail"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <Label htmlFor="userName">Your Name</Label>
              <Input
                type="text"
                id="userName"
                name="userName"
                placeholder="John Doe"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <Button
                type="submit"
                className="w-full bg-[#10b981] hover:bg-[#0ea67b] dark:bg-[#059669] dark:hover:bg-[#047857] text-white transition-all mt-2"
              >
                Post Task
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddTask;
