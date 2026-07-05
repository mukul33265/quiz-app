const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const testRouter = require("./routes/testseriesRoute");
const testpaperRoute = require("./routes/testPaperRoute");
const testPortalRouter = require("./routes/testPortal") ;
const testResultRouter = require("./routes/testResultRoute") ;
const testAttemptRouter = require("./routes/testAttemptRoute");
const authRouter = require("./routes/authRoute");
const myAttemptRouter = require("./routes/myAttemptRoute");
const testreviewRouter = require("./routes/testreviewRoute") ;
const razorpayRouter = require("./routes/razorpayRoute") ;
const verifyPaymentRoute = require("./routes/verifyPaymentRoute");
const feedbackRouter = require("./routes/feedbackRoute");
const purchaseDetailsRouter = require("./routes/purchaseDetailsRoute");
// const seedData = require("../quiz-app-backend/models/dataBaseSeeding")
// const seedTestData = require("../quiz-app-backend/models/dataBaseSeeding")
const PORT = process.env.PORT || 5000 ; 

connectDB() ;
// seedData();
// seedTestData();
dotenv.config();
const app = express();
app.use(
  cors({
    // origin: "https://exam-ace-three.vercel.app",
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/testseries",testRouter);
app.use("/",testpaperRoute);
app.use("/",testPortalRouter) ;
app.use("/",testResultRouter) ;
app.use("/",testAttemptRouter);
app.use("/",authRouter) ;
app.use("/",myAttemptRouter) ;
app.use("/",testreviewRouter) ;
app.use("/",razorpayRouter);
app.use("/",verifyPaymentRoute);
app.use("/",feedbackRouter) ;
app.use("/",purchaseDetailsRouter);

app.get("/",(req,res) => {
    res.send("Server is fine")
})

app.listen(PORT , () => {
    console.log("Server is running");
})