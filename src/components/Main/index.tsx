import ButtonAdd from "../ButtonAdd";
import { TableDemo } from "../TableDemo";

export default function Main() {
    return (
        <main className="w-3/5 h-full p-4 flex flex-col items-center gap-2">
            <section className="w-full gap-2">
                <ButtonAdd />
                <TableDemo />
            </section>
        </main>
    );
}