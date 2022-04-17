import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <div class="nav-background">
      <ul
        id="primary-navigation"
        data-visible="false"
        class="primary-navigation flex"
      >
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.05 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
          class="active"
        >
          <Link to="/course">
            <span class="header-text">COURSE</span>
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.1 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
          class="active"
        >
          <Link to="/amenities">
            <span class="header-text">AMENITIES</span>
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
          class="active"
        >
          <Link to="/events">
            <span class="header-text">EVENTS</span>
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.3 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
          class="active"
        >
          <Link to="/contact">
            <span class="header-text">CONTACT</span>
          </Link>
        </motion.li>
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.4 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
          class="active"
        >
          <Link to="/login">
            <span class="header-text">LOGIN</span>
          </Link>
        </motion.li>
      </ul>
    </div>
  );
};

export default NavLinks;
