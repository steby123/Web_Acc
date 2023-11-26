import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";

const SignOutUser = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSignOut = async () => {
    setError(null);
    setIsPending(true);

    try {
      const auth = getAuth();
      await signOut(auth);
      setIsPending(false);
      history.push("/"); // Redirect to the home page after sign-out
    } catch (err) {
      console.error(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, handleSignOut };
};

export default SignOutUser;
