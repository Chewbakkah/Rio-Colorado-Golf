import React from "react";
import { motion } from "framer-motion";
import crestLogo from "../../src/assets/img/riocolo-logo.png";
import holeImage from "../../src/assets/img/riocolo-cup-slice.jpg";
import holeImageGrad from "../../src/assets/img/riocolo-wht-gradient.png";
import greenImage from "../../src/assets/img/riocolo-green.jpg";
import Directions from "../components/Directions";
import Footer from "../components/Footer";

const Home = () => {
  const animateFrom = { opacity: 0, y: -100 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <main>
      <section>
        <section className="home-hero">
          <motion.div
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 1 }}
            className="text-logo"
          >
            Rio Colorado
          </motion.div>
          <motion.div
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.5 }}
            className="crest-logo"
          >
            <img src={crestLogo} alt="Rio Colorado Logo" />
          </motion.div>
        </section>
        <img className="img-fluid w-100" src={holeImageGrad} />
        <img className="img-fluid w-100 img-shadow" src={holeImage} />
        <section className="intro-container">
          <div className="intro-welcome">
            <h2>WELCOME TO RIO COLORADO</h2>
          </div>
          <div className="intro-text">
            Rio Colorado Golf Course is a hidden jewel designed by World Golf
            Hall of Fame member Gary Player. Built in 1993, this picturesque
            public course is carved around the beautiful Colorado River and
            surrounding wetlands. Rio Colorado offers an exciting round to
            golfers of all skill levels with yardages ranging from just over
            5,000 all the way to the championship tees which play to a
            challenging 6855 yards. <br />
            <br />
            Rio Colorado is a great golf course featuring a friendly and
            courteous staff, a fun challenging layout, and the fresh air of the
            Texas coast! Call and book your tee time today!
          </div>
          <div className="intro-book-now">
            <button className="btn btn-shadow">
              <a href="">BOOK ONLINE</a>
            </button>
            {/* <div className="new-btn from-bottom">
              <a href="">BOOK ONLINE</a>
            </div> */}
          </div>
        </section>
        <div className="intro-img">
          <img className="img-fluid w-100" src={greenImage} />
        </div>
        <section className="intro-container">
          <div className="intro-welcome">
            <h2>SEE WHAT YOU'RE MISSING</h2>
          </div>
          <div className="intro-text">
            Bay City's premier 18-hole public golf course features a front nine
            characterized by it's rolling hills and open vistas, and a
            tree-lined back nine that weaves through the Colorado river
            wetlands. No other south Texas course offers the diversity you'll
            find at Rio Colorado.
          </div>
          <div className="missing-amenities">
            <button className="btn btn-shadow">
              <a href="/amenities">AMENITIES</a>
            </button>
          </div>
        </section>
        <section className="intro-container">
          <div className="intro-welcome">
            <h2>INFORMATION</h2>
          </div>
          <div className="intro-text">
            Rio Colorado Golf Course is located south of Bay City on FM2668. Our
            staff of professionals will gladly assist with the planning and
            hosting of your private event or corporate outing. Your group is
            always welcome at Rio Colorado and we will help you give your
            players a tournament to remember by customizing your event to fit
            your needs. Everything from pre-tournament organization to
            post-event scoring and dinner, we are here to serve you and your
            group.
          </div>
        </section>
      </section>
      <Directions />
    </main>
  );
};

export default Home;
