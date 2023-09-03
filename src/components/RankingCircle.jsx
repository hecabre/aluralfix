function RankingCircle({ ranking }) {
  const ranges = [
    { min: 0, max: 4, state: "clip-0", color: "border-red-500" },
    { min: 5, max: 7.9, state: "clip-50", color: "border-yellow-500" },
    { min: 8, max: 10, state: "clip-75", color: "border-green-500" },
  ];

  const actualRange = ranges.find(
    (range) => ranking >= range.min && ranking <= range.max
  );

  const circleState = actualRange ? actualRange.state : "clip-0";
  const circleColor = actualRange ? actualRange.color : "border-red-500";

  const circleClases = `w-10 h-10 rounded-full ${circleColor} ${circleState} border-2 text-white font-nunito flex items-center justify-center bg-[#102c53] opacity-80 bottom-5 relative z-20`;

  return (
    <div className={circleClases}>
      <p className="text-[14px] font-bold">{ranking}</p>
    </div>
  );
}

export default RankingCircle;
