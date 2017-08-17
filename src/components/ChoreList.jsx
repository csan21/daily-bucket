import React, { Component, PropTypes } from 'react';
import Chore from './Chore';
import map from 'lodash/map';
import '../styles/index.css';

class ChoreList extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    const { user, chores } = this.props;
    return (
      <section className="ChoreList">
        {map(chores, (chores, key) => {
          return <Chore key={key} user={user} {...chores} />;
        })}
      </section>
    );
  }
}

ChoreList.propTypes = {
  user: PropTypes.object,
  choresRef: PropTypes.object,
  chores: PropTypes.object
};

export default ChoreList;
