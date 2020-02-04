import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleUp = e => {
    e.preventDefault();
    let count = this.state.count + 1;
    this.updateCounter(count);
  };
  handleDown = e => {
    e.preventDefault();
    let count = this.state.count - 1;
    this.updateCounter(count);
  };

  updateCounter(count) {
    this.setState({ count});
  }
  render() {
    let classes = ['count', this.state];
    return (
        <section className="counter">
          <p onClick={this.handleDown}>
            -
          </p>
          <span className={classes}>{this.state.count}</span>
          <p onClick={this.handleUp}>
            +
          </p>
        </section>
    );
  }
}
export default Counter;
