import { Button } from "@/components/ui/button";

const AuthButtons = ({ navigate, setIsMenuOpen }) => (
  <div className="flex gap-3">
    <Button
      className="bg-indigo-600 font-bold text-white text-sm px-4 py-2 hover:bg-indigo-700 h-auto"
      onClick={() => {
        navigate("/login");
        setIsMenuOpen(false);
      }}
    >
      Login
    </Button>
    <Button
      className="bg-emerald-500 font-bold text-white text-sm px-4 py-2 hover:bg-emerald-600 h-auto"
      onClick={() => {
        navigate("/register");
        setIsMenuOpen(false);
      }}
    >
      Register
    </Button>
  </div>
);

export default AuthButtons;
