import type { Routine } from '@shared/types';
import { useAppSelector } from '../hooks';

interface ExerciseProps {
  index: number
}
function Exercise({ index }: ExerciseProps) {
  const {
    id, name, weight, reps, sets, record,
  }: Routine = useAppSelector(
    (state) => {
      const routine = state.workout.itinerary[index];
      if (routine) {
        return routine;
      }
      return {
        id: -1, name: 'error', weight: -1, reps: -1, sets: -1, record: [{ weight: -1, reps: -1 }],
      };
    },
  );
  return (
    <form
      style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
      onSubmit={(e) => {
        e.preventDefault();
        // Thunk here
      }}
    >
      <h3>{name}</h3>
      <label htmlFor={`sets${id}`}>
        Sets:
        {' '}
        {record}
        /
        <input id={`sets${id}`} defaultValue={sets} type="number" />
      </label>
      <label htmlFor={`reps${id}`}>
        Reps:
        {' '}
        <input id={`reps${id}`} defaultValue={reps} type="number" />
      </label>
      <label htmlFor={`weight${id}`}>
        Weight:
        {' '}
        <input id={`weight${id}`} defaultValue={weight} type="number" />
      </label>
      <button type="submit">Log Set</button>
    </form>
  );
}

export default Exercise;
