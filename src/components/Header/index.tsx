import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ClipboardList, FolderOpenDot, ListTodo } from "lucide-react";

const itemNavigation = [
    { label: "Projects", url: "#", icon: FolderOpenDot },
    { label: "Today's Tasks", url: "#", icon: ClipboardList },
    { label: "All Tasks", url: "#", icon: ListTodo },
];

export default function Header() {
    return (
        <header className="w-full h-auto flex items-center justify-center">
            <div className="w-3/5 h-full p-4 flex flex-col items-center justify-center gap-2">
                <section> {/* Logo Name */}
                    <a href="#" className="text-2xl">
                        <h2 className="font-normal">Todo<span className="font-bold text-[#3576df]">Zen</span></h2>
                    </a>
                </section>
                <NavigationMenu>
                    <NavigationMenuList>
                        {itemNavigation.map((item) => (
                            <NavigationMenuItem key={item.label}>
                                <Link href={item.url} legacyBehavior passHref>
                                    <NavigationMenuLink className={`flex gap-1 ${navigationMenuTriggerStyle()}`}>
                                        <item.icon 
                                            width={20}
                                            height={20}
                                        />
                                        {item.label}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
}