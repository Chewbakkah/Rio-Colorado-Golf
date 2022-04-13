import React from "react";
import courseImg from "../../src/assets/img/placeholder.png";
import Holes from "../components/Course";

const Course = () => {
  return (
    <section>
      <div class="course-img">
        <img class="img-fluid w-100 img-shadow" src={courseImg} />
      </div>
      <section class="course-container">
        <div class="course-header">
          <h2>THE COURSE</h2>
        </div>
        <div class="course-text">
          The front nine is a skillfully sculpted, prairie links design, with
          holes playing from every direction to ensure the Texas coastal winds
          will play a significant role in your game. Fairway and greenside
          bunkers abound and water hazards accented by native coastal grasses
          and vegetation loom around every corner.
          <br />
          <br />
          The back 9 starts off with the first 3 holes maintaining the prarie
          links design, then the course moves towards the bluffs overlooking the
          Colorado River. Our signature hole, #14, runs right along the scenic
          bluff of the Colorado River offering a watery grave to stray tee shots
          and the scenic trees that once populated the right side of the
          fareway. Along the way you will pass through a forest of oaks and
          cottonwoods and navigate through some beautiful Texas wetlands and
          don't be suprised to spot plenty of wildlife including deer, ducks,
          rabbits, cranes, hawks and alligators.
        </div>
        <div class="course-summary center-text container-flui">
          <h2>
            GARY PLAYER DESIGNED
            <br />
            18-HOLE CHAMPIONSHIP COURSE
          </h2>
          <div class="container-fluid">
            <div class="row course-stats">
              <div class="col-sm-3 center-text">PAR 72</div>
              <div class="col-sm-3 center-text">6855 YARDS</div>
              <div class="col-sm-3 center-text">SLOPE: 127</div>
              <div class="col-sm-3 center-text">RATING: 73.1</div>
            </div>
          </div>
          <div class="course-amenities">
            <button class="btn-shadow">
              <a href="">VIEW AMENITIES</a>
            </button>
          </div>
        </div>
      </section>
      <Holes />
    </section>
  );
};

export default Course;
