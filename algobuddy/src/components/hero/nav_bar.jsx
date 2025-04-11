import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import DarkModeToggle from "./darkModeToggle";
import { BarChart4, Search, LineChart } from "lucide-react";

// Dummy data
const searchAlgos = [
  { title: "Linear Search", href: "/linearsearch" },
  { title: "Binary Search", href: "/binarysearch" },
];

const sortingAlgos = [
  { title: "Merge Sort", href: "/mergesort" },
  { title: "Quick Sort", href: "/quicksort" },
  { title: "Bubble Sort", href: "/bubblesort" },
  { title: "Insertion Sort", href: "/insertionsort" },
  { title: "Selection Sort", href: "/selectionsort" },
];

const graphingAlgos = [
  // { title: "Breadth First Search", href: "/bfs" },
  // { title: "Depth First Search", href: "/dfs" },
  { title: "Heap Sort", href: "/heapsort" },
];

// Reusable list item
const ListItem = ({ title, href }) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        to={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
          "hover:bg-red-300 hover:text-accent-foreground hover:shadow-md focus:bg-accent focus:text-accent-foreground"
        )}
      >
        <div className="text-md font-medium leading-none">{title}</div>
      </Link>
    </NavigationMenuLink>
  </li>
);

function useNavigationMenuAlign() {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const triggers = document.querySelectorAll(".submenu-trigger[data-state='open']");
      if (triggers.length === 0) return;

      const firstTrigger = triggers[0];
      const viewports = document.getElementsByClassName("submenu-viewport");

      if (viewports.length > 0) {
        const viewport = viewports[0];
        viewport.style.left = `${firstTrigger.offsetLeft}px`;
      }
    });

    const menu = document.querySelector("[data-slot='navigation-menu']");
    if (menu) {
      observer.observe(menu, { attributes: true, subtree: true, attributeFilter: ["data-state"] });
    }

    return () => observer.disconnect();
  }, []);
}

const NavBar = () => {
  useNavigationMenuAlign();

  return (
    <div className="w-full h-24 px-6 bg-[#123B29] text-white flex items-center justify-between relative z-50">
      {/* Left section: Logo + Navigation */}
      <div className="flex items-center space-x-8">
        <Link to="/">
          <img src="/logo.png" alt="AlgoBuddy Logo" className="h-6 w-auto" />
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="submenu-trigger h-auto bg-transparent flex flex-col items-center text-white">
                <Search className="w-6 h-6 mb-1" />
                <span className="text-sm font-medium">Searching</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute z-50 bg-white text-black rounded-b-md rounded-r-md">
                <ul className="grid w-[300px] gap-2 p-4">
                  {searchAlgos.map((algo) => (
                    <ListItem key={algo.title} title={algo.title} href={algo.href} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Repeat this z-50 change for other dropdowns too */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="submenu-trigger h-auto bg-transparent flex flex-col items-center text-white">
                <BarChart4 className="w-6 h-6 mb-1" />
                <span className="text-sm font-medium">Sorting</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute z-50 bg-white text-black rounded-b-md rounded-r-md">
                <ul className="grid w-[300px] gap-2 p-4">
                  {sortingAlgos.map((algo) => (
                    <ListItem key={algo.title} title={algo.title} href={algo.href} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="submenu-trigger h-auto bg-transparent flex flex-col items-center text-white">
                <LineChart className="w-6 h-6 mb-1" />
                <span className="text-sm font-medium">Graphing</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute z-50 bg-white text-black rounded-b-md rounded-r-md">
                <ul className="grid w-[300px] gap-2 p-4">
                  {graphingAlgos.map((algo) => (
                    <ListItem key={algo.title} title={algo.title} href={algo.href} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right section: Toggle */}
      <div className="flex items-center space-x-4">
        <DarkModeToggle />
        <button className="text-white text-xl font-bold">Aa</button>
      </div>
    </div>
  );
};


export default NavBar;
