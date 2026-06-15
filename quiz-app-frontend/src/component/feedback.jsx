import { useRef } from "react";
import toast from "react-hot-toast";
import API from "../api";

export default function FeedbackPage({ onClose }) {
  const emailRef = useRef(null);
  const feedbackRef = useRef(null);
  const isSubmitting = useRef(false);

  const handleSubmission = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      toast("Please login first");
      return;
    }

    if (isSubmitting.current) return;

    isSubmitting.current = true;

    try {
      const email = emailRef.current.value;
      const feedbackGiven = feedbackRef.current.value;

      const res = await API.post("/feedback", {
        email,
        feedbackGiven,
      });

      toast.success(res.data.message);

      emailRef.current.value = "";
      feedbackRef.current.value = "";
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Error in sending feedback")
    } finally {
      isSubmitting.current = false;
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
        <form
          onSubmit={handleSubmission}
          className="relative bg-white text-gray-500 w-full max-w-md p-6 rounded-lg shadow-lg"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-black text-xl"
          >
            ✕
          </button>

          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Give Your Feedback
          </h2>

          {/* Email */}
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter your email"
            className="w-full border  border-gray-500/30 outline-none rounded p-2 !mb-3"
            required
          />

          {/* Feedback */}
          <textarea
            ref={feedbackRef}
            rows="4"
            className="w-full border !mb-3 border-gray-500/30 outline-none rounded p-2 resize-none"
            placeholder="Your Feedback..."
            required
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 bg-green-700 hover:bg-green-800 active:scale-95 transition py-2.5 rounded !text-white"
          >
            Send Feedback
          </button>
        </form>
      </div>
    </>
  );
}