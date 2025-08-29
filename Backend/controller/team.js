import Team from "../model/team.js";


const saveTeam = async (req, res) => {
    try {
        const { name, specialty, department, imageUrl,degree } = req.body;

        if (!name || !specialty || !department || !imageUrl || !degree) {
            return res.status(400).json({ message: "All fields are required" });
        }

        
        const newMember = new Team({ name, specialty, department, imageUrl,degree });
        const savedMember = await newMember.save();

        return res.status(201).json({
            message: "Team member added successfully!",
            payload: savedMember
        });
    } catch (err) {
        console.error("Error saving team member:", err);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};


const updateTeam = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, specialty, imageUrl, department, degree } = req.body;
        if (!name || !specialty || !imageUrl || !department || !degree) {
            return res.status(400).json({ message: "All fields are required" });
        }
      
        const updatedMember = await Team.findByIdAndUpdate(
            id,
            { name, specialty, department, imageUrl, degree },
            { new: true, runValidators: true }
        );

        if (!updatedMember) {
            return res.status(404).json({ message: "Team member not found" });
        }

        res.status(200).json({
            message: "Team member updated successfully!",
            payload: updatedMember
        });
    } catch (err) {
        console.error("Error updating team member:", err);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};


const deleteTeam = async (req, res) => {
    try {
        const { id } = req.params;

        
        const deletedMember = await Team.findByIdAndDelete(id);

        if (!deletedMember) {
            return res.status(404).json({ message: "Team member not found" });
        }

        res.status(200).json({
            message: "Team member deleted successfully!"
        });
    } catch (err) {
        console.error("Error deleting team member:", err);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};



const getAllTeam = async (req, res) => {
    try {
        const team = await Team.find();
        res.status(200).json({
            message: "Team members fetched successfully!",
            payload: team
        });
    } catch (err) {
        console.error("Error fetching team members:", err);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

export { saveTeam, updateTeam, deleteTeam, getAllTeam };
