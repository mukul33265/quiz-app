import { useState } from "react";
import API from "../api"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Pricing = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate() ;

  const handlePayment = async(seriesId) => {
      try{
        const token = localStorage.getItem("token");

        if(!token){
          toast.error("Please Login first !");
          navigate("/google/auth");
          return;
        }
        setLoading(true);
        const loadingToast = toast.loading(
          "Initializing payment..."
        );
        const {data} = await API.post("/create-order", { seriesId });
        toast.dismiss(loadingToast);
        if (!data.success) {
          toast.error(data.message);
          return;
        }
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,

          amount: data.order.amount,
          currency: data.order.currency,
          order_id: data.order.id,

          name: "ExamAce",
          description: data.series.title,

          prefill: {
            name: data.user?.name || "",
            email: data.user?.email || "",
          },

          handler: async function(response) {

            const verifyToast = toast.loading(
              "Verifying payment..."
            );

            try {
              const verifyResponse = await API.post(
                "/verify-payment",
                {
                  seriesId,
                  razorpay_order_id:
                    response.razorpay_order_id,

                  razorpay_payment_id:
                    response.razorpay_payment_id,

                  razorpay_signature:
                    response.razorpay_signature,
                }
                
              );
              console.log("Verify response:", verifyResponse.data);
              toast.dismiss(verifyToast);
              if (verifyResponse.data.success) {
                toast.success(
                  "Payment successful! Test series unlocked."
                );
                navigate(`/testseries/${seriesId}`);
              } else {
                toast.error(
                  verifyResponse.data.message ||
                  "Payment verification failed"
                );
              }
            } catch(err) {
              toast.dismiss(verifyToast);
              toast.error(
                err.response?.data?.message ||
                "Verification failed"
              );
            }
          },
          modal: {
            ondismiss: function () {
              toast("Payment cancelled");
            },
          },
        };
        const razorpay = new window.Razorpay(options);
        razorpay.on("payment.failed", function(response) {
          toast.error(
            response.error?.description ||
            "Payment Failed"
          );
        });
        razorpay.open();
      } catch(err) {
          toast.error(
          err.response?.data?.message ||
          err.message ||
          "Unable to initiate payment"
        );
      } finally {
        setLoading(false);
      }
    };

  const plans = [
    {
      name: "General Agriculture",
      price: "₹49",
      seriesId : "6a296dfd99dd14ee9f0c7882",
      description: "For MET Entrance test for all agricultural university",
      dotClass: "bg-green-600",
      innerBorderClass: "border-neutral-700/50",
      buttonClass: "bg-green-600 hover:bg-green-400 text-black",
      features: [
        { text: "Nemraj Sunda + Arun Katyan + R.K. Sharma + S.R. kantwa", included: true },
        { text: "Contain Quality test papers", included: true },
        { text: "All section contains 50+ questions", included: true },
        { text: "Advanced analytics", included: true },
        // { text: "Detailed explanation of every answers", included: true }, 
        // { text: "Custom integrations", included: false },
      ],
    },
    {
      name: "PAU Rabi Package test",
      price: "₹89",
      seriesId : "6a296dfd99dd14ee9f0c7883",
      description: "For general agriculture and agronomy (major)",
      dotClass: "bg-green-600",
      innerBorderClass: "border-green-600/20",
      buttonClass: "bg-green-600 hover:bg-green-400 text-black",
      features: [
        { text: "Contains 50+ questions of every crop", included: true },
        { text: "All crops MCQ", included: true },
        { text: "Questions based on the latest PAU rabi recommendations(POP)", included: true },
        { text: "Advanced analytics", included: true },
        // { text: "Up to 20 team members", included: true },
        // { text: "Custom integrations", included: false },
      ],
    },
    {
      name: "PAU Kharif Package test",
      price: "₹89",
      seriesId : "6a296dfd99dd14ee9f0c7884",
      description: "For general agriculture and agronomy (major)",
      dotClass: "bg-green-600",
      innerBorderClass: "border-green-600/20",
      buttonClass: "bg-green-600 hover:bg-green-400 text-black",
      features: [
        { text: "Contains 50+ questions of every crop", included: true },
        { text: "All crops MCQ", included: true },
        { text: "Questions based on the latest PAU rabi recommendations(POP)", included: true },
        { text: "Advanced analytics", included: true },
        // { text: "Up to 20 team members", included: true },
        // { text: "Custom integrations", included: false },
      ],
    },
  ];

  const CheckIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        clip-path="url(#a)"
        stroke="#fff"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M10 18.33a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.667" />
        <path d="m7.5 10.003 1.667 1.666L12.5 8.336" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
  const CrossIcon = () => (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 18.33c4.833 0 8.75-3.73 8.75-8.333s-3.918-8.333-8.75-8.333-8.75 3.731-8.75 8.333 3.918 8.334 8.75 8.334M13.125 7.5l-5.25 5m0-5 5.25 5"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const ArrowIcon = ({ className = "" }) => (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.167 10h11.666M10 4.164l5.833 5.833L10 15.831"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <>
      <style>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{ font-family: "Geist", sans-serif; }
                `}
      </style>

      <section className="bg-black px-4 py-20" id="pricing">
        <div className="mx-auto flex max-w-6xl flex-col items-center">
          {/* <div className="flex items-center gap-2 rounded-full border border-t-green-400 bg-neutral-800 px-5 py-2">
            <span className="size-1.5 rounded-full bg-green-400"></span>
            <p className="text-base text-white">Pricing</p>
          </div> */}

          <h2 className="mt-6 text-center text-4xl md:text-5xl font-medium text-white">
            Simple & Affordable Pricing
          </h2>

          <div className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-4xl border border-neutral-700 p-1.5"
              >
                <div
                  className={`h-full rounded-4xl border ${plan.innerBorderClass} p-6`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`size-4 rounded-sm ${plan.dotClass}`}
                    ></span>
                    <p className="text-sm text-white">{plan.name}</p>
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    <h3 className="text-4xl font-semibold text-white">
                      {plan.price}
                    </h3>
                    <p className="pt-2 text-xs font-medium uppercase tracking-wide text-white">
                      / 2 month
                    </p>
                  </div>

                  <p className="mt-4 `max-w-260px` text-base text-white">
                    {plan.description}
                  </p>

                  <button onClick={() => handlePayment(plan.seriesId)}
                    className={`mt-6 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white cursor-pointer group ${plan.buttonClass}`}
                  >
                    BUY NOW
                    <ArrowIcon className="group-hover:translate-x-1 transition-all duration-300" />
                  </button>

                  <div className="mt-9 space-y-5">
                    {plan.features.map((feature) => (
                      <div
                        key={feature.text}
                        className="flex items-center gap-2.5"
                      >
                        {feature.included ? <CheckIcon /> : <CrossIcon />}
                        <p className="text-base text-white">{feature.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
