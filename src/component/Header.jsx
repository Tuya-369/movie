import { Film, HomeIcon, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { HeaderGenre } from "./HeaderGenre";
import Link from "next/link";
export const Header = () => {
  return (
    <div className="flex gap-3 my-3 max-w-[1280px] mx-auto">
      <Link href={`/`}>
        <div className="ml-2 text-blue-800 fill-blue-800 ">
          <HomeIcon />
        </div>
        <h1 className="">Home</h1>
      </Link>
      <div className="ml-100 ">
        <HeaderGenre />
      </div>
      <div className="flex align-bottom ">
        <div className={cn("relative text-muted-foreground  w-[379px]")}>
          <Input
            type="text"
            placeholder="Search..."
            className={cn("pl-[38px]", "border-none shadow-none")}
          />
        </div>
      </div>
    </div>
  );
};
