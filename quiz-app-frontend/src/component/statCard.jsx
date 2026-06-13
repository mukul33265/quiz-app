function StatCard({ title, value }) {
  return (
    <div className="bg-zinc-900 border border-green-500/20 rounded-2xl p-5 hover:border-green-500/40 transition-all duration-300 shadow-lg hover:shadow-green-500/10">
      <p className="text-gray-400 text-sm font-medium">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-green-400 mt-2">
        {value}
      </h2>
    </div>
  );
}

export default C;