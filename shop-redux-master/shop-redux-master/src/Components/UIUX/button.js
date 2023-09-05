import React, { Component } from "react";
import "./CarAnimation.css"; // Replace with the actual path to your CSS file

class OrderButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnimating: false,
    };
  }

  handleButtonClick = () => {
    if (!this.state.isAnimating) {
      this.setState({ isAnimating: true }, () => {
        setTimeout(() => {
          this.setState({ isAnimating: false });
        }, 10000);
      });
    }
  };

  render() {
    const { isAnimating } = this.state;

    return (
      <div className="order-container">
        <button
          className={`order ${isAnimating ? "animate" : ""}`}
          onClick={this.handleButtonClick}
        >
          <span className="default">Complete Order</span>
          <span className="success">
            Order Placed
            <svg viewBox="0 0 12 10">
              <polyline points="1.5 6 4.5 9 10.5 1" />
            </svg>
          </span>
        </button>
        <div className="box"></div>
        <div className="truck">
          <div className="back"></div>
          <div className="front">
            <div className="window"></div>
          </div>
          <div className="light top"></div>
          <div className="light bottom"></div>
        </div>
        <div className="lines"></div>
        <a
          className="dribbble"
          href="https://dribbble.com/shots/7112021-Order-confirm-animation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg"
            alt="Dribbble"
          />
        </a>
      </div>
    );
  }
}

export default OrderButton;
