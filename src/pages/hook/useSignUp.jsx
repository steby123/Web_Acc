import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const UserSignUp = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password, username) => {
    setError(null);
    setIsPending(true);

    try {
      const auth = getAuth();
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);

      if (!res) {
        throw new Error('Could not complete signup');
      }

      await updateProfile(auth.currentUser, { displayName: username });
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
