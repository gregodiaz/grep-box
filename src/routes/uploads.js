import { Router } from "express";
import { uploadImage } from "../controllers/uploads";

const router = Router();

router.post("/", uploadImage);

export default router;
