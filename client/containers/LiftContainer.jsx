import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Exercise from '../components/Exercise';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => ({
  startTime: state.workout.startTime,
  agenda: state.workout.lifts,
});

const mapDispatchToProps = (dispatch) => ({
  logSet: (record) => dispatch(actions.logSetActionCreator(record)),
});

function LiftContainer(props) {
  const {
    startTime,
    agenda,
    logSet,
  } = props;
  const schedule = [];
  agenda.forEach((exercise, index) => {
    schedule.push(
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
  return (
    <>
      {schedule}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button type="submit">Finish and Log Workout</button>
      </div>
    </>
  );
}

LiftContainer.propTypes = {
  startTime: PropTypes.instanceOf(Date).isRequired,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(LiftContainer);
