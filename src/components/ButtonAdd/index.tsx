import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CardAddForm from "../CardAddForm";

export default function ButtonAdd() {
    return (
        <Dialog>
            <DialogTrigger asChild className="mb-4">
                <Button>
                    Create new task
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] flex items-center justify-center">
                <CardAddForm /> {/* Card AddForm is a custom component */}
            </DialogContent>
        </Dialog>
    );
}