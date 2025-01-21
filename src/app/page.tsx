import ButtonAdd from "@/components/ButtonAdd";
import { TableDemo } from "@/components/TableDemo";

export default function Home() {
  return (
      <div className="w-full h-screen flex flex-col">
          <header className="w-full h-20 flex items-center justify-center px-4">
              <section>
                  <a href="#" className="text-xl sm:text-2xl">
                      <h2 className="font-normal">
                          Todo<span className="font-bold text-[#3576df]">Zen</span>
                      </h2>
                  </a>
              </section>
          </header>
          <main className="w-full h-full p-4 sm:p-8 flex flex-col gap-4">
              <section className="w-full h-full gap-4">
                  <ButtonAdd />
                  <TableDemo />
              </section>
          </main>
      </div>
  );
}
