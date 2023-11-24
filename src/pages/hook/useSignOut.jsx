import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";

const SignOutUser = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const handleSignOut = async () => {
        setError(null);
        setIsPending(true);

        try {
            const auth = getAuth();
            await signOut(auth);
            setIsPending(false);
        } catch (err) {
            console.error(err.message);
            setError(err.message);
            setIsPending(false);
        }
    };

    return (
        <div>
            {isPending && <p>Signing out...</p>}
            {error && <p>{error}</p>}
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default SignOutUser;
