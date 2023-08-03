import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const UserNav = () => {
  return (
    <Popover>
      <PopoverTrigger className="relative w-10 h-10 rounded-full bg-stone-300"></PopoverTrigger>
      <PopoverContent className="bg-stone-100 dark:bg-stone-700 w-52 ">
        Place content for the popover here.
      </PopoverContent>
    </Popover>
  );
};

export default UserNav;
