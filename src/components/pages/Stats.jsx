import { useContext } from "react";
import { FriendContext } from "../context/FriendContext";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const Stats = () => {
  const { timeline } = useContext(FriendContext);

  const callCount = timeline.filter(item => item.type === "Call").length;
  const textCount = timeline.filter(item => item.type === "Text").length;
  const videoCount = timeline.filter(item => item.type === "Video").length;

  const data = [
    { name: "Call", value: callCount },
    { name: "Text", value: textCount },
    { name: "Video", value: videoCount },
  ];

  const COLORS = ["#16a34a", "#7c3aed", "#2563eb"];

  return (
    <div className="bg-gray-100 pt-10 pb-16 px-4 sm:px-6 lg:px-10">

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Friendship Analytics
      </h1>

      {/* Chart Box */}
      <div className="bg-white p-4 sm:p-8 lg:p-12 rounded-xl shadow max-w-3xl mx-auto">

        <h2 className="text-lg font-semibold sm:text-base text-black text-center sm:text-left ">
          By Interaction Type
        </h2>

        {/* Responsive Chart */}
        <div className="w-full h-[280px] sm:h-[320px] md:h-[360px] flex items-center justify-center overflow-hidden">

          {callCount === 0 && textCount === 0 && videoCount === 0 ? (
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center max-w-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
                No Data Yet
              </h3>

              <p className="text-gray-500 text-sm sm:text-base">
                No interaction data available yet
              </p>
            </div>

          ) : (
            <PieChart
              width={260}
              height={260}
            >
              <Pie
                data={data}
                innerRadius="45%"   // 🔥 smaller donut
                outerRadius="70%"   // 🔥 prevent overflow
                cornerRadius={8}
                paddingAngle={4}
                dataKey="value"
                isAnimationActive={true}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          )}

        </div>

      </div>
    </div>
  );
};

export default Stats;