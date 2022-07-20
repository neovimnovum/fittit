import { connect, ConnectedProps } from 'react-redux';
import Exercise from '../components/Exercise';
import NavComponent from '../components/NavComponent';
import * as actions from '../actions/actions';

import type { RootState, AppDispatch } from '../store';
import type { Session } from '../../types';

const mapStateToProps = (state: RootState) => ({
  startTime: state.workout.startTime,
  endTime: state.workout.endTime,
  agenda: state.workout.itinerary,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  logSet: (index: number) => dispatch(actions.logSetActionCreator(index)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type SessionProps = PropsFromRedux & Session;

function SessionContainer({ itinerary }: SessionProps) {
  const data: JSX.Element[] = [];
  itinerary.forEach((exercise, index) => {
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
      />,
    );
  });
  data.push(
    <div className="finisher" key="uniquediv" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <NavComponent
        endpoint=""
        name="Finish and Log Workout"
      />
    </div>,
  );
  return (
    <>
      data
    </>
  );
}

export default connector(SessionContainer);
