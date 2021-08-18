import React from "react";
import logo from "../report.png";
import { Link } from "react-router-dom";

const Bottomcontent = () => {
  return (
    <div className="ui four column doubling stackable grid container">
      <div className="column">
        <Link to="/request">
          <div className="ui unstackable items pointer">
            <div className="item item-bg">
              <div className="image-icon">
                <img src={logo} alt="report image" />
              </div>
              <div className="content">
                <div className="header font-white font-weight-normal">
                  Service status
                </div>
                <div className="description font-white">
                  View the status of all IT services planned outages. Network
                  maintenance.
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="ui card">
          <div className="content label-bg-ash sub-head-style">
            <h2 className="ui sub header font-weight-normal">Status</h2>
          </div>
          <div className="content">
            <div className="ui small feed">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            {/* <div className="ui info message">
              <div className="ui small feed">
                <p>It is a long fact that a reader.</p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="ui card">
          <div className="content label-bg-ash sub-head-style">
            <h2 className="ui sub header font-weight-normal">
              Planned Maintenance
            </h2>
          </div>
          <div className="content">
            <div className="ui small feed">
              <div className="ui celled list">
                <div className="item">01-8-2021, Sunday</div>
                <div className="item">01-8-2021, Sunday</div>
                <div className="item">01-8-2021, Sunday</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <Link to="/request">
          <div className="ui unstackable items pointer">
            <div className="item item-bg">
              <div className="image-icon">
                <img src={logo} alt="report image" />
              </div>
              <div className="content">
                <div className="header font-white font-weight-normal">
                  Request
                </div>
                <div className="description font-white">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="ui card">
          <div className="content label-bg-blue sub-head-style">
            <h2 className="ui sub header font-white font-weight-normal">
              <i className="bell icon"></i> My Requests
            </h2>
            <i class="angle down icon down-arrow"></i>
          </div>
          <div className="content">
            <div className="ui small feed">
              <div className="ui celled list">
                <div className="item">1. 1914 translation by H. Rackham</div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui card">
          <div className="content label-bg-red sub-head-style">
            <h2 className="ui sub header font-white font-weight-normal">
              <i className="check square icon"></i> Actions
            </h2>
            <i class="angle down icon down-arrow"></i>
          </div>
          <div className="content">
            <div className="ui small feed">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested.
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <Link to="/request">
          <div className="ui unstackable items pointer">
            <div className="item item-bg">
              <div className="image-icon">
                <img src={logo} alt="report image" />
              </div>
              <div className="content">
                <div className="header font-white font-weight-normal">
                  Report an issue
                </div>
                <div className="description font-white">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="ui card">
          <div className="content label-bg-blue sub-head-style">
            <h2 className="ui sub header font-white font-weight-normal">
              <i className="list icon"></i> My Opened issues
            </h2>
            <i class="angle down icon down-arrow"></i>
          </div>
          <div className="content">
            <div className="ui small feed">
              <div className="ui celled list">
                <Link class="section" to="/response">
                  <div className="item">Client site is not accessible</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <Link to="/request">
          <div className="ui unstackable items pointer">
            <div className="item item-bg">
              <div className="image-icon">
                <img src={logo} alt="report image" />
              </div>
              <div className="content">
                <div className="header font-white font-weight-normal">
                  Search
                </div>
                <div className="description font-white">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment.
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="ui card">
          <div className="content label-bg-ash sub-head-style">
            <h2 className="ui sub header font-weight-normal">
              <i className="bullhorn icon"></i> Announcenents
            </h2>
          </div>
          <div className="ui celled list">
            <div className="item">An excellent companion</div>
          </div>
        </div>
        <div className="ui card">
          <div className="content label-bg-ash sub-head-style">
            <h2 className="ui sub header font-weight-normal">Articles</h2>
          </div>
          <div className="content">
            <div className="ui small feed">
              <p>The standard Lorem Ipsum passage, used since the 1500s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottomcontent;
