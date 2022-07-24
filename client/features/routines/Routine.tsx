import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../common/hooks';

interface ExerciseProps {
  id: number,
  index: number
}

function Routine({ index, id }: ExerciseProps) {
  const routine: Routine = useAppSelector(
    (state) => {
      const item = state.workout.itinerary[index];
      if (item) {
        return item;
      }
      return {
        id: -1, name: 'error', weight: -1, reps: -1, sets: -1, record: [{ weight: -1, reps: -1 }],
      };
    },
  );

  const dispatch = useAppDispatch();

  const [sets, setSets] = useState(routine.sets);
  const [reps, setReps] = useState(routine.reps);
  const [weight, setWeight] = useState(routine.weight);

  const setList: JSX.Element[] = [];

  return (
    <form
      style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(logSet({ index, reps, weight }));
      }}
    >
      <h3>{routine.name}</h3>
      <label htmlFor={`sets${routine.id}`}>
        Sets:
        {routine.record.length}
        {' '}
        /
        <input id={`sets${routine.id}`} value={sets} onChange={(e) => setSets(e.target.valueAsNumber)} type="number" />
      </label>
      <label htmlFor={`reps${routine.id}`}>
        Reps:
        {' '}
        <input id={`reps${routine.id}`} value={reps} onChange={(e) => setReps(e.target.valueAsNumber)} type="number" />
      </label>
      <label htmlFor={`weight${routine.id}`}>
        Weight:
        {' '}
        <input id={`weight${routine.id}`} value={weight} onChange={(e) => setWeight(e.target.valueAsNumber)} type="number" />
      </label>
      <button type="submit">Log Set</button>
    </form>
  );
}

export default Exercise;
