// Help.js
import React from 'react';
function Help() {
  return (
    <section className="help-section container">
      <h2 className="help-title">Need Help?</h2>

      <div className="help-icons d-flex justify-content-center flex-wrap">
        <div className="help-item">
          <div className="help-circle">
            <img
              src="https://cdn-icons-png.flaticon.com/512/726/726623.png"
              alt="Chat support"
              className="help-img"
            />
          </div>
          <h3 className="help-item-title">Chat support</h3>
          <p className="help-item-text">Get instant help</p>
        </div>

        <div className="help-item">
          <div className="help-circle">
            <img
              src="https://cdn-icons-png.flaticon.com/512/545/545674.png"
              alt="FAQ"
              className="help-img"
            />
          </div>
          <h3 className="help-item-title">FAQ</h3>
          <p className="help-item-text">Find quick answers</p>
        </div>

        <div className="help-item">
          <div className="help-circle">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
              alt="Blog"
              className="help-img"
            />
          </div>
          <h3 className="help-item-title">Blog</h3>
          <p className="help-item-text">Explore our insights</p>
        </div>
      </div>

      <h2 className="earn-title">Start earning today</h2>
      <div className="cta-wrapper hero-buttons mt-4 d-flex flex-wrap justify-content-center justify-content-lg-start">
        <button className="btn btn-primary join-button">Join us now</button>
      </div>
    </section>
  );
}

export default Help;
