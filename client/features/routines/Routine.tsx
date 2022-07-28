import { useState } from 'react';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../../common/hooks';
import { routinesSelectors } from './routinesSlice';
import { exercisesSelectors } from '../exercises/exercisesSlice';
import { routineSetsSelectors } from '../routineSets/routineSetsSlice';

interface RoutineProps {
  id: number | string,
}

function Routine({ id }: RoutineProps) {
  const name: string = useAppSelector((state) => {
    let nomen;
    const routine = routinesSelectors.selectById(state, id);
    if (routine) {
      nomen = exercisesSelectors.selectById(state, routine.exerciseId)?.name;
    }
    if (nomen) {
      return nomen;
    }
    return '';
  });

  const routineSets = useAppSelector(
    (state) => routineSetsSelectors.selectAll(state).filter(
      (routineSet) => routineSet.routineId === id,
    ),
    shallowEqual,
  );

  // const dispatch = useAppDispatch();

  // TODO - figure out logic for workout intensity
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  return (
    <form
      style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
      onSubmit={(e) => {
        e.preventDefault();
        // dispatch(logSet({ index, reps, weight }));
      }}
    >
      <h3>{name}</h3>
      <label htmlFor={`sets${id}`}>
        Sets:
        {routineSets.length}
        {' '}
        /
        <input id={`sets${id}`} value={sets} onChange={(e) => setSets(e.target.valueAsNumber)} type="number" />
      </label>
      <label htmlFor={`reps${id}`}>
        Reps:
        {' '}
        <input id={`reps${id}`} value={reps} onChange={(e) => setReps(e.target.valueAsNumber)} type="number" />
      </label>
      <label htmlFor={`weight${id}`}>
        Weight:
        {' '}
        <input id={`weight${id}`} value={weight} onChange={(e) => setWeight(e.target.valueAsNumber)} type="number" />
      </label>
      <button type="submit">Log Set</button>
    </form>
  );
}

export default Routine;
