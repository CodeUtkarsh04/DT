import logo from "../../assets/Logo.jpg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-20 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Discover Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Links */}
        <div className="flex gap-16 text-sm text-slate-600">
          <span className="cursor-pointer hover:text-slate-900 transition">
            Home
          </span>
          <span className="cursor-pointer hover:text-slate-900 transition">
            FAQs
          </span>
          <span className="cursor-pointer hover:text-slate-900 transition">
            Policies
          </span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
