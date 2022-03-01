import React from 'react';
import { connect } from 'react-redux';
import Exercise from '../components/Exercise';

const mapStateToProps = (state) => ({
  agenda: state.workout.lifts,
});

class LiftContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const schedule = [];
    this.props.agenda.forEach((exercise) => {
      schedule.push(
        <Exercise
          name={exercise.name}
          sets={exercise.sets}
          reps={exercise.reps}
          weight={exercise.weight}
        />,
      );
    });
    return (
      <>
        { schedule }
        <div>Rendered LiftContainer</div>
      </>
    );
  }
}

export default connect(mapStateToProps, null)(LiftContainer);
