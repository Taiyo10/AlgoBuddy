import React from "react";
import { useEffect } from "react";

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
  { title: "Heap Sort", href: "/heapsort" },
  { title: "Breadth First Search", href: "/bfs" },
  { title: "Depth First Search", href: "/dfs" },
];

// Reusable list item
const ListItem = ({ title, href }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

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

    const menu = document.querySelector("[data-slot='navigation-menu']"); // ✅ CORRECT
    if (menu) {
      observer.observe(menu, { attributes: true, subtree: true, attributeFilter: ["data-state"] });
    }

    return () => observer.disconnect();
  }, []);
}


const NavBar = () => {
  useNavigationMenuAlign(); // hook in here ✅

  return (
    <div className="flex w-full h-16 items-center px-6 bg-red-500 text-3xl font-bold text-blue-500">
      <div className="title">AlgoBuddy</div>
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">
          {/* Search */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="submenu-trigger">
              Search Algorithms
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-red-100">
              <ul className="grid w-[300px] gap-2 p-4">
                {searchAlgos.map((algo) => (
                  <ListItem key={algo.title} title={algo.title} href={algo.href} />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Sorting */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="submenu-trigger">
              Sorting Algorithms
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-2 p-4">
                {sortingAlgos.map((algo) => (
                  <ListItem key={algo.title} title={algo.title} href={algo.href} />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Graphing */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="submenu-trigger">
              Graphing Algorithms
            </NavigationMenuTrigger>
            <NavigationMenuContent>
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
  );
};

export default NavBar;
