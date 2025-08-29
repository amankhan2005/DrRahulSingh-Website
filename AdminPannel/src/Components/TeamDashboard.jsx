import { useEffect, useState } from "react";
import axios from "axios";
import TeamForm from "./SaveTeam";
import Swal from "sweetalert2";

const TeamDashboard = () => {
  const [team, setTeam] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const api = import.meta.env.VITE_API_URL;
  
  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const response = await axios.get(`${api}/team/getall`);
      setTeam(response.data.payload);
    } catch (error) {
      console.error("Error fetching team data:", error);
    }
  };



const handleDelete = async (id) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  });

  if (!result.isConfirmed) return;

  try {
    await axios.delete(`${api}/team/delete/${id}`);
    fetchTeam();
    setTeam(team.filter((member) => member.id !== id));

    Swal.fire("Deleted!", "The team member has been deleted.", "success");
  } catch (error) {
    console.error("Error deleting member:", error);
    Swal.fire("Error!", "Failed to delete team member.", "error");
  }
};


  const handleEdit = (member) => {
    setSelectedMember(member);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedMember(null);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    fetchTeam();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold">Team Management</h2>
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">Add Team Member</button>
      </div>
      {isFormOpen ? (
        <div className="h-full w-full">
        <TeamForm member={selectedMember} onClose={handleCloseForm} />
        </div>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Photo</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Specialties</th>
              <th className="border p-2">Degrees</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
          {team?.length == 0 && (<div className="text-red-500 text-2xl text-center">No Data Yet!</div>)}
            {team.map((member) => (
              <tr key={member.id} className="text-center">
                <td className="border p-2"><img src={member.imageUrl} alt={member.name} className="w-12 h-12 rounded-full mx-auto" /></td>
                <td className="border p-2">{member?.name}</td>
                <td className="border p-2">{member?.specialty}</td>
                <td className="border p-2">{member?.degree}</td>
                <td className="border p-2 flex flex-row gap-2">
                  <button className="mr-2 bg-yellow-400 text-white px-2 py-1 rounded" onClick={() => handleEdit(member)}>Edit</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDelete(member._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TeamDashboard;
