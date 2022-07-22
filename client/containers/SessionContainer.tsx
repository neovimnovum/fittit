import { shallowEqual } from 'react-redux';
import Exercise from '../components/Exercise';
import NavComponent from '../components/NavComponent';
import { useAppSelector } from '../hooks';

import type { Routine } from '../../types';

export default function SessionContainer() {
  const itineraryIds: number[] = useAppSelector(
    (state) => state.workout.itinerary.map((routine: Routine) => routine.id),
    shallowEqual,
  );
  const data: JSX.Element[] = itineraryIds.map(
    (id: number, index: number) => <Exercise ind={index} key={id} />,
  );
  return (
    <>
      {data}
      <div className="finisher" key="uniquediv" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <NavComponent
          endpoint=""
          name="Finish and Log Workout"
        />
      </div>
    </>
  );
}
