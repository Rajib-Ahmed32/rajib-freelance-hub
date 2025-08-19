import { Button } from "@/components/ui/button";

const AuthButtons = ({ navigate, setIsMenuOpen }) => (
  <div className="flex gap-3">
    <Button
      variant="outline"
      className="font-bold text-sm px-4 py-2 h-auto border-emerald-500 text-emerald-600 hover:bg-emerald-50"
      onClick={() => {
        navigate("/login");
        setIsMenuOpen(false);
      }}
    >
      Login
    </Button>
    <Button
      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-4 py-2 h-auto"
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
