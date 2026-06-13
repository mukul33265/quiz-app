import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api";
import StatCard from "./statCard";

function Result() {
  const { attemptId } = useParams();
  const navigate = useNavigate();

  const [attempt, setAttempt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttempt = async () => {
      try {
        const res = await API.get(`/result/${attemptId}`);
        setAttempt(res.data);
        setError(null);
      } catch (err) {
        console.log(err);
        setError(
          err?.response?.data?.message || "Failed to load result"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAttempt();
  }, [attemptId]);

  useEffect(() => {
    // Push current state
    window.history.pushState(null, "", window.location.href);

    // Block back button
    const handlePopState = () => {
      window.location.replace("/");
    };

    window.onpopstate = handlePopState;

    return () => {
      window.onpopstate = null; // cleanup
    };
  }, []);
  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black text-white text-xl">
        Loading Result...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black text-red-500">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-3">
            Error
          </h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!attempt) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black text-red-500 text-2xl">
        Result Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">

          <div>
            <h1 className="text-4xl font-bold text-green-400">
              Test Result
            </h1>

            <p className="text-gray-400 mt-2">
              Detailed performance analysis
            </p>
          </div>
          <button
          onClick={() => navigate(`/review/${attemptId}`)}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg"
        >
          Review Test
        </button>
          <button
            onClick={() => navigate("/")}
            className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-xl font-semibold transition"
          >
            Home
          </button>

        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Left Side */}
          <div className="lg:col-span-2">

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

              <StatCard
                title="Score"
                value={attempt.score.toFixed(2)}
              />

              <StatCard
                title="Percentage"
                value={`${attempt.percentage.toFixed(2)}%`}
              />

              <StatCard
                title="Accuracy"
                value={`${attempt.accuracy.toFixed(2)}%`}
              />

              <StatCard
                title="Correct"
                value={attempt.correctAnswers}
              />

              <StatCard
                title="Wrong"
                value={attempt.wrongAnswers}
              />

              <StatCard
                title="Unattempted"
                value={attempt.unattemptedQuestions}
              />

            </div>

          </div>

          {/* Right Side */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg">

            <h2 className="text-xl font-semibold text-green-400 mb-5">
              Performance Summary
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Total Questions
                </span>

                <span className="font-semibold">
                  {attempt.totalQuestions}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Attempted Questions
                </span>

                <span className="font-semibold">
                  {attempt.attemptedQuestions}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Total Marks
                </span>

                <span className="font-semibold">
                  {attempt.totalMarks}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">
                  Marks Obtained
                </span>

                <span className="font-semibold text-green-400">
                  {attempt.score.toFixed(2)}
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Result Banner */}
        <div className="mt-8 bg-green-900/20 border border-green-500/30 rounded-2xl p-6 text-center">

          <h2 className="text-2xl font-bold text-green-400">
            {attempt.percentage >= 60
              ? "🎉 Great Job!"
              : "📚 Keep Practicing!"}
          </h2>

          <p className="text-gray-300 mt-2">
            {attempt.percentage >= 60
              ? "You performed well in this test."
              : "Review your mistakes and try again."}
          </p>

        </div>

      </div>
    </div>
  );
}

export default Result;
