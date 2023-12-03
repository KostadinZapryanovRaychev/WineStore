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
    if (!user) {
      throw new Error("There is no user with such an id");
    }
    return user;
  } catch (error) {
    const errorMessage = error.message || "Error getting this user";
    throw new Error(errorMessage);
  }
};

const updateUser = async (userId, userDto) => {
  console.log(userId);
  try {
    const user = await User.findByIdAndUpdate(userId, userDto, {
      new: true,
    });
    if (!user) {
      throw new Error("There is no user with such an id");
    }
    return user;
  } catch (error) {
    const errorMessage = error.message || "Error updating the user";
    throw new Error(errorMessage);
  }
};

const deleteUser = async (userId) => {
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw new Error("There is no user with such an id");
    }
    return user;
  } catch (error) {
    const errorMessage = error.message || "Error deletiung the user";
    throw new Error(errorMessage);
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
