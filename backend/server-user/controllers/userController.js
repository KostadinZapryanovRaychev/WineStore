const userService = require("../services/userService");
const UserDto = require("../dtos/userDto");
const UserByIdDto = require("../dtos/userByIdDto");
const validator = require("../helpers/validators");

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error getting all users");
  }
};

const registerUser = async (req, res) => {
  const { email, password, firstName, lastName, birthDate } = req.body;
  try {
    const newUserDto = new UserDto(
      email,
      password,
      firstName,
      lastName,
      birthDate
    );
    const user = await userService.registerUser(newUserDto);
    res.json(user.id);
  } catch (error) {
    console.error(error);
    const errorMessage = error.message || "Error registering new user";
    res.status(500).send(errorMessage);
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;
  if (!userId) {
    return res.status(404).json({ error: "User not found" });
  }
  try {
    const idDto = new UserByIdDto(userId);
    const user = await userService.getUserById(idDto.id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error getting this user");
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { email, password, firstName, lastName, birthDate } = req.body;
  if (!userId) {
    return res.status(404).json({ error: "User not found" });
  }
  try {
    const newUserDto = new UserDto(
      email,
      password,
      firstName,
      lastName,
      birthDate
    );
    const idDto = new UserByIdDto(userId);
    const updatedUser = await userService.updateUser(idDto.id, newUserDto);
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating user");
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  if (!userId) {
    return res.status(404).json({ error: "User not found" });
  }
  try {
    const idDto = new UserByIdDto(userId);
    const deletedUser = await userService.deleteUser(idDto.id);
    res.json(deletedUser);
  } catch (error) {
    const errorMessage = error.message || "Error deleting the user";
    res.status(500).send(errorMessage);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!validator.isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }
  try {
    const token = await userService.loginUser(email, password);
    res.json({ token });
  } catch (error) {
    const errorMessage = error.message || "Error logging";
    res.status(500).send(errorMessage);
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
