import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full bg-white ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href=""
          className=" flex justify-center items-center font-montserrat font-bold max-lg:hidden text-lg gap-16"
        >
          Sign in / Explore now
        </a>
        <div className="hidden max-lg:flex items-center gap-16">
            <img src={hamburger} alt="Hamburger" height={25} width={25}  />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
