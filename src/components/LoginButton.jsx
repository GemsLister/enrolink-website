import { useGoogleLogin } from "@react-oauth/google";

export const CustomGoogleLogin = ({ handleLoginSuccess }) => {
  const login = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    onError: (error) => console.log("Login Failed:", error),
    flow: "implicit", // returns tokenResponse.credential (Google ID token)
  });

  return (
    <button
      type="button"
      onClick={login}
      className="w-full bg-antique-ruby hover:bg-blood-red text-white font-bold py-2 px-4 rounded cursor-pointer transition-colors duration-300"
    >
      Sign in with Google
    </button>
  );
};
