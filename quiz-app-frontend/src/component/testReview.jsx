import { useState, useEffect } from "react";
import API from "../api";
import { useParams, useNavigate } from "react-router-dom";

export default function TestReview() {
  const { attemptId } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const res = await API.get(`/review/${attemptId}`);

        setQuestions(res.data.questions || []);
        setAnswers(res.data.answers || {});
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReview();
  }, [attemptId]);

  const question = questions[currentQuestion];

  const correctCount = questions.filter((q) => {
    const userAnswer = answers[q.id];
    return (
      userAnswer !== undefined &&
      userAnswer === q.correctAnswer
    );
  }).length;

  const wrongCount = questions.filter((q) => {
    const userAnswer = answers[q.id];


        return (
        userAnswer !== undefined &&
        userAnswer !== q.correctAnswer
        );
    }).length;

    const unattemptedCount = questions.filter((q) => {
        return answers[q.id] === undefined;
    }).length;

    const handlePrevious = () => {
        setCurrentQuestion((prev) =>
        prev > 0 ? prev - 1 : prev
        );
    };

    const handleNext = () => {
        setCurrentQuestion((prev) =>
        prev < questions.length - 1 ? prev + 1 : prev
        );
    };

    if (loading) {
        return (
        <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
            Loading Review...
        </div>
        );
    }

    if (!questions.length) {
        return (
        <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
            No Review Data Found
        </div>
        );
    }

   return (
  <div className="min-h-screen bg-black text-white">

    <div className="flex flex-col lg:flex-row gap-4 p-4">

      {/* LEFT SECTION */}
      <div className="lg:w-[75%]">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

          {/* Header */}
          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-bold text-green-400">
              Question {currentQuestion + 1}
            </h2>

            <span className="text-gray-400">
              {currentQuestion + 1} / {questions.length}
            </span>

          </div>

          {/* Question */}
          <div className="mb-8">

            <h1 className="text-xl font-semibold leading-relaxed">
              {question?.question}
            </h1>

          </div>

          {/* Options */}
          <div className="space-y-4">

            {question?.options?.map((option, index) => {

              const userAnswer =
                answers?.[question?.id];

              const correctAnswer =
                question?.correctAnswer;

              let style =
                "border-zinc-700 bg-zinc-800";

              if (index === correctAnswer) {
                style =
                  "border-green-500 bg-green-500/10";
              }

              if (
                index === userAnswer &&
                userAnswer !== correctAnswer
              ) {
                style =
                  "border-red-500 bg-red-500/10";
              }

              return (
                <div
                  key={index}
                  className={`border rounded-xl p-4 ${style}`}
                >
                  <div className="flex justify-between items-center">

                    <div>

                      <span className="font-bold mr-3">
                        {String.fromCharCode(
                          65 + index
                        )}
                        .
                      </span>

                      {option}

                    </div>

                    <div>

                      {index === correctAnswer && (
                        <span className="text-green-400 text-sm font-semibold">
                          ✓ Correct
                        </span>
                      )}

                      {index === userAnswer &&
                        userAnswer !==
                          correctAnswer && (
                          <span className="text-red-400 text-sm font-semibold">
                            Your Answer
                          </span>
                        )}

                    </div>

                  </div>
                </div>
              );
            })}

          </div>

          {/* Answer Summary */}
          <div className="mt-8 bg-zinc-800 rounded-xl p-4">

            <div className="mb-2">

              <span className="text-green-400 font-medium">
                Correct Answer:
              </span>{" "}
              {String.fromCharCode(
                65 + question?.correctAnswer
              )}

            </div>

            <div>

              <span className="text-blue-400 font-medium">
                Your Answer:
              </span>{" "}
              {answers?.[question?.id] !== undefined
                ? String.fromCharCode(
                    65 +
                      answers?.[question?.id]
                  )
                : "Not Attempted"}

            </div>

          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">

            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40"
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={
                currentQuestion ===
                questions.length - 1
              }
              className="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 disabled:opacity-40"
            >
              Next
            </button>

          </div>

        </div>

      </div>

      {/* RIGHT SECTION */}
      <div className="lg:w-[25%]">

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 sticky top-4">

          <h2 className="text-lg font-bold mb-5 text-green-400">
            Review Summary
          </h2>

          {/* Stats */}
          <div className="space-y-3 mb-6">

            <div className="bg-zinc-800 rounded-lg p-3 flex justify-between">
              <span>Correct</span>

              <span className="text-green-400 font-bold">
                {correctCount}
              </span>
            </div>

            <div className="bg-zinc-800 rounded-lg p-3 flex justify-between">
              <span>Wrong</span>

              <span className="text-red-400 font-bold">
                {wrongCount}
              </span>
            </div>

            <div className="bg-zinc-800 rounded-lg p-3 flex justify-between">
              <span>Skipped</span>

              <span className="text-gray-400 font-bold">
                {unattemptedCount}
              </span>
            </div>

          </div>

          {/* Palette */}
          <h3 className="font-semibold mb-3">
            Question Palette
          </h3>

          <div className="grid grid-cols-5 gap-2 mb-6">

            {questions.map((q, index) => {

              const userAnswer =
                answers[q.id];

              let color =
                "bg-zinc-700";

              if (
                userAnswer !== undefined &&
                userAnswer ===
                  q.correctAnswer
              ) {
                color = "bg-green-600";
              }

              if (
                userAnswer !== undefined &&
                userAnswer !==
                  q.correctAnswer
              ) {
                color = "bg-red-600";
              }

              return (
                <button
                  key={q.id}
                  onClick={() =>
                    setCurrentQuestion(index)
                  }
                  className={`
                    h-10 w-10 rounded-md
                    font-medium transition
                    hover:scale-105
                    ${color}
                  `}
                >
                  {q.id}
                </button>
              );
            })}

          </div>

          {/* Legend */}
          <div className="space-y-2 text-sm mb-6">

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-600"></div>
              Correct
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-red-600"></div>
              Wrong
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-zinc-600"></div>
              Unattempted
            </div>

          </div>

          <button
            onClick={() =>
              navigate("/my-attempt")
            }
            className="w-full py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700"
          >
            Back To Attempts
          </button>

        </div>

      </div>

    </div>

  </div>
);
}

