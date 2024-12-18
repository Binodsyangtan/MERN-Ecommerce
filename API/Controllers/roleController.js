import Role from "../Models/roleModles.js";
import User from "../Models/user.js";

export const addRole = async (req, res) => {
  const { role, permissions } = req.body;
  const newRole = await Role({ role, permissions });
  const isSaved = await newRole.save();

  if (isSaved) {
    return res.send({ code: 200, message: "role added" });
  } else {
    return res.send({ code: 500, message: "server error" });
  }
};
export const deleteRole = (req, res) => {
  return res.send({ code: 200, message: "role added" });
};

export const promoteRole = async (req, res) => {
  try {
    const userId = req.params.id;
    const { role } = req.body;

    const validRoles = ["admin", "user", "seller"];
    if (!role || !validRoles.includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: { role: [role] } }, // array ma store gareko thiyo role so yesmani as a array updata garnnu parni vayara
      { new: true } // Return the updated user
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User promoted successfully",
      user,
    });
  } catch (error) {
    console.error("Error updating user role:", error);
    res.status(500).json({
      message: "Error updating user role",
      error: error.message,
    });
  }
};
