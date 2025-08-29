import express from "express";
import { createCase, getAllCases, getCaseById, updateCase, deleteCase } from "../controller/case.controller.js";

const router = express.Router();

router.post("/save", createCase); 
router.get("/getall", getAllCases);
router.get("/get/:id", getCaseById); 
router.put("/update/:id", updateCase); 
router.delete("/delete/:id", deleteCase); 

export default router;
