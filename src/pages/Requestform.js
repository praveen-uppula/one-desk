import React from "react";
import reportIcon from "../document.png";
import { Link } from "react-router-dom";

const Requestform = () => {
  return (
    <>
      <div className="ui segment very padded custom-bg">
        <div className="ui main container">
          <div className="ui two column doubling stackable grid">
            <div className="column">
              <h1 className="ui font-blue"> How can we help you Praveen ? </h1>
              <div className="ui fluid icon input">
                <input type="text" placeholder="How can we help ?" />
                <i className="search icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ui breadcrumb padded pl-4">
        <Link class="section" to="/">
          Home
        </Link>
      </div>
      <div className="ui container">
        <div className="ui celled grid">
          <div className="sixteen wide column">
            <p>
              If an IT services is broken or not working, submit your issue here
            </p>
          </div>
          <div className="row">
            <div className="sixteen wide column">
              <div className="ui relaxed grid">
                <div className="two wide column"></div>
                <div className="four wide column">
                  <div className="report-icon">
                    <img src={reportIcon} alt="report" />
                  </div>
                </div>
                <div className="ten wide column">
                  <div className="ui ignored info message">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="sixteen wide column">
              <p>*Request for</p>
              <div className="ui fluid left icon input">
                <input type="text" placeholder="Full Name" />
                <i className="info circle icon"></i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="sixteen wide column">
              <p>
                *It is a long established fact that a reader will be distracted
                by the readable content of a page when looking.{" "}
                <i className="question circle icon"></i>{" "}
              </p>
              <div className="ui message">
                <i className="close icon"></i>
                <div className="header">Welcome back!</div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking.
                </p>
              </div>
              <div className="ui fluid left icon input">
                <input type="text" placeholder="Full Name" />
                <i className="info circle icon"></i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="sixteen wide column">
              <form className="ui form attached fluid">
                <div className="two fields">
                  <div className="field">
                    <label>First Name</label>
                    <input placeholder="First Name" type="text" />
                  </div>
                  <div className="field">
                    <label>Last Name</label>
                    <input placeholder="Last Name" type="text" />
                  </div>
                </div>
                <div className="inline field">
                  <div className="ui checkbox">
                    <input type="checkbox" id="terms" />
                    <label for="terms">
                      I agree to the terms and conditions
                    </label>
                  </div>
                </div>
                <Link to="/response">
                  <div className="ui blue submit button">Submit</div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Requestform;
