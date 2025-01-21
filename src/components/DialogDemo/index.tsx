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
            <DialogContent className="sm:max-w-[350px]">
                <DialogHeader>
                    <DialogTitle>EDIT</DialogTitle>
                    <DialogDescription>
                        Edit the task information.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex flex-col items-left gap-2">
                        <Label>
                            Task
                        </Label>
                        <Input id="taskName" type="text" className="col-span-3" />
                    </div>
                    <div className="flex flex-col items-left gap-2">
                        <Label>
                            Description
                        </Label>
                        <Textarea className="col-span-3 resize-none" />
                    </div>
                    <div className="flex items-center justify-between gap-1">
                        <div className="flex flex-col gap-2">
                            <Label>
                                Deadline
                            </Label>
                            <Input id="taskName" type="date" className="col-span-3" />
                        </div>
                        <div className="flex flex-col gap-2">
                                <Label htmlFor="taskStatus">Status</Label>
                                <Select>
                                    <SelectTrigger id="taskStatus" className="w-32">
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
                <Button>Save</Button>
            </DialogContent>
        </Dialog>
    );
}