import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserAvatar from "./UserAvatar";
import AuthButtons from "./AuthButtons";
import MobileMenu from "./MobileMenu";
import { useAuth } from "../context/AuthProvider";

const Header = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (loading) return null;

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      setIsMenuOpen(false);
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const protectedRoutes = ["/add-task", "/posted-task"];

  const handleProtectedNavClick = (e, path) => {
    if (!user && protectedRoutes.includes(path)) {
      e.preventDefault();
      toast.error("Please login or register first");
      if (location.pathname !== "/login" && location.pathname !== "/register") {
        navigate("/login");
      }
    }
  };

  return (
    <header className="w-full shadow  px-4 py-6 relative z-50">
      <div className="flex justify-between items-center">
        <Logo />

        <nav className="hidden lg:flex gap-3 items-center font-medium text-slate-800">
          <NavLinks
            user={user}
            setIsMenuOpen={setIsMenuOpen}
            handleProtectedNavClick={handleProtectedNavClick}
          />
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          {!user ? (
            <AuthButtons navigate={navigate} setIsMenuOpen={setIsMenuOpen} />
          ) : (
            <UserAvatar user={user} handleLogout={handleLogout} />
          )}
        </div>
        <MobileMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          user={user}
          navigate={navigate}
          handleLogout={handleLogout}
          handleProtectedNavClick={handleProtectedNavClick}
        />
      </div>
    </header>
  );
};

export default Header;
