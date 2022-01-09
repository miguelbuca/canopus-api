import { UserController } from "@controllers/user.controller";
import Router from "express";

const router = Router();

const { store } = new UserController();

router.post("/user", store);

export default router;
