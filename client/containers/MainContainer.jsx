import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavComponent from '../components/NavComponent';
import LiftContainer from './LiftContainer';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => ({
  active: state.workout.active,
});
const mapDispatchToProps = (dispatch) => ({
  startWorkout: () => dispatch(actions.startWorkoutActionCreator()),
});

function MainContainer(props) {
  const {
    active,
    startWorkout,
  } = props;

  if (active) {
    return (
      <LiftContainer />
    );
  }
  return (
    <>
      <NavComponent perform={startWorkout} buttonType="Start Workout" />
      <NavComponent perform={'dummy'} buttonType="Workout Log" />
      <NavComponent perform={'dummy'} buttonType="Log In" />
    </>
  );
}

MainContainer.defaultProps = {
  active: false,
};

MainContainer.propTypes = {
  active: PropTypes.bool,
  startWorkout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
