// BuildPortfolio.js
import React from 'react';
import verifyIdentityImg from '../assets/portfolio-1.png';
import fundAccountImg   from '../assets/portfolio-2.png';
import startTradingImg  from '../assets/portfolio-3.png';

function BuildPortfolio() {
  return (
    <section className="build-portfolio container my-5">
      <header className="portfolio-header mb-5">
        <h1 className="portfolio-title">
          Build your own crypto portfolio
        </h1>
        <p className="portfolio-desc">
          Start your first trade with these easy steps.
        </p>
      </header>

      <div className="steps-container">
        {/* Step 1 */}
        <div className="step">
          <div className="step-left">
            <div className="step-number">1.</div>
            <div className="step-content">
              <h2>Verify your identity.</h2>
              <p>
                Complete the identity verification process to secure your
                account and transactions.
              </p>
            </div>
          </div>
          <div className="step-image">
            <img src={verifyIdentityImg} alt="Verify Identity" />
          </div>
        </div>

        {/* Step 2 */}
        <div className="step">
          <div className="step-left">
            <div className="step-number">2.</div>
            <div className="step-content">
              <h2>Fund your account.</h2>
              <p>
                Add funds to your crypto account to start trading crypto. You
                can add funds with a variety of payment methods.
              </p>
            </div>
          </div>
          <div className="step-image">
            <img src={fundAccountImg} alt="Fund Account" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="step">
          <div className="step-left">
            <div className="step-number">3.</div>
            <div className="step-content">
              <h2>Start trading</h2>
              <p>
                You’re good to go! Buy/sell crypto, set up your account and
                discover what BxLend has to offer.
              </p>
            </div>
          </div>
          <div className="step-image">
            <img src={startTradingImg} alt="Start Trading" />
          </div>
        </div>
      </div>

      <div className="hero-buttons mt-4 d-flex flex-wrap justify-content-center justify-content-lg-start">
        <button className="btn btn-primary join button">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default BuildPortfolio;
