import React from "react";
import { Link } from "react-router-dom";

const ResponseTimeline = () => {
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
      <div class="ui breadcrumb pl-4">
        <Link class="section" to="/">
          Home
        </Link>
      </div>
      <div className="ui container bottom-padding">
        <div className="ui celled grid">
          <div className="sixteen wide column">
            <p>Status of the ticket IN4020494 is</p>
          </div>
          <div className="row">
            <div className="nine wide column">
              <div class="ui comments">
                <h3 class="ui dividing header">Comments</h3>
                <div class="comment">
                  <a class="avatar">
                    <img src="matt.jpg" />
                  </a>
                  <div class="content">
                    <a class="author">Matt</a>
                    <div class="metadata">
                      <span class="date">Today at 5:42PM</span>
                    </div>
                    <div class="text">How artistic!</div>
                    <div class="actions">
                      <a class="reply">Reply</a>
                    </div>
                  </div>
                </div>
                <div class="comment">
                  <a class="avatar">
                    <img src="elliot.jpg" />
                  </a>
                  <div class="content">
                    <a class="author">Elliot Fu</a>
                    <div class="metadata">
                      <span class="date">Yesterday at 12:30AM</span>
                    </div>
                    <div class="text">
                      <p>
                        This has been very useful for my research. Thanks as
                        well!
                      </p>
                    </div>
                    <div class="actions">
                      <a class="reply">Reply</a>
                    </div>
                  </div>
                  <div class="comments">
                    <div class="comment">
                      <a class="avatar">
                        <img src="jenny.jpg" />
                      </a>
                      <div class="content">
                        <a class="author">Jenny Hess</a>
                        <div class="metadata">
                          <span class="date">Just now</span>
                        </div>
                        <div class="text">
                          Elliot you are always so right :)
                        </div>
                        <div class="actions">
                          <a class="reply">Reply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="comment">
                  <a class="avatar">
                    <img src="joe.jpg" />
                  </a>
                  <div class="content">
                    <a class="author">Joe Henderson</a>
                    <div class="metadata">
                      <span class="date">5 days ago</span>
                    </div>
                    <div class="text">
                      Dude, this is awesome. Thanks so much
                    </div>
                    <div class="actions">
                      <a class="reply">Reply</a>
                    </div>
                  </div>
                </div>
                <form class="ui reply form">
                  <div class="field">
                    <textarea></textarea>
                  </div>
                  <div class="ui blue labeled submit icon button">
                    <i class="icon edit"></i> Add Reply
                  </div>
                </form>
              </div>
            </div>
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
                      <p>
                        It is a long established fact that a reader a reader.
                      </p>
                    </li>
                    <li>
                      <div className="time">07:00 PM </div>
                      <p>
                        It is a long established fact that a reader a reader.
                      </p>
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
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponseTimeline;
