 import Case from "../model/case.model.js";

// ================= Create a new case =================
export const createCase = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;

    if (!title || !imageUrl) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newCase = new Case({ title, imageUrl });
    await newCase.save();

    res.status(201).json({
      message: "Case created successfully!",
      case: newCase,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while creating the case.",
      error: error.message,
    });
  }
};

// ================= Get all cases =================
export const getAllCases = async (req, res) => {
  try {
    const cases = await Case.find().sort({ createdAt: -1 });
    res.status(200).json(cases);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while fetching cases.",
      error: error.message,
    });
  }
};

// ================= Get a single case by ID =================
export const getCaseById = async (req, res) => {
  try {
    const caseItem = await Case.findById(req.params.id);
    if (!caseItem) {
      return res.status(404).json({ message: "Case not found." });
    }
    res.status(200).json(caseItem);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while fetching the case.",
      error: error.message,
    });
  }
};

// ================= Update a case =================
export const updateCase = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;

    if (!title || !imageUrl) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const updatedCase = await Case.findByIdAndUpdate(
      req.params.id,
      { title, imageUrl },
      { new: true }
    );

    if (!updatedCase) {
      return res.status(404).json({ message: "Case not found." });
    }

    res.status(200).json({
      message: "Case updated successfully!",
      case: updatedCase,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while updating the case.",
      error: error.message,
    });
  }
};

// ================= Delete a case =================
export const deleteCase = async (req, res) => {
  try {
    const deletedCase = await Case.findByIdAndDelete(req.params.id);
    if (!deletedCase) {
      return res.status(404).json({ message: "Case not found." });
    }
    res.status(200).json({ message: "Case deleted successfully!" });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong while deleting the case.",
      error: error.message,
    });
  }
};
