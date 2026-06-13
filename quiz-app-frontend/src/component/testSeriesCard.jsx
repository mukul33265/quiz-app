import { useNavigate } from "react-router-dom";

function TestSeriesCard({ series }) {
    const navigate = useNavigate() ;

  return (
    <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-6 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-green-500/20">

      {/* Title */}
      <h3 className="text-xl font-semibold text-white">
        {series.title}
      </h3>

      {/* Subject */}
      <p className="text-sm text-gray-400 mt-1">
        {series.subject}
      </p>

      {/* Description */}
      <p className="text-gray-400 text-sm mt-4 line-clamp-3">
        {series.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6">

        <span className="px-3 py-1 mb-4 text-xs rounded-full bg-zinc-800 text-gray-300">
          {series.isPaid ? "Premium" : "Free"}
        </span>

        <span className="text-green-400 mb-4 font-semibold">
          {series.isPaid ? `₹${series.price}` : "Free"}
        </span>

      </div>

      {/* Button */}
      <button onClick={()=> {navigate(`/testseries/${series._id}`)}}
      className="mt-5 w-full py-2 rounded-xl bg-green-600 hover:bg-green-500 text-white font-medium transition">
        View Tests
      </button>

    </div>
  );
}

export default TestSeriesCard;