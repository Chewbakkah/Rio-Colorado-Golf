import React from "react";
// import images from "../../public/assets/img/";

const Home = () => {
  return (
    <section>
      <section class="home-hero">
        <div class="text-logo">Rio Colorado</div>
        <div class="crest-logo">
          <img src="{crestLogo}" alt="Rio Colorado Logo" />
        </div>
      </section>

      <img
        class="img-fluid w-100 img-shadow"
        src="/rio-colorado-golf/public/assets/img/riocolo-cup-slice.jpg"
      />
      <section class="intro-container">
        <div class="intro-welcome">
          <h2>WELCOME TO RIO COLORADO</h2>
        </div>
        <div class="intro-text">
          Rio Colorado Golf Course is a hidden jewel designed by World Golf Hall
          of Fame member Gary Player. Built in 1993, this picturesque public
          course is carved around the beautiful Colorado River and surrounding
          wetlands. Rio Colorado offers an exciting round to golfers of all
          skill levels with yardages ranging from just over 5,000 all the way to
          the championship tees which play to a challenging 6855 yards. <br />
          <br />
          Rio Colorado is a great golf course featuring a friendly and courteous
          staff, a fun challenging layout, and the fresh air of the Texas coast!
          Call and book your tee time today!
        </div>
        <div class="intro-book-now">
          <button class="btn-shadow">
            <a href="">BOOK ONLINE</a>
          </button>
        </div>
      </section>
      <div class="missing-img">
        <img
          class="img-fluid w-100"
          src="/rio-colorado-golf/public/assets/img/riocolo-green.jpg"
        />
      </div>
      <section class="missing-container">
        <div class="missing-header">
          <h2>SEE WHAT YOU'RE MISSING</h2>
        </div>
        <div class="missing-text">
          Bay City's premier 18-hole public golf course features a front nine
          characterized by it's rolling hills and open vistas, and a tree-lined
          back nine that weaves through the Colorado river wetlands. No other
          south Texas course offers the diversity you'll find at Rio Colorado.
        </div>
        <div class="missing-amenities">
          <button class="btn-shadow">
            <a href="">AMENITIES</a>
          </button>
        </div>
      </section>
      <section class="missing-container">
        <div class="missing-header">
          <h2>INFORMATION</h2>
        </div>
        <div class="missing-text">
          Rio Colorado Golf Course is located south of Bay City on FM2668. Our
          staff of professionals will gladly assist with the planning and
          hosting of your private event or corporate outing. Your group is
          always welcome at Rio Colorado and we will help you give your players
          a tournament to remember by customizing your event to fit your needs.
          Everything from pre-tournament organization to post-event scoring and
          dinner, we are here to serve you and your group.
        </div>
        <div class="container directions">
          <div class="row">
            <div class="col-lg-8">
              <iframe
                class="map"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=7320%20fm2668%20bay%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
            <div class="col-lg-4">
              <div>
                <div>
                  <h4>ADDRESS</h4>
                  7320 FM2668, Bay City, TX 77414
                </div>
                <div>
                  <h4>EMAIL</h4>
                  playgolf@riocoloradogolfcourse.com
                </div>
                <div>
                  <h4>PHONE NUMBER</h4>
                  (979) 244-2955
                </div>
                <div>
                  <h4>OPERATING HOURS:</h4>
                  Sunday - Saturday
                  <br />
                  7:00AM - 5:30PM
                </div>
                <div class="directions-book-now">
                  <button class="btn-shadow">
                    <a href="">BOOK ONLINE</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
