import React from "react";
import hole1 from "../../assets/img/riocolo-hole1.png";
import Selector from "./selector";
import { golfHoles } from "../../data";

function Holes({ golfHoles }) {
  // const golfHoleData = golfHoles.hole1.map((golfHoleData) => {
  //   return <p key={hole1.paragraph}></p>;
  // });

  return (
    <section class="container-fluid hole-info-container">
      <div class="row">
        <div class="col-md-5">
          <h4>CHOOSE ONE:</h4>
          <Selector />
          <span class="hole-header-txt">
            HOLE <span class="hole-header-num">1</span>
          </span>
          <p class="hole-summary">
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
          <div class="hole-yardage">
            <span class="red-tee"></span> 438
            <br />
            <span class="white-tee"></span> 473
            <br />
            <span class="blue-tee"></span> 508
            <br />
            <span class="gold-tee"></span> 528
          </div>
        </div>
        <div class="col-md-7">
          <img src={hole1} alt="Hole 1" />
        </div>
      </div>
    </section>
  );
}

export default Holes;
