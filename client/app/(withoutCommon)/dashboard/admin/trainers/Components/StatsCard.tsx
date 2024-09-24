const StatsCard = ({ icon, count, label }: any) => (
  <div className="flex items-center space-x-3 p-5 bg-[#313844] rounded-lg shadow-md">
    <div className="p-3 bg-indigo-100 rounded-full">{icon}</div>
    <div>
      <p className="text-2xl font-bold text-slate-200">{count}</p>
      <p className="text-sm  text-slate-100 font-semibold">{label}</p>
    </div>
  </div>
);
export default StatsCard;
