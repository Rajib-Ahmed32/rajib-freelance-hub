import React from "react";
import toast, { Toaster } from "react-hot-toast";
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
    <>
      <Toaster position="top-right" />
      <div className="max-w-xl mx-auto mt-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Post a New Task
        </h1>
        <Card className="shadow-md">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="title">Task Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter task title"
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
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe the task requirements"
                  required
                />
              </div>

              <div>
                <Label htmlFor="deadline">Deadline</Label>
                <Input type="date" id="deadline" name="deadline" required />
              </div>

              <div>
                <Label htmlFor="budget">Budget</Label>
                <Input
                  type="number"
                  id="budget"
                  name="budget"
                  placeholder="Enter your budget in USD"
                  required
                />
              </div>

              <div>
                <Label htmlFor="userEmail">User Email</Label>
                <Input
                  type="email"
                  id="userEmail"
                  name="userEmail"
                  className="bg-gray-100"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <Label htmlFor="userName">User Name</Label>
                <Input
                  type="text"
                  id="userName"
                  name="userName"
                  placeholder="Your Name"
                />
              </div>

              <Button type="submit" className="w-full mt-4">
                Add Task
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AddTask;
