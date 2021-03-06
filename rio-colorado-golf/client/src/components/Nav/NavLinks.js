import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Auth from "../../utils/auth"


const NavLinks = (props) => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  }
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <div className="nav-background">
      <ul
        id="primary-navigation"
        data-visible="false"
        className="primary-navigation flex"
      >
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.05 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
          className="active"
        >
          <Link to="/">
            <span className="header-text">HOME</span>
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.1 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
          className="active"
        >
          <Link to="/course">
            <span className="header-text">COURSE</span>
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
          className="active"
        >
          <Link to="/amenities">
            <span className="header-text">AMENITIES</span>
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.3 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
          className="active"
        >
          <Link to="/events">
            <span className="header-text">EVENTS</span>
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.4 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
          className="active"
        >
          <Link to="/contact">
            <span className="header-text">CONTACT</span>
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.5 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
          className="active"
        >
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">
                <a href="/" onClick={logout}>
                  <span className="header-text">LOGOUT</span>
                </a>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <span className="header-text">LOGIN</span>
              </Link>
            </>
          )}
        </motion.li>
      </ul>
    </div>
  );
};

export default NavLinks;
