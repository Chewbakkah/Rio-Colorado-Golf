import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import courseImg from "../../src/assets/img/full_course_graphic.jpg";
import Holes from "../components/Course";

const Course = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <section className="course-page">
      <div className="course-header">
        <h2>THE COURSE</h2>
      </div>
      
        <div className="course-img">
            <img className="img-fluid img-shadow" src={courseImg} alt="course layout"/>
          </div>
      
      <div className="flex course-container">
        
          <div className="course-text">
            The front nine is a skillfully sculpted, prairie links design, with
            holes playing from every direction to ensure the Texas coastal winds
            will play a significant role in your game. Fairway and greenside
            bunkers abound and water hazards accented by native coastal grasses
            and vegetation loom around every corner.
            <br />
            <br />
            The back 9 starts off with the first 3 holes maintaining the prarie
            links design, then the course moves towards the bluffs overlooking
            the Colorado River. Our signature hole, #14, runs right along the
            scenic bluff of the Colorado River offering a watery grave to stray
            tee shots and the scenic trees that once populated the right side of
            the fareway. Along the way you will pass through a forest of oaks
            and cottonwoods and navigate through some beautiful Texas wetlands
            and don't be suprised to spot plenty of wildlife including deer,
            ducks, rabbits, cranes, hawks and alligators.
          </div>
          
        
      </div>

      <section>
        <div className="course-summary center-text container-fluid">
          <h2>
            GARY PLAYER DESIGNED
            <br />
            18-HOLE CHAMPIONSHIP COURSE
          </h2>
          <div className="container">
            <div className="row course-stats">
              <div className="col-md-3 center-text">PAR 72</div>
              <div className="col-md-3 center-text">6855 YARDS</div>
              <div className="col-md-3 center-text">SLOPE: 127</div>
              <div className="col-md-3 center-text">RATING: 73.1</div>
            </div>
          </div>
          <div className="course-amenities">
            <button className="btn btn-shadow">
              <a href="/amenities">VIEW AMENITIES</a>
            </button>
          </div>
        </div>
      </section>
      <Holes />
    </section>
  );
};

export default Course;
