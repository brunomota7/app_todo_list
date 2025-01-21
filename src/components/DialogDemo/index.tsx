import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function DialogDemo() {
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
                        <Input id="taskName" type="text" />
                    </div>
                    <div className="flex flex-col items-left gap-2">
                        <Label>Description</Label>
                        <Textarea className="resize-none" />
                    </div>
                    <div className="grid grid-rows-1 sm:flex-col items-center gap-4">
                        <div className="flex flex-col">
                            <Label>Deadline</Label>
                            <Input id="taskName" type="date" />
                        </div>
                        <div className="flex flex-col">
                            <Label htmlFor="taskStatus">Status</Label>
                            <Select>
                                <SelectTrigger id="taskStatus" className="w-full sm:w-full">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="completed">Completed</SelectItem>
                                    <SelectItem value="doing">Doing</SelectItem>
                                    <SelectItem value="retard">Retard</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <Button className="w-full">Save</Button>
            </DialogContent>
        </Dialog>
    );
}
