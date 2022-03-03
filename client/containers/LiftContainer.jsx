import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Exercise from '../components/Exercise';
import NavComponent from '../components/NavComponent';
import * as actions from '../actions/actions';
import Set from '../components/Set';

const mapStateToProps = (state) => ({
  startTime: state.workout.startTime,
  agenda: state.workout.lifts,
  browsing: state.workout.browsing,
});

const mapDispatchToProps = (dispatch) => ({
  logSet: (record) => dispatch(actions.logSetActionCreator(record)),
  fetch: (actionCreator, opts, endpoint) => {
    dispatch(actions.fetchDataAndCreateAction(actionCreator, opts, endpoint));
  },
});

function LiftContainer(props) {
  const {
    startTime,
    agenda,
    logSet,
    fetch,
    browsing,
  } = props;
  const data = [];
  if (!browsing) {
    agenda.forEach((exercise, index) => {
      console.log(exercise)
      data.push(
        <Exercise
          key={`Ex${exercise.id}`}
          ind={index}
          id={exercise.id}
          name={exercise.name}
          sets={exercise.sets}
          reps={exercise.reps}
          weight={exercise.weight}
          record={exercise.record.length}
          logSet={logSet}
        />,
      );
    });
    data.push(
      <div key="uniquediv" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <NavComponent
          perform={fetch}
          action={actions.endWorkoutActionCreator}
          opts={{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ startTime, agenda }),
          }}
          endpoint="workout"
          buttonType="Finish and Log Workout"
        />
      </div>,
    );
  } else {
    agenda.forEach((set, index) => {
      data.push(
        <Set
          key={`Set${set._id}`}
          id={set._id}
          ind={index}
          name={set.name}
          reps={set.reps}
          weight={set.weight}
          perform={fetch}
        />,
      );
    });
    data.push(
      <NavComponent
        key="uniquedeleter"
        perform={fetch}
        action={actions.endWorkoutActionCreator}
        opts={{
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }}
        endpoint={`workouts/${agenda[0].workout_id}`}
        buttonType="Delete Workout"
      />,
    );
  }
  return (
    data
  );
}

LiftContainer.propTypes = {
  startTime: PropTypes.string,
  agenda: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    sets: PropTypes.number,
    reps: PropTypes.number,
    weight: PropTypes.number,
    record: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      sets: PropTypes.number,
      reps: PropTypes.number,
      weight: PropTypes.number,
    })),
  })).isRequired,
  logSet: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  browsing: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LiftContainer);
