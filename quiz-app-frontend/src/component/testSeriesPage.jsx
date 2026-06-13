import { useEffect, useState } from "react";
import API from "../api";
import TestSeriesCard from "./testSeriesCard";

function TestSeriesPage() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const res = await API.get("/testseries");
        setSeries(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSeries();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black text-gray-300">
        Loading Test Series...
      </div>
    );
  }

  if (series.length === 0) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black text-gray-400">
        No Test Series Available
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          📚 Available Test Series
        </h1>
        <p className="text-gray-400 mt-2">
          Practice smart. Improve faster. Crack your exam.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {series.map((item) => (
          <TestSeriesCard key={item._id} series={item} />
        ))}
      </div>

    </div>
  );
}

export default TestSeriesPage;