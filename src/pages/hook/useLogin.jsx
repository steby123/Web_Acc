import { useState, useEffect } from "react";
import { projectAuth, provider } from "../../firebase/firebase";
import { signInWithPopup } from "firebase/auth";

const UserLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const login = async (email, password, method) => {
        setError(null);
        setIsPending(true);

        try {
            if (method === 'email') {
                await projectAuth.signInWithEmailAndPassword( email, password);
            } else if (method === 'google') {
                const res = await signInWithPopup(projectAuth, provider);
                localStorage.setItem("email", res.user.email);
            }

            // Update state if the component is still mounted
            if (!isCancelled) {
                setIsPending(false);
                setError(null);
            }
        } catch (err) {
            // Update state if the component is still mounted
            if (!isCancelled) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
    };

    useEffect(() => {
        return () => setIsCancelled(true);
    }, []);

    return { error, isPending, login };
};

export default UserLogin;
