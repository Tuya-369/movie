import { Film, MoonIcon, Search } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genres = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance"];

  return (
    <div className="flex justify-between items-center w-[1440px] h-[59px] mx-16 mt-8">
      <div className="flex items-center space-x-2">
        <Film className="text-blue-600" />
        <p className="text-lg text-blue-600 font-semibold">MovieZ</p>
      </div>
      <div className="relative flex items-center space-x-6">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="border px-4 py-1 rounded hover:bg-gray-100"
          >
            Genre
          </button>
          {isOpen && (
            <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow z-10">
              {genres.map((genre) => (
                <div
                  key={genre}
                  onClick={() => {
                    console.log(`Selected: ${genre}`);
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {genre}
                </div>
              ))}
            </div>
          )}
        </div>

        <input
          className="w-[200px] h-10 px-3 rounded-lg border border-gray-300"
          placeholder="Search..."
        />
      </div>
      <div className="pl-[10px]">
        <MoonIcon />
      </div>
    </div>
  );
};
