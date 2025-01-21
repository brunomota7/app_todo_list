"use client";
import NewTask from "@/components/NewTask";
import { TableDemo } from "@/components/TableDemo";
import { useState } from "react";

const initialData = []; // Inicialmente, sem tarefas

export default function Home() {
  const [data, setData] = useState(initialData);

  const addTask = (newTask) => {
    setData((prevTasks) => [...prevTasks, { id: prevTasks.length + 1, ...newTask }]);
  };

  const editTask = (updatedTask) => {
    setData((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (id) => {
    setData((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <header className="w-full h-20 flex items-center justify-center px-4">
        <section>
          <a href={"/"} className="text-xl sm:text-2xl">
            <h2 className="font-normal">
              Todo<span className="font-bold text-[#3576df]">Zen</span>
            </h2>
          </a>
        </section>
      </header>
      <main className="w-full h-full p-4 sm:p-8 flex flex-col gap-4">
        <section className="w-full h-full gap-4">
          <NewTask onAddTask={addTask} />
          <TableDemo data={data} onEditTask={editTask} onDeleteTask={deleteTask} />
        </section>
      </main>
    </div>
  );
}
