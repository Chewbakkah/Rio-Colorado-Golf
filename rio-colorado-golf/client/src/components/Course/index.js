import React, {useState} from "react";
import hole1img from "../../assets/img/riocolo-hole1.png";

function Holes() {
  const [selector, setSelector] = useState(0);
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
        stats: "PAR 5  |  HCP 17",
        redTee: "438",
        whiteTee: "473",
        blueTee: "508",
        goldTee: "528",
        image: hole1img,
      },
      {
        name: "2",
        paragraph: `testing testing testing`,
        stats: "PAR 4  |  HCP 17",
        redTee: "438",
        whiteTee: "473",
        blueTee: "508",
        goldTee: "528",
        image: hole1img,
      },
      {
        name: "3",
        paragraph: `testing testing testing`,
        stats: "PAR 4  |  HCP 17",
        redTee: "438",
        whiteTee: "473",
        blueTee: "508",
        goldTee: "528",
        image: hole1img,
      },
    ],
  };

const changeHole = (e) => {
  e.preventDefault ();
  setSelector(e.target.value-1);
}

  const holeData = golfHoles.holes.map((course) => {
    return (
      <div className="row" key={course.name}>
        <div className="col-md-5">
          <h4>CHOOSE ONE:</h4>
          <select
            id="holeSelector"
            class="form-select hole-select"
            aria-label="Choose Hole"
            onChange={changeHole}
          >
            <option value="1"></option>
            <option value="1">Hole 1</option>
            <option value="2">Hole 2</option>
            <option value="3">Hole 3</option>
            <option value="4">Hole 4</option>
            <option value="5">Hole 5</option>
            <option value="6">Hole 6</option>
            <option value="7">Hole 7</option>
            <option value="8">Hole 8</option>
            <option value="9">Hole 9</option>
            <option value="10">Hole 10</option>
            <option value="11">Hole 11</option>
            <option value="12">Hole 12</option>
            <option value="13">Hole 13</option>
            <option value="14">Hole 14</option>
            <option value="15">Hole 15</option>
            <option value="16">Hole 16</option>
            <option value="17">Hole 17</option>
            <option value="18">Hole 18</option>
          </select>

          <span className="hole-header-txt">
            HOLE <span className="hole-header-num">{course.name}</span>
          </span>
          <p className="hole-summary">{course.paragraph}</p>

          <h3>{course.stats}</h3>
          <div className="hole-yardage">
            <span className="red-tee"></span> {course.redTee}
            <br />
            <span className="white-tee"></span> {course.whiteTee}
            <br />
            <span className="blue-tee"></span> {course.blueTee}
            <br />
            <span className="gold-tee"></span> {course.goldTee}
          </div>
        </div>
        <div className="col-md-7">
          <img src={course.image} alt="Hole {course.name}" />
        </div>
      </div>
    );
  });

  return (
    <section className="container-fluid hole-info-container">
      <div key="courseData">{holeData[selector]}</div>
    </section>
  );
}

export default Holes;
