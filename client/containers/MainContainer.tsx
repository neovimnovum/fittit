import NavComponent from '../components/NavComponent';
import LiftContainer from './LiftContainer';
import { viewDetailsActionCreator, startWorkoutActionCreator, viewHistoryActionCreator } from '../actions/actions';
import { useAppSelector } from '../hooks';

function MainContainer() {
  const active = useAppSelector((state) => state.workout.active);
  const browsing = useAppSelector((state) => state.workout.browsing);
  const lifts = useAppSelector((state) => state.workout.lifts);

  if (active) {
    return (
      <LiftContainer />
    );
  }
  if (browsing) {
    const recentWorkouts: JSX.Element[] = [];
    lifts.forEach((workout) => {
      recentWorkouts.push(
        <NavComponent
          action={viewDetailsActionCreator}
          opts={{}}
          endpoint={`workouts/${workout._id}`}
          buttonType={`${workout.username}: ${(new Date(workout.end_time)).toString()}`}
          key={`workout${workout._id}`}
        />,
      );
    });
    return (
      <>
        recentWorkouts
      </>
    );
  }
  return (
    <>
      <NavComponent
        action={startWorkoutActionCreator}
        opts={{}}
        endpoint="workout"
        buttonType="Start Workout"
      />
      <NavComponent
        action={viewHistoryActionCreator}
        opts={{}}
        endpoint="workouts"
        buttonType="View Workout History"
      />
      <NavComponent
        action={startWorkoutActionCreator}
        opts={{}}
        endpoint="workout"
        buttonType="Log In"
      />
    </>
  );
}

export default MainContainer;
