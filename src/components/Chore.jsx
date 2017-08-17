import React, { Component, PropTypes } from 'react';
import '../styles/index.css';

class Chore extends Component {
  // eslint-disable-next-line
  render() {
    const { name } = this.props;
    return (
      <article className="Chore">
        <h3>
          {name}
        </h3>
      </article>
    );
  }
}

Chore.propTypes = {
  name: PropTypes.string,
  user: PropTypes.object
};

export default Chore;
