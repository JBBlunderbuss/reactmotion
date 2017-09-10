import React, { Component } from 'react';

class ScrollTo extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.items !== this.props.items) {
      setTimeout(() => {
        this.props.changeHeight(
          this.scrollable.scrollHeight - this.scrollable.offsetHeight
        );
      }, 100);
    } else if (prevProps.scrollPosition !== this.props.scrollPosition) {
      this.scrollable.scrollTop = this.props.scrollPosition;
    }
  }

  render() {
    return (
      <div
        className="scrollable"
        ref={div => {
          this.scrollable = div;
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ScrollTo;
