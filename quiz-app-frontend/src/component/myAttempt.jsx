import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function MyAttempts() {
  const [attempts, setAttempts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchAttempts();
  }, []);

  const fetchAttempts = async () => {
    try {
      const res = await API.get("/my-attempt");
      setAttempts(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const totalAttempts = attempts.length;

  const averagePercentage =
    totalAttempts === 0
      ? 0
      : attempts.reduce(
          (sum, attempt) => sum + attempt.percentage,
          0
        ) / totalAttempts;

  const bestPercentage =
    totalAttempts === 0
      ? 0
      : Math.max(...attempts.map((a) => a.percentage));

  const bestScore =
    totalAttempts === 0
      ? 0
      : Math.max(...attempts.map((a) => a.score));

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading Attempts...
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-black text-white p-6">
    <div className="max-w-7xl mx-auto">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">

      <div>
        <h1 className="text-4xl font-bold text-green-400">
          My Attempts
        </h1>

        <p className="text-gray-400 mt-2">
          Track your previous test performances
        </p>
      </div>

      <button
        onClick={() => navigate("/")}
        className="
          px-5 py-3
          bg-green-600
          border border-zinc-800
          rounded-xl
          hover:border-green-500
          hover:text-green-400
          transition
        "
      >
        Home
      </button>

    </div>

      <div className="grid lg:grid-cols-4 gap-6">

        {/* LEFT SIDEBAR */}
        <div className="lg:col-span-1">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">

            <div className="px-4 py-3 border-b border-zinc-800">
              <h2 className="text-lg font-semibold text-green-400">
                Statistics
              </h2>
            </div>

            <div className="divide-y divide-zinc-800">

              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-gray-400 text-sm">
                  Total Attempts
                </span>

                <span className="text-green-400 font-bold text-lg">
                  {totalAttempts}
                </span>
              </div>

              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-gray-400 text-sm">
                  Average %
                </span>

                <span className="text-green-400 font-bold text-lg">
                  {averagePercentage.toFixed(1)}%
                </span>
              </div>

              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-gray-400 text-sm">
                  Best %
                </span>

                <span className="text-green-400 font-bold text-lg">
                  {bestPercentage.toFixed(1)}%
                </span>
              </div>

              <div className="flex justify-between items-center px-4 py-3">
                <span className="text-gray-400 text-sm">
                  Best Score
                </span>

                <span className="text-green-400 font-bold text-lg">
                  {bestScore.toFixed(2)}
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="lg:col-span-3">

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mb-4">
            <h2 className="text-xl font-semibold text-green-400">
              Attempt History
            </h2>
          </div>

          {attempts.length === 0 ? (
            <div className="bg-zinc-900 rounded-2xl p-10 text-center border border-zinc-800">
              <h2 className="text-2xl text-gray-400">
                No Attempts Yet
              </h2>
            </div>
          ) : (
            <div className="space-y-3">

              {attempts.map((attempt) => (
                <div
                  key={attempt._id}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-green-500 transition-all duration-300"
                >

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <div>

                      <h2 className="text-lg font-semibold text-green-400">
                        {attempt.testPaperId?.title || "Untitled Test"}
                      </h2>

                      <div className="flex flex-wrap gap-5 mt-2 text-sm text-gray-400">

                        <span>
                          Score:{" "}
                          {Number(attempt.score).toFixed(2)}
                          /
                          {attempt.totalMarks}
                        </span>

                        <span>
                          Accuracy:{" "}
                          {Number(attempt.accuracy).toFixed(2)}%
                        </span>

                        <span>
                          Percentage:{" "}
                          {Number(attempt.percentage).toFixed(2)}%
                        </span>

                        <span>
                          {new Date(
                            attempt.createdAt
                          ).toLocaleDateString()}
                        </span>

                      </div>

                    </div>

                    <button
                      onClick={() =>
                        navigate(`/result/${attempt._id}`)
                      }
                      className="px-5 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition"
                    >
                      View Result →
                    </button>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </div>

    </div>
  </div>
);
}

export default MyAttempts;