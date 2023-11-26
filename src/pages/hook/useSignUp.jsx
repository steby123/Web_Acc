import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";

const UserSignUp = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email,username , password) => {
    setError(null);
    setIsPending(true);

    try {

      if(password.length < 6) {
        throw new Error('Password should be at least 6 characters.');
      }

      const auth = getAuth();
      const res = await signOut(auth, email, password);
      console.log(res.user);

      if (!res.user) {
        throw new Error('Could not complete signup');
      }

      await signOut(auth.currentUser, { displayName: username });
      setIsPending(false);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};

export default UserSignUp;