import { Link } from "react-router-dom";

const NavLinks = ({ setIsMenuOpen, handleProtectedNavClick, user }) => {
  const baseClasses =
    "block text-sm font-medium px-3 py-2 rounded-md hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-gray-800 transition";

  return (
    <>
      <Link to="/" onClick={() => setIsMenuOpen(false)} className={baseClasses}>
        Home
      </Link>
      <Link
        to="/browse-tasks"
        onClick={() => setIsMenuOpen(false)}
        className={baseClasses}
      >
        Browse Tasks
      </Link>
      <Link
        to="/about"
        onClick={() => setIsMenuOpen(false)}
        className={baseClasses}
      >
        About
      </Link>

      {user && (
        <>
          <Link
            to="/add-task"
            onClick={(e) => {
              handleProtectedNavClick(e, "/add-task");
              setIsMenuOpen(false);
            }}
            className={baseClasses}
          >
            Add Task
          </Link>

          <Link
            to="/posted-task"
            onClick={(e) => {
              handleProtectedNavClick(e, "/posted-task");
              setIsMenuOpen(false);
            }}
            className={baseClasses}
          >
            Posted Tasks
          </Link>
        </>
      )}
    </>
  );
};

export default NavLinks;
