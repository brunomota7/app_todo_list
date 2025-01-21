import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import DialogDemo from "@/components/DialogDemo";
import { Trash2 } from "lucide-react";

const data = [
    { id: 1, task: "Task 1", description: "Task 1", deadline: "21/ 01/ 2025", status: "Completed" },
    { id: 1, task: "Task 2", description: "Task 2", deadline: "21/ 01/ 2025", status: "Retard" },
    { id: 1, task: "Task 3", description: "Task 3", deadline: "21/ 01/ 2025", status: "Doing" },
    { id: 1, task: "Task 4", description: "Task 4", deadline: "21/ 01/ 2025", status: "Completed" },
    { id: 1, task: "Task 5", description: "Task 5", deadline: "21/ 01/ 2025", status: "Doing" },
    { id: 1, task: "Task 6", description: "Task 6", deadline: "21/ 01/ 2025", status: "Completed" },
]

export function TableDemo() {
    return (
        <Table className="w-full overflow-x-auto snap-start snap-x">
            <TableCaption className="text-center text-sm">Listas de tarefas.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Task</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Deadline</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Tool</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((inovace) => (
                    <TableRow key={inovace.id} className="text-sm">
                        <TableCell>{inovace.task}</TableCell>
                        <TableCell>{inovace.description}</TableCell>
                        <TableCell>{inovace.deadline}</TableCell>
                        <TableCell className="flex items-center gap-1">
                            <span
                                className={`w-2 h-2 rounded-full ${
                                    inovace.status === "Completed"
                                        ? "bg-green-500"
                                        : inovace.status === "Doing"
                                        ? "bg-orange-500"
                                        : "bg-red-500"
                                }`}
                            ></span>
                            <span>{inovace.status}</span>
                        </TableCell>
                        <TableCell>
                            <DialogDemo />
                            <Button className="ml-1 w-8 h-8" title="Delete">
                                <Trash2 />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}