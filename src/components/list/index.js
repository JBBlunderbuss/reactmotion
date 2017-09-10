import React, { Component } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import './style.css';

class List extends Component {
  getStyledItems = prevStyledItems => {
    const config = {
      damping: 34,
      precision: 0.01,
      stiffness: 88
    };
    let newArray = [];

    newArray = this.props.items.map((item, index) => {
      if (prevStyledItems[index]) {
        const prevStyleItem = prevStyledItems[index];
        if (index === 0) {
          return {
            key: prevStyleItem.key,
            data: prevStyleItem.data,
            style: {
              translateY: spring(0, config),
              opacity: spring(1, config)
            }
          };
        } else {
          return {
            key: prevStyleItem.key,
            data: prevStyleItem.data,
            style: {
              translateY: spring(
                prevStyledItems[index - 1].style.translateY,
                config
              ),
              opacity: spring(prevStyledItems[index - 1].style.opacity, config)
            }
          };
        }
      } else {
        return {
          key: '' + index,
          data: item,
          style: {
            translateY: spring(0, config),
            opacity: spring(0, config)
          }
        };
      }
    });
    return newArray;
  };

  getDefaultStyledItems = () => {
    const newArray = this.props.items.map((peep, index) => {
      return {
        key: '' + index,
        data: peep,
        style: { translateY: 100, opacity: 0 }
      };
    });
    return newArray;
  };

  // ANIMATION LIFE CYCLE EVENTS
  willEnter(item) {
    return { translateY: 100, opacity: 0 };
  }
  willLeave(item) {
    return { translateY: spring(100), opacity: spring(0) };
  }

  render() {
    const { items } = this.props;
    return (
      <div className="list__container">
        {items && (
          <TransitionMotion
            defaultStyles={this.getDefaultStyledItems()}
            styles={this.getStyledItems}
            willEnter={this.willEnter}
            willLeave={this.willLeave}
          >
            {styledItems => (
              <ul>
                {styledItems.map((item, index) => {
                  return (
                    <li
                      key={index}
                      style={{
                        opacity: item.style.opacity,
                        transform: `translateY(${item.style.translateY}px)`
                      }}
                    >
                      {item.data.name}
                    </li>
                  );
                })}
              </ul>
            )}
          </TransitionMotion>
        )}
      </div>
    );
  }
}

export default List;
