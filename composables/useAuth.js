import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

export const useGitHubLogin = async () => {
  const auth = getAuth();
  const provider = new GithubAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("GitHub login successful:", user);
    return user;
  } catch (error) {
    console.error("GitHub login error:", error.message);
    throw error;
  }
};
