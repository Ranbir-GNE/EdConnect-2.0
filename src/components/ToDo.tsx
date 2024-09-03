import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { FaRegTrashCan } from "react-icons/fa6";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleToggleTask = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="mx-auto w-[40vh] rounded-lg bg-white p-3 shadow-lg">
      <div className="mb-2 flex gap-2">
        <Input
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow"
        />
        <Button onClick={handleAddTask} variant="outline">
          Add Task
        </Button>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <Card
            key={task.id}
            className={`flex items-center justify-between p-4 ${
              task.completed ? "bg-green-100" : "bg-yellow-50"
            }`}
          >
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => handleToggleTask(task.id)}
              className="mr-3"
            />
            <span
              className={`flex-grow text-gray-700 ${
                task.completed ? "line-through" : ""
              }`}
            >
              {task.text}
            </span>
            <Button
              onClick={() => handleDeleteTask(task.id)}
              variant="ghost"
              className="text-red-500"
            >
              <FaRegTrashCan className="h-5 w-5" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
