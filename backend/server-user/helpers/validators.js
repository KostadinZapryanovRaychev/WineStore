function isValidEmail(email) {
  // Basic email validation, you can use a library like validator for more robust validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

module.exports = {
  isValidEmail,
};
