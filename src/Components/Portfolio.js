import React from "react";

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <p>
            !!!PLEASE READ!!!
            <br></br>
            <br></br>
            For Testing, please use below ID/PW/etc...
            <br></br>
            テスト用に以下ID/PW/クレジット情報等を用意してありますので、ご利用ください。
            <br></br>
            <br></br>
            TEST LOGIN ID: test.123yuyaokamura@gmail.com
            <br></br>
            TEST LOGIN PW: Test_12345
            <br></br>
            <br></br>
            For PAYMENT(支払い)on Stripe
            <br></br>
            Address can be whatever random (e.g. a,a,a,a....)
            <br></br>
            住所は何でも大丈夫です。(例: a,a,a,a....)
            <br></br>
            TEST CREDIT NUMBER(クレジットカード番号): 4242 4242 4242 4242
            <br></br>
            EXPIRY(有効期限): 04/24
            <br></br>
            CVC(セキュリティコード): 424
          </p>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
