import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import ScrollTo from './scrollTo';
import './styles.css';

class Scrollable extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      scrollPosition: 0
    });
  }

  changeHeight = height => {
    this.setState({ scrollPosition: height });
    console.log('height', height);
  };

  render() {
    return (
      <Motion
        defaultStyle={{ x: 0 }}
        style={{ x: spring(this.state.scrollPosition) }}
      >
        {styledItem => (
          <div
            className="scrollable__container"
            ref={container => {
              this.container = container;
            }}
          >
            <ScrollTo
              scrollPosition={styledItem.x}
              changeHeight={this.changeHeight}
              items={this.props.items}
            >
              {this.props.children}
            </ScrollTo>
          </div>
        )}
      </Motion>
    );
  }
}

export default Scrollable;
