"use client";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useState } from "react";

export default function NewTask({ onAddTask }) {
    const [formData, setFormData] = useState({
        task: "",
        description: "",
        deadline: "",
        status: "",
    });

    const handleSubmit = () => {
        if (formData.task && formData.description && formData.deadline && formData.status) {
            onAddTask(formData);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild className="mb-4">
                <Button className="w-full sm:w-auto">Create new task</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] flex flex-col items-left justify-center">
                <DialogHeader>
                    <DialogTitle>CREATE NEW TASK</DialogTitle>
                    <DialogDescription>Create a new activity.</DialogDescription>
                </DialogHeader>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="taskName">Task Name</Label>
                            <Input 
                                id="taskName" 
                                type="text" 
                                placeholder="Task name" 
                                onChange={(e) => setFormData({ ...formData, task: e.target.value })} 
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="taskDescription">Description</Label>
                            <Textarea 
                                className="resize-none" 
                                id="taskDescription" 
                                placeholder="Task description..."
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="taskName">Deadline</Label>
                                <Input 
                                    id="taskDate" 
                                    type="date"
                                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}  
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="taskStatus">Status</Label>
                                <Select
                                    onValueChange={(value) => setFormData({ ...formData, status: value })}
                                    defaultValue={formData.status} 
                                >
                                    <SelectTrigger id="taskStatus">
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
                </form>
                <DialogFooter className="flex justify-between">
                    <Button 
                        className="w-full"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Create
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
