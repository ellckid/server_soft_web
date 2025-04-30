require("dotenv").config();
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5100;
const TEAMUP_API = process.env.TEAMUP_API_URL;

const router = express.Router();
const app = express();

router.all("*", async (req, res) => {
  try {
    const url = `${process.env.TEAMUP_API_URL}${req.originalUrl.replace("/api", "")}`;

    const response = await axios({
      method: req.method,
      url,
      headers: {
        "Teamup-Token": process.env.TEAMUP_API_KEY,
        "Content-Type": "application/json",
        ...req.headers,
      },
      data: req.body,
      params: req.query,
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(400).json({
      message: "пизда рулю",
    });
  }
});

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", TEAMUP_API],
  }),
);

app.use("*", router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.error("Server error:", e);
  }
};

start();
