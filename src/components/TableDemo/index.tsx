import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import DialogDemo from "@/components/DialogDemo";
import { Trash2 } from "lucide-react";

export function TableDemo({ data, onEditTask, onDeleteTask }) {
    return (
      <div className="w-full">
        {data.length === 0 ? (
          <div className="w-full flex flex-col items-center justify-center text-gray-400 mt-8">
            <p className="text-lg font-semibold">Nenhuma tarefa adicionada ainda.</p>
            <p className="text-sm">Clique no botão "Create new task" para começar.</p>
          </div>
        ) : (
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
              {data.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>{task.task}</TableCell>
                  <TableCell>{task.description}</TableCell>
                  <TableCell>{task.deadline}</TableCell>
                  <TableCell className="flex items-center gap-1">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        task.status === "Completed"
                          ? "bg-green-500"
                          : task.status === "Doing"
                          ? "bg-orange-500"
                          : "bg-red-500"
                      }`}
                    ></span>
                    <span>{task.status}</span>
                  </TableCell>
                  <TableCell>
                    <DialogDemo task={task} onEditTask={onEditTask} />
                    <Button
                      className="ml-1 w-8 h-8"
                      title="Delete"
                      onClick={() => onDeleteTask(task.id)}
                    >
                      <Trash2 />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    );
}
  
  