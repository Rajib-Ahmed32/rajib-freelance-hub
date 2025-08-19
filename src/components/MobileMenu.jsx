import NavLinks from "../components/NavLinks";
import AuthButtons from "../components/AuthButtons";
import UserAvatar from "../components/UserAvatar";
import { Button } from "../components/ui/button";

const MobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  user,
  navigate,
  handleLogout,
  handleProtectedNavClick,
}) => {
  return (
    <div className="lg:hidden flex items-center gap-5 relative">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-indigo-600 dark:text-indigo-400"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        <svg
          className="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {user && <UserAvatar user={user} handleLogout={handleLogout} />}

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute border border-2 top-12 right-0 bg-white dark:bg-gray-900 shadow-xl rounded-md px-4 py-3 z-50 w-60 space-y-2 text-sm dark:text-gray-200"
        >
          <nav className="flex flex-col gap-2">
            <NavLinks
              user={user}
              setIsMenuOpen={setIsMenuOpen}
              handleProtectedNavClick={handleProtectedNavClick}
            />
          </nav>

          <div className="flex justify-center gap-4 pt-2 border-t mt-2 border-gray-200 dark:border-gray-700">
            {!user ? (
              <AuthButtons
                navigate={navigate}
                setIsMenuOpen={setIsMenuOpen}
                className="py-1 px-2 text-xs"
              />
            ) : (
              <Button
                size="sm"
                className="bg-rose-600 hover:bg-rose-700 dark:bg-rose-700 dark:hover:bg-rose-800 text-white text-sm px-4 py-2"
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
              >
                Log out
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
