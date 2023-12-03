const User = require("../models/User");

const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting users");
  }
};

const registerUser = async (userDto) => {
  try {
    const existingUser = await User.findOne({ email: userDto.email });

    if (existingUser) {
      throw new Error("User with the same email already exists");
    }
    const user = new User(userDto);
    await user.save();

    return user;
  } catch (error) {
    console.error(error);
    const errorMessage = error.message || "Error creating new user";
    throw new Error(errorMessage);
  }
};

const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Error getting user by ID");
  }
};

const updateUser = async (userId, userDto) => {
  try {
    const user = await User.findByIdAndUpdate(userId, userDto, {
      new: true,

      
    });
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Error updating user");
  }
};

const deleteUser = async (userId) => {
  try {
    const user = await User.findByIdAndRemove(userId);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Error deleting user");
  }
};

const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email, password });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Error during login");
  }
};

module.exports = {
  getUsers,
  registerUser,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
};
