import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import API from "../api";
import { useParams, useNavigate ,useBlocker } from "react-router-dom";

export default function TestPortal() {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [duration, setDuration] = useState(null);

  // question fetch
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await API.get(`/testpaper/${id}`);
        setQuestions(res.data.questions);
        setDuration(res.data.durationSeconds);
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestion();
  }, [id]);

  const question = questions?.[currentQuestion];

  // useEffect(() => {
  //   window.history.pushState(null, "", window.location.href);
  //   const handlePopState = async () => {
  //     const confirmed = window.confirm(
  //       "Are you sure you want to leave the test? Your test will be submitted automatically.",
  //     );
  //     if (confirmed) {
  //       await handleSubmit();
  //     } else {
  //       window.history.pushState(null, "", window.location.href);
  //     }
  //   };
  //   window.addEventListener("popstate", handlePopState);
  //   return () => {
  //     window.removeEventListener("popstate", handlePopState);
  //   };
  // }, []);

useEffect(() => {
  const handleBeforeUnload = (e) => {
    e.preventDefault();
    e.returnValue =
      "Are you sure you want to leave the test? Your test will be submitted automatically.";
  };

    const handlePopState = async () => {
      const confirmLeave = window.confirm(
        "Are you sure you want to leave the test? Your test will be submitted automatically."
      );

      if (confirmLeave) {
        await handleSubmit();
      } else {
        window.history.pushState(null, "", window.location.href);
      }
    };

    // prevent refresh / tab close
    window.addEventListener("beforeunload", handleBeforeUnload);

    // back button
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // handling the submit button
  const handleSubmit = async () => {
    try {
      const res = await API.post("/submit", {
        testPaperId: id,
        answers,
      });
      toast.success("Test submitted successfully!");
      localStorage.removeItem(`exam_start_${id}`);
      localStorage.removeItem(`answers_${id}`);
      localStorage.removeItem(`status_${id}`);
      navigate(`/result/${res.data.attemptId}`);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message || "Failed to submit test");
    }
  };

  // timer
  const DURATION = duration; // 2 hours in seconds
  // store start time once
  const [startTime] = useState(() => {
    const existing = localStorage.getItem(`exam_start_${id}`);
    if (existing) return Number(existing);
    const now = Date.now();
    localStorage.setItem(`exam_start_${id}`, now);
    return now;
  });

  // timer state
  const [timeLeft, setTimeLeft] = useState(DURATION);
  // function to calculate remaining time
  const getRemainingTime = () => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    return Math.max(DURATION - elapsed, 0);
  };
  useEffect(() => {
    if (duration === null) return;
    const interval = setInterval(() => {
      const remaining = getRemainingTime();
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearInterval(interval);
        handleSubmit(); // auto submit
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [duration !== null]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const formattedTime =
    `${String(hours).padStart(2, "0")}:` +
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`;

  // full screen functionality
  const [fullscreen, setFullscreen] = useState(false);
  useEffect(() => {
    const handleChange = () => {
      setFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleChange);
    };
  }, []);
  const handleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // clear response
  const [answers, setAnswers] = useState(() => {
    const saved = localStorage.getItem(`answers_${id}`);
    return saved ? JSON.parse(saved) : {};
  });
  useEffect(() => {
    localStorage.setItem(`answers_${id}`, JSON.stringify(answers));
  }, [answers, id]);

  const handleOptionSelect = (optionIndex) => {
    setAnswers({
      ...answers,
      [question.id]: optionIndex,
    });
  };
  const clearResponse = () => {
    const updatedAnswers = { ...answers };
    delete updatedAnswers[question.id];
    setAnswers(updatedAnswers);
  };

  // handle previous,skip,save&next,markForReview
  const handlePrevious = () => {
    setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const handleSkip = () => {
    setCurrentQuestion((prev) =>
      prev === questions.length - 1 ? prev : prev + 1,
    );
  };

  const handleSaveAndNext = () => {
    if (answers[question.id] === undefined) {
      toast.error("Please select an option");
      return;
    }
    handleStatus(question.id, STATUS.ANSWERED);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handleMarkForReview = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  // question status
  const [status, setStatus] = useState(() => {
    const saved = localStorage.getItem(`status_${id}`);
    return saved ? JSON.parse(saved) : {};
  });
  useEffect(() => {
    localStorage.setItem(`status_${id}`, JSON.stringify(status));
  }, [status, id]);
  const STATUS = {
    ANSWERED: 1,
    SKIPPED: 2,
    MARKED_FOR_REVIEW: 3,
    NOT_VISITED: 0,
  };
  const handleStatus = (questionId, statusid) => {
    setStatus((status) => ({
      ...status,
      [questionId]: statusid,
    }));
  };

  // question status
  const answeredCount = Object.values(status).filter(
    (s) => s === STATUS.ANSWERED,
  ).length;

  const skippedCount = Object.values(status).filter(
    (s) => s === STATUS.SKIPPED,
  ).length;

  const reviewCount = Object.values(status).filter(
    (s) => s === STATUS.MARKED_FOR_REVIEW,
  ).length;

  const notVisitedCount =
    questions.length - answeredCount - skippedCount - reviewCount;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-3 sm:px-5 py-3 sm:py-4 flex items-center justify-between sm:justify-end gap-2 sm:gap-3 flex-wrap">
        {/* Timer */}
        <div className="text-green-700 bg-emerald-50 px-3 sm:px-5 py-2 rounded-lg font-semibold text-sm sm:text-base order-1 sm:order-none">
          ⏱ {formattedTime}
        </div>

        {/* Fullscreen Button */}
        <button
          onClick={handleFullscreen}
          className="bg-white border border-gray-300 text-black px-3 sm:px-5 py-2 rounded-lg font-medium hover:bg-gray-50 transition text-sm sm:text-base order-3 sm:order-none"
        >
          {fullscreen ? "Exit FS" : "Full Screen"}
        </button>

        {/* Submit Button */}
        <button
          onClick={() => {
            handleSubmit();
          }}
          className="bg-green-700 !text-white px-3 sm:px-5 py-2 rounded-lg font-medium hover:bg-green-800 transition text-sm sm:text-base order-2 sm:order-none"
        >
          Submit
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 p-3 sm:p-4 flex-1 overflow-hidden">
        {/* Left Side */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <p className="text-gray-600 text-xs sm:text-sm font-bold mb-2 sm:mb-3">
            Question {currentQuestion + 1} of {questions.length}
          </p>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-5 flex-1 flex flex-col overflow-hidden">
            {/* Marks */}
            <div className="flex justify-end gap-2 sm:gap-3 mb-4 sm:mb-8 flex-wrap">
              <span className="bg-green-50 text-green-600 px-2 sm:px-4 py-1 rounded-md text-xs sm:text-sm">
                +{question?.marks} Marks
              </span>

              <span className="bg-red-50 text-red-500 px-2 sm:px-4 py-1 rounded-md text-xs sm:text-sm">
                -{question?.negativeMarks} Marks
              </span>
            </div>

            {/* Question */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 line-clamp-3">
              {question?.question}
            </h2>

            {/* Options */}
            <div className="space-y-2 sm:space-y-4 flex-1 overflow-y-auto pr-2">
              {question?.options?.map((option, index) => (
                <label
                  key={index}
                  className="flex items-start sm:items-center gap-2 sm:gap-4 border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 bg-white cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition"
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    className="h-4 w-4 sm:h-5 sm:w-5 mt-1 sm:mt-0 flex-shrink-0"
                    checked={answers[question.id] === index}
                    onChange={() => handleOptionSelect(index)}
                  />

                  <span className="font-semibold text-sm sm:text-base text-gray-700 flex-shrink-0">
                    {String.fromCharCode(65 + index)}.
                  </span>

                  <span className="text-sm sm:text-base text-gray-900 break-words">
                    {option}
                  </span>
                </label>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-4 sm:my-8"></div>

            {/* Bottom Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    (handleStatus(question.id, STATUS.MARKED_FOR_REVIEW),
                      handleMarkForReview());
                  }}
                  className="border border-gray-300 bg-white px-2 sm:px-5 py-2 rounded-lg hover:bg-gray-50 text-xs sm:text-sm font-medium transition flex-1 sm:flex-none"
                >
                  📑 Review
                </button>

                <button
                  onClick={clearResponse}
                  className="border border-gray-300 bg-white text-gray-400 px-2 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition flex-1 sm:flex-none"
                >
                  Clear
                </button>
              </div>

              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={handlePrevious}
                  className={`px-3 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-medium transition flex-1 sm:flex-none ${
                    currentQuestion === 0
                      ? "bg-gray-200 cursor-not-allowed"
                      : "bg-white hover:bg-gray-50 border border-gray-300"
                  }`}
                >
                  Prev
                </button>

                <button
                  onClick={() => {
                    handleSaveAndNext();
                  }}
                  className="bg-green-600 hover:bg-green-700 !text-white px-3 sm:px-6 py-2 rounded-lg font-medium text-xs sm:text-sm transition flex-1 sm:flex-none"
                >
                  Save & Next
                </button>

                <button
                  onClick={() => {
                    (handleStatus(question.id, STATUS.SKIPPED), handleSkip());
                  }}
                  className={`px-3 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-medium transition flex-1 sm:flex-none ${
                    currentQuestion === questions.length - 1
                      ? "bg-gray-200 cursor-not-allowed"
                      : "bg-white hover:bg-gray-50 border border-gray-300"
                  }`}
                >
                  Skip
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-72 bg-white rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-4 overflow-hidden flex flex-col max-h-96 lg:max-h-none">
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2">
            <div className="border rounded-lg sm:rounded-xl py-1 sm:py-2 px-1 text-center">
              <h2 className="text-sm sm:text-base font-semibold text-green-600">
                {answeredCount}
              </h2>
              <p className="text-gray-500 text-xs">Answered</p>
            </div>

            <div className="border rounded-lg sm:rounded-xl py-1 sm:py-2 px-1 text-center">
              <h2 className="text-sm sm:text-base font-semibold text-red-600">
                {skippedCount}
              </h2>
              <p className="text-gray-500 text-xs">Skipped</p>
            </div>

            <div className="border rounded-lg sm:rounded-xl py-1 sm:py-2 px-1 text-center">
              <h2 className="text-sm sm:text-base font-semibold text-orange-500">
                {reviewCount}
              </h2>
              <p className="text-gray-500 text-xs">For Review</p>
            </div>

            <div className="border rounded-lg sm:rounded-xl py-1 sm:py-2 px-1 text-center">
              <h2 className="text-sm sm:text-base font-semibold text-gray-500">
                {notVisitedCount}
              </h2>
              <p className="text-gray-500 text-xs">Not Visited</p>
            </div>
          </div>

          <hr className="my-2 sm:my-5" />

          {/* Legend */}
          <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-green-500 flex-shrink-0"></div>
              <span>Answered</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-purple-500 flex-shrink-0"></div>
              <span>Skipped</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-yellow-500 flex-shrink-0"></div>
              <span>Marked for review</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-gray-200 flex-shrink-0"></div>
              <span>Not visited</span>
            </div>
          </div>

          <hr className="my-2 sm:my-5 hidden lg:block" />

          {/* question palette */}
          <div className="grid grid-cols-8 sm:grid-cols-10 lg:grid-cols-6 gap-1 sm:gap-2 overflow-y-auto flex-1">
            {questions.map((question, index) => {
              const questionStatus = status[question.id];

              let bgColor = "bg-gray-100 text-black";

              if (questionStatus === STATUS.ANSWERED) {
                bgColor = "bg-green-500 text-white";
              } else if (questionStatus === STATUS.MARKED_FOR_REVIEW) {
                bgColor = "bg-yellow-500 text-white";
              } else if (questionStatus === STATUS.SKIPPED) {
                bgColor = "bg-purple-500 text-white";
              }

              return (
                <button
                  key={question.id}
                  onClick={() => setCurrentQuestion(index)}
                  className={`
                    h-7 w-7 sm:h-8 sm:w-8
                    rounded-md
                    text-xs sm:text-sm
                    font-medium
                    transition
                    hover:shadow-md
                    ${bgColor}
                    ${
                      currentQuestion === index
                        ? "ring-2 ring-blue-500 ring-offset-1"
                        : ""
                    }
                  `}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
