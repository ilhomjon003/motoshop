import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { FiUser, FiMenu } from "react-icons/fi";
import { navRoutes } from "routes";
import StyledNav from "./style";
import { ISidebar } from "interfaces";
import { useAppSelector } from "hooks";
import { routes } from "constants/routes";
import { useEffect } from "react";

const { HOME, AUTH } = routes;
const Navbar = ({ isSidebarOpen, setIsSidebarOpen }: ISidebar) => {
  const user = useAppSelector(({ auth }) => auth.user);
  useEffect(() => {
    if (user) console.log(user);
  }, [user]);

  return (
    <StyledNav>
      <div className="nav__container">
        <div className="nav__left">
          <Link to={HOME}>
            <div className="nav__logo">MotoShop</div>
          </Link>
          <nav className="nav__menu">
            {navRoutes.map(({ key, path }) => (
              <Link key={key} to={path} className="menu__item" aria-label={key}>
                {key}
              </Link>
            ))}
          </nav>
        </div>
        <div className="nav__right">
          {user ? (
            <div className="user__wrp">
              <FiUser />
              <span>Profil</span>
            </div>
          ) : (
            <Link className="login__link" to={AUTH}>
              Kirish
            </Link>
          )}

          {isSidebarOpen ? (
            <GrClose
              className="bars__icon"
              onClick={() => setIsSidebarOpen(false)}
            />
          ) : (
            <FiMenu
              className="bars__icon"
              onClick={() => setIsSidebarOpen(true)}
            />
          )}
        </div>
      </div>
    </StyledNav>
  );
};

export default Navbar;
