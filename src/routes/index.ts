import Router from "express";
// Routes
import baseRoute from "./base.routes";
import userRoutes from "./user.routes";

const router = Router();

router.use(baseRoute);
router.use(userRoutes);

export default router;
