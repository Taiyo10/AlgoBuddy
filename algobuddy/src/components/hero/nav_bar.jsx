import React from "react";
import { Link } from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  import { cn } from "@/lib/utils"; // optional, for merging Tailwind classes


const searchAlgos = [
    { title: "Linear Search", href:"/linearsearch" },
    { title: "Binary Search", href:"/binarysearch" },
];

const sortingAlgos = [
    { title: "Merge Sort", href:"/mergesort" },
    { title: "Quick Sort", href:"/quicksort" },
    { title: "Bubble Sort", href:"/bubblesort" },
    { title: "Insertion Sort", href:"/insertionsort" },
    { title: "Selection Sort", href:"/selectionsort" },
];

const graphingAlgos = [
    { title: "Heap Sort", href:"/heapsort" },
    { title: "Breadth First Search", href:"/bfs" },
    { title: "Depth First Search", href:"/dfs" },
];


// Reusable list item component
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

const NavBar = () => {
    return <div className="w-full h-16 bg-red-500 text-3xl font-bold text-blue-500">
        <div className="title">AlgoBuddy</div>
        <div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Search Algorithms</NavigationMenuTrigger>
                        <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-2 p-4">
                            {searchAlgos.map((algo) => (
                                <ListItem key={algo.title} title={algo.title} href={algo.href} />
                            ))}
                        </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Sorting Algorithms</NavigationMenuTrigger>
                        <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-2 p-4">
                            {sortingAlgos.map((algo) => (
                                <ListItem key={algo.title} title={algo.title} href={algo.href} />
                            ))}
                        </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Graphing Algorithms</NavigationMenuTrigger>
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
    </div>;
  };
  
  export default NavBar;