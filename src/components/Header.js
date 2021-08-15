import React from "react";

const Header = () => {
  return (
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
  );
};

export default Header;
