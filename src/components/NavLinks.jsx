import { Link } from "react-router-dom";

const NavLinks = ({ setIsMenuOpen, handleProtectedNavClick }) => {
  const baseClasses =
    "block text-sm font-medium px-2 py-1 rounded hover:text-indigo-600 hover:bg-slate-100 transition";

  return (
    <>
      <Link to="/" onClick={() => setIsMenuOpen(false)} className={baseClasses}>
        Home
      </Link>

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

      <Link
        to="/browse-tasks"
        onClick={() => setIsMenuOpen(false)}
        className={baseClasses}
      >
        Browse Tasks
      </Link>
    </>
  );
};

export default NavLinks;
