import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function CardAddForm() {
    return (
        <Card className="w-full sm:w-[350px]">
            <CardHeader>
                <CardTitle>CREATE NEW TASK</CardTitle>
                <CardDescription>Create a new activity.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="taskName">Task Name</Label>
                            <Input id="taskName" type="text" placeholder="Task name" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="taskDescription">Description</Label>
                            <Textarea className="resize-none" id="taskDescription" placeholder="Task description..." />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="taskName">Deadline</Label>
                                <Input id="taskDate" type="date" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="taskStatus">Status</Label>
                                <Select>
                                    <SelectTrigger id="taskStatus">
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
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button className="w-full">Create</Button>
            </CardFooter>
        </Card>
    );
}
