import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.status(200).json({
    author: "Miguel Buca",
    title: "Test Canopus",
    version: 1.0,
    description: "This is a simple tasks",
  });
});

export default router;
