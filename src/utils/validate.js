export const checkValidData = (email, password) => {
  const isEmailValid = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email);
  const isPasswordValid = /^\S{8,20}$/.test(password);

  if (!isEmailValid) return "Please enter a valid email address.";
  if (!isPasswordValid) return "Please enter a valid password";
  
  return null;
};
