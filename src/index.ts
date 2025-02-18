import express from "express";
import connectDB from "./infrastructure/database";
import userRoutes from "./routes/userRoutes";
import swaggerSetup from "./swagger/swagger";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use("/", userRoutes);
swaggerSetup(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});