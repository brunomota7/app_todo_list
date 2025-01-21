import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";

export default function DialogDemo() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-8 h-8" title="Edit">
                    <Pencil />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>EDIT</DialogTitle>
                    <DialogDescription>
                        Edit the task information.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-2">
                        <Label>
                            Task
                        </Label>
                        <Input id="taskName" type="text" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-2">
                        <Label>
                            Description
                        </Label>
                        <Textarea className="col-span-3 resize-none" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-2">
                        <Label>
                            Deadline
                        </Label>
                        <Input id="taskName" type="date" className="col-span-2" />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}