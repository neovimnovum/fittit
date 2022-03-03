import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavComponent from '../components/NavComponent';
import LiftContainer from './LiftContainer';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => ({
  active: state.workout.active,
  browsing: state.workout.browsing,
  lifts: state.workout.lifts,
});
const mapDispatchToProps = (dispatch) => ({
  fetch: (actionCreator, opts, endpoint) => {
    dispatch(actions.fetchDataAndCreateAction(actionCreator, opts, endpoint));
  },
});

function MainContainer(props) {
  const {
    active,
    browsing,
    fetch,
    lifts,
  } = props;

  if (active) {
    return (
      <LiftContainer />
    );
  }
  if (browsing) {
    const recentWorkouts = [];
    lifts.forEach((workout) => {
      recentWorkouts.push(
        <NavComponent
          perform={fetch}
          action={actions.viewDetailsActionCreator}
          opts={{}}
          endpoint={`workouts/${workout._id}`}
          buttonType={`${workout.username} at ${workout.end_time}`}
          key={`workout${workout._id}`}
        />,
      );
    });
    return (
      recentWorkouts
    );
  }
  return (
    <>
      <NavComponent
        perform={fetch}
        action={actions.startWorkoutActionCreator}
        opts={{}}
        endpoint="workout"
        buttonType="Start Workout"
      />
      <NavComponent
        perform={fetch}
        action={actions.viewHistoryActionCreator}
        opts={{}}
        endpoint="workouts"
        buttonType="View Workout History"
      />
      <NavComponent
        perform={fetch}
        action={actions.startWorkoutActionCreator}
        opts={{}}
        endpoint="workout"
        buttonType="Log In"
      />
    </>
  );
}

MainContainer.defaultProps = {
  active: false,
  browsing: false,
  lifts: [],
};

MainContainer.propTypes = {
  active: PropTypes.bool,
  fetch: PropTypes.func.isRequired,
  browsing: PropTypes.bool,
  lifts: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
