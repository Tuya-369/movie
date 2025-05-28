export const DirectorName = () => {
  return (
    <div className="text-[16px] divide-y divide-gray-200 mt-6">
      <div className="flex gap-2 py-2">
        <span className="font-semibold w-[80px]">Director:</span>
        <span>Jon M. Chu</span>
      </div>
      <div className="flex gap-2 py-2">
        <span className="font-semibold w-[80px]">Writers:</span>
        <span>Winnie Holzman · Dana Fox · Gregory Maguire</span>
      </div>
      <div className="flex gap-2 py-2">
        <span className="font-semibold w-[80px]">Stars:</span>
        <span>Cynthia Erivo · Ariana Grande · Jeff Goldblum</span>
      </div>
    </div>
  );
};
