import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white px-4">

      <h1 className="text-6xl font-bold text-green-400">404</h1>

      <p className="text-xl mt-4 text-gray-400">
        Page not found
      </p>

      <p className="text-sm text-gray-600 mt-2 text-center">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full text-white"
      >
        Go Home
      </button>
    </div>
  );
}

export default NotFound;