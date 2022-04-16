import React from "react";
import hole1 from "../../assets/img/riocolo-hole1.png";
import Selector from "./selector";
import hole1img from "../../assets/img/riocolo-hole1.png";

function Holes() {
  const golfHoles = {
    holes: [
      {
        name: "1",
        paragraph: `Your round begins with a risk/reward Par 5 that plays 528 yards from the
          back tees. Water runs along the entire left side of the hole and the
          driving range to the right of the tees is out of bounds. A tee shot hit
          along the left side will leave you a long iron into the green for your
          second shot, but be careful, a gentle slope along the left side will
          feed any errant shots into the water. A good play is to layup to the
          center of the fairway leaving you a wedge to a double tiered green.`,
        redTee: "438",
        whiteTee: "473",
        blueTee: "508",
        goldTee: "528",
        image: hole1img,
      },
    ],
  };
  const holeData = golfHoles.holes.map((course) => {
    return (
      <div key={course.name}>
        <h1>{course.name}</h1>
      </div>
    );
  });

  return (
    <section className="container-fluid hole-info-container">
      <div className="row">
        <div className="col-md-5">
          <h4>CHOOSE ONE:</h4>
          <Selector />
          <span className="hole-header-txt">
            HOLE <span className="hole-header-num">{holeData}</span>
          </span>
          <p className="hole-summary">
            Your round begins with a risk/reward Par 5 that plays 528 yards from
            the back tees. Water runs along the entire left side of the hole and
            the driving range to the right of the tees is out of bounds. A tee
            shot hit along the left side will leave you a long iron into the
            green for your second shot, but be careful, a gentle slope along the
            left side will feed any errant shots into the water. A good play is
            to layup to the center of the fairway leaving you a wedge to a
            double tiered green.
          </p>

          <h3>PAR 5 | HCP 17</h3>
          <div className="hole-yardage">
            <span className="red-tee"></span> 438
            <br />
            <span className="white-tee"></span> 473
            <br />
            <span className="blue-tee"></span> 508
            <br />
            <span className="gold-tee"></span> 528
          </div>
        </div>
        <div className="col-md-7">
          <img src={hole1} alt="Hole 1" />
        </div>
      </div>
    </section>
  );
}

export default Holes;
