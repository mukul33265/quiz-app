import { useEffect, useState } from "react";
import API from "../api";
import { useNavigate, useParams } from "react-router-dom";

function TestPapersPage() {
  const { id } = useParams();
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 
  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const res = await API.get(`/testseries/${id}`);
        setPapers(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPapers();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black text-gray-300">
        Loading Test Papers...
      </div>
    );
  }
  if(papers.length === 0){
     return (
      <div className="w-full h-screen flex items-center justify-center bg-black text-gray-300">
        No Test Papers Available in this package
      </div>
    );
  }

  const handleStartTest = (paperId) => {
    
    const confirmed = window.confirm( "Are you sure you want to start the test?\n\nThe timer will start immediately.") ;

    if(confirmed) {
      navigate(`/testpaper/${paperId

      }`)
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">📄 Test Papers</h1>
        <p className="text-gray-400 mt-2">
          Select a test to start your practice
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {papers.map((paper) => (
          <div
            key={paper._id}
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md p-6 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-green-500/20"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-white">{paper.title}</h3>

            {/* Info */}
            <div className="flex items-center justify-between mt-3 text-sm text-gray-400">
              <span>⏱ {Math.floor(paper.durationSeconds/60)} min</span>
              <span>🧮 {paper.questions?.length || 0} Qs</span>
            </div>

            {/* Optional Marks */}
            {paper.totalMarks && (
              <p className="text-sm text-gray-400 mt-2">
                Total Marks: {paper.totalMarks}
              </p>
            )}

            {/* Button */}
            <button onClick={() => {handleStartTest(paper._id)}}
             className="mt-5 w-full py-2 rounded-xl bg-green-600 hover:bg-green-500 text-white font-medium transition">
              Start Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestPapersPage;
