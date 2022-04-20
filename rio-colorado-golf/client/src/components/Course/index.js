import React, { useState } from 'react';
import hole1img from '../../assets/img/riocolo-hole1.png';
import hole2img from '../../assets/img/riocolo-hole2.png';
import hole3img from '../../assets/img/riocolo-hole3.png';
import hole4img from '../../assets/img/riocolo-hole4.png';
import hole5img from '../../assets/img/riocolo-hole5.png';
import hole6img from '../../assets/img/riocolo-hole6.png';
import hole7img from '../../assets/img/riocolo-hole7.png';
import hole8img from '../../assets/img/riocolo-hole8.png';
import hole9img from '../../assets/img/riocolo-hole9.png';
import hole10img from '../../assets/img/riocolo-hole10.png';
import hole11img from '../../assets/img/riocolo-hole11.png';
import hole12img from '../../assets/img/riocolo-hole12.png';
import hole13img from '../../assets/img/riocolo-hole13.png';
import hole14img from '../../assets/img/riocolo-hole14.png';
import hole15img from '../../assets/img/riocolo-hole15.png';
import hole16img from '../../assets/img/riocolo-hole16.png';
import hole17img from '../../assets/img/riocolo-hole17.png';
import hole18img from '../../assets/img/riocolo-hole18.png';

function Holes() {
  const [selector, setSelector] = useState(0);
  const golfHoles = {
    holes: [
      {
        name: '1',
        paragraph: `Your round begins with a risk/reward Par 5 that plays 528 yards from the
          back tees. Water runs along the entire left side of the hole and the
          driving range to the right of the tees is out of bounds. A tee shot hit
          along the left side will leave you a long iron into the green for your
          second shot, but be careful, a gentle slope along the left side will
          feed any errant shots into the water. A good play is to layup to the
          center of the fairway leaving you a wedge to a double tiered green.`,
        stats: 'PAR 5  |  HCP 17',
        redTee: '438',
        whiteTee: '473',
        blueTee: '508',
        goldTee: '528',
        image: hole1img,
      },
      {
        name: '2',
        paragraph: `This hole features a gentle dogleg left. Out of Bounds runs down the left side leaving you plenty of room to play the right side of the fairway, but watch out for the 2 fairway bunkers that divide the 1st and 2nd fairways. A well placed tee shot into the right center of the fairway will leave you a short iron into the green. Avoid the front left bunker and hit your approach to the proper level of this 2-tiered green and you should be left with a nice birdie putt.`,
        stats: 'PAR 4  |  HCP 9',
        redTee: '278',
        whiteTee: '317',
        blueTee: '346',
        goldTee: '379',
        image: hole2img,
      },
      {
        name: '3',
        paragraph: `Don't let the shortness of this hole fool you, the prevailing winds usually blow sideways, with Out of Bounds all along the left side and water on greenside to the right. Two well-placed bunkers guard a green that slopes drastically from back to front. All told, earning par is an achievement on this hole.`,
        stats: 'PAR 4  |  HCP 17',
        redTee: '118',
        whiteTee: '139',
        blueTee: '166',
        goldTee: '177',
        image: hole3img,
      },
      {
        name: '4',
        paragraph: `Texas Coastal winds usually blow right into the player or across from right to left, wreaking havoc on your tee shot. Out of Bounds runs along the left, while on the right the fairway bunker and lake will punish any offline tee shot. Long hitters will have a chance to reach this 2-tiered green in 2, just avoid the 3 greenside bunkers to the left and water to the right.`,
        stats: 'PAR 5  |  HCP 5',
        redTee: '401',
        whiteTee: '449',
        blueTee: '493',
        goldTee: '557',
        image: hole4img,
      },
      {
        name: '5',
        paragraph: `The #1 handicap hole on the course and for good reason. The right side of the fairway is guarded by a large tree that will knock down all but the best tee shots, the left side is protected by a large fairway bunker, while the approach shot features water to the right into a large green surrounded by bunkers. Any shot that comes up short and right will be funneled into the deepest of the two bunkers. Par is a good score, but play to the center of the green to avoid trouble.`,
        stats: 'PAR 4  |  HCP 1',
        redTee: '370',
        whiteTee: '398',
        blueTee: '431',
        goldTee: '456',
        image: hole5img,
      },
      {
        name: '6',
        paragraph: `This little hole usually plays into the wind so club selection is key. A lateral water hazard runs along the right side and a long, narrow, elevated green with lots of slope is fronted by a small pot bunker that will eat up anything short and left.`,
        stats: 'PAR 3  |  HCP 13',
        redTee: '91',
        whiteTee: '113',
        blueTee: '141',
        goldTee: '175',
        image: hole6img,
      },
      {
        name: '7',
        paragraph: `Fairway bunkers on the left and right make a straight drive a must. Out of Bounds to the left and behind the green punish any wayward shots. A lateral water hazard running down the entire right side and a large tree that towers over the front right of the green present challenges all the way to the hole.`,
        stats: 'PAR 4  |  HCP 7',
        redTee: '301',
        whiteTee: '344',
        blueTee: '377',
        goldTee: '407',
        image: hole7img,
      },
      {
        name: '8',
        paragraph: `The most difficult par 3 on the golf course, coastal winds make club selection challenging. Out of Bounds is to the left and behind the green. The right side of the long deep green is guarded by 2 deep bermuda grass bunkers that will make getting up and down extremely difficult.`,
        stats: 'PAR 3  |  HCP 3',
        redTee: '126',
        whiteTee: '151',
        blueTee: '181',
        goldTee: '219',
        image: hole8img,
      },
      {
        name: '9',
        paragraph: `This short par 5 is a great way to finish the front 9 with a birdie, provided you stay away from the Out of Bounds on the left and the lateral water hazard that runs the length of the hole on the right. A tee shot that avoids the left bunker and finds the fairway could leave you with a chance to hit this green in 2 shots. Grass bunkers on the left and a deep bunker on the right will swallow up all but the best approach shots. Going long is no picnic either as the green falls off, leaving you with a blind chip into a severely elevated green.`,
        stats: 'PAR 5  |  HCP 15',
        redTee: '423',
        whiteTee: '447',
        blueTee: '467',
        goldTee: '494',
        image: hole9img,
      },
      {
        name: '10',
        paragraph: `This hole generally plays downwind and is reachable in 2 shots. Long hitters need to be aware of the green that crosses the middle of the fairway. Play to the center of the green and avoid the deep bunker on the right for a good look at eagle or birdie!`,
        stats: 'PAR 5  |  HCP 18',
        redTee: '423',
        whiteTee: '472',
        blueTee: '503',
        goldTee: '533',
        image: hole10img,
      },
      {
        name: '11',
        paragraph: `This hole features a very tough tee shot with water all along the left and Out of Bounds all along the right. The fairway slopes towards the water and the right side features large mounds which enjoy propelling the ball either right out of bounds or left toward the water hazard. A long 2-tiered green is guarded by large rolling hills on the right and 2 deep bunkers on the left.`,
        stats: 'PAR 4  |  HCP 4',
        redTee: '325',
        whiteTee: '370',
        blueTee: '401',
        goldTee: '444',
        image: hole11img,
      },
      {
        name: '12',
        paragraph: `This green is guarded by water and alligators on the left, a lateral hazard in the back, and a large bunker on the front right. The green slopes from back to front and left to right. The shaved bank in the front will send anything short rolling into the water.`,
        stats: 'PAR 3  |  HCP 16',
        redTee: '106',
        whiteTee: '120',
        blueTee: '147',
        goldTee: '183',
        image: hole12img,
      },
      {
        name: '13',
        paragraph: `Out of Bounds on the right and trees on the left make this a tough hole to find the fairway off the tee. A long, straight drive will leave you with a risk/reward shot into the green. Do you go for it or lay up short of the water hazard in front? The green is flanked on both sides by large trees and a pot bunker in front. Well-placed shots on this hole should reward you with a birdie opportunity.`,
        stats: 'PAR 5  |  HCP 10',
        redTee: '416',
        whiteTee: '463',
        blueTee: '487',
        goldTee: '507',
        image: hole13img,
      },
      {
        name: '14',
        paragraph: `Our signature hole perched on the banks of the Colorado River, anything to the right of the fairway will find its way down the bluffs and into the river which plays as Out of Bounds. Trees line the left of the fairway. The small green is guarded on the left by 2 bunkers and on the right by the Colorado River. A well-placed tee shot will leave you no more than a wedge to the green. If you play smart this can be an easy birdie hole.`,
        stats: 'PAR 4  |  HCP 14',
        redTee: '240',
        whiteTee: '272',
        blueTee: '312',
        goldTee: '328',
        image: hole14img,
      },
      {
        name: '15',
        paragraph: `This hole usually plays longer than the listed yardage due to the coastal winds. Water lies all along the right side, while bunkers flank both the left and right sides of a long, sloping green, making club selection critical.`,
        stats: 'PAR 3  |  HCP 12',
        redTee: '91',
        whiteTee: '133',
        blueTee: '166',
        goldTee: '198',
        image: hole15img,
      },
      {
        name: '16',
        paragraph: `Large trees lining both sides of the fairway will force you to play over or around them should you veer too far in either direction off the tee. The sloping green is protected by a large grass bunker in front and bunkers along the left and right. Play to the center of the green for safety.`,
        stats: 'PAR 4  |  HCP 8',
        redTee: '296',
        whiteTee: '344',
        blueTee: '374',
        goldTee: '403',
        image: hole16img,
      },
      {
        name: '17',
        paragraph: `A tricky tee setup that tends to send your tee shot to the right and Out of Bounds. Alligators and water run the length of the left side and 2 well-placed fairway bunkers make this a very difficult driving hole. The green slopes from back to front and right to left and is guarded by large rolling hills and left side bunkers.`,
        stats: 'PAR 4  |  HCP 6',
        redTee: '276',
        whiteTee: '326',
        blueTee: '360',
        goldTee: '393',
        image: hole17img,
      },
      {
        name: '18',
        paragraph: `On most days this #2 handicap hole plays more like a par 5 due to the Texas Coastal winds blowing directly towards you. It takes 2 well-struck shots to reach this green in regulation. Water runs the length of the left side and the right side of the fairway features large, rolling hills that can leave you a very awkward lie. The severely-sloped green is protected by bunkers front and left and long, making par a great score on this tough finishing hole.`,
        stats: 'PAR 4  |  HCP 2',
        redTee: '360',
        whiteTee: '400',
        blueTee: '443',
        goldTee: '474',
        image: hole18img,
      },
    ],
  };

  const changeHole = e => {
    e.preventDefault();
    setSelector(e.target.value - 1);
  };

  const holeData = golfHoles.holes.map(course => {
    return (
      <div className="row" key={course.name}>
        <div className="col-md-5">
          <h4>CHOOSE ONE:</h4>
          <select
            id="holeSelector"
            className="form-select hole-select"
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
        <div className="col-md-7 hole-img-container">
          <img src={course.image} alt="Hole Layout" />
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
