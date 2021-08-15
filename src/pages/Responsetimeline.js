import React from "react";
import reportIcon from "../document.png";

const ResponseTimeline = () => {
  return (
    <div className="ui container bottom-padding">
      <div className="ui celled grid">
        <div className="sixteen wide column">
          <p>Status of the ticket IN4020494 is</p>
        </div>
        <div className="row">
          <div className="nine wide column"></div>
          <div className="seven wide column ">
            <div className="row">
              <div className="ui grid">
                <div className="six wide column time">Time Line</div>

                <div className="ten wide column">
                  <a className="ui label">Add Entry</a>
                  <a className="ui label">
                    <i className="sort amount down icon"></i>
                    Filter
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="tm-container">
                <ul className="tm-sessions">
                  <li>
                    <div className="time">09:00 AM</div>
                    <p>It is a long established fact that a reader?</p>
                  </li>
                  <li>
                    <div className="time">09:05 AM</div>
                    <p>It is a long established fact that a reader</p>
                  </li>
                  <li>
                    <div className="time">09:30 AM</div>
                    <p>It is a long </p>
                  </li>
                  <li>
                    <div className="time">1:00 PM</div>
                    <p>It is a long established.</p>
                  </li>
                  <li>
                    <div className="time">01:30 PM</div>
                    <p>It is a long established fact that a reader.</p>
                  </li>
                  <li>
                    <div className="time">3:30 PM</div>
                    <p>It is a long established fact that a reader</p>
                  </li>
                  <li>
                    <div className="time">4:30 PM </div>
                    <p>It is a long established fact that a reader a reader.</p>
                  </li>
                  <li>
                    <div className="time">07:00 PM </div>
                    <p>It is a long established fact that a reader a reader.</p>
                  </li>
                  <li>
                    <div className="time">07:30 PM </div>
                    <p>It is a long established fact</p>
                  </li>
                  <li>
                    <div className="time">10:00 PM </div>
                    <p>It is a long established</p>
                  </li>
                  <li>
                    <div className="time">2:30 PM </div>
                    <p>
                      It is a long established fact that a reader a reader
                      finally arrived.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="sixteen wide column">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponseTimeline;
