"use client";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useState } from "react";

export default function DialogDemo({ task, onEditTask }) {
  const [formData, setFormData] = useState({
    id: task.id,
    task: task.task,
    description: task.description,
    deadline: task.deadline,
    status: task.status,
  });

  const handleSubmit = () => {
    onEditTask(formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-8 h-8" title="Edit">
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full sm:max-w-[350px]">
        <DialogHeader>
          <DialogTitle>EDIT</DialogTitle>
          <DialogDescription>Edit the task information.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-left gap-2">
            <Label>Task</Label>
            <Input
              value={formData.task}
              onChange={(e) => setFormData({ ...formData, task: e.target.value })}
            />
          </div>
          <div className="flex flex-col items-left gap-2">
            <Label>Description</Label>
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          <div className="grid grid-rows-1 sm:flex-col items-center gap-4">
            <div className="flex flex-col">
              <Label>Deadline</Label>
              <Input
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              />
            </div>
            <div className="flex flex-col">
              <Label>Status</Label>
              <Select
                onValueChange={(value) => setFormData({ ...formData, status: value })}
                defaultValue={formData.status}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="Doing">Doing</SelectItem>
                  <SelectItem value="Retard">Retard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <Button className="w-full" onClick={handleSubmit}>
          Save
        </Button>
      </DialogContent>
    </Dialog>
  );
}

