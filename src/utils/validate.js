export const checkValidData = (emailRef, passwordRef) => {
    const isEmailValid = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(emailRef);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(passwordRef);
   
    if (!isEmailValid) return "Please enter a valid email address or password.";
    if (!isPasswordValid) return "Please enter a valid password";
    return null;
  };
  