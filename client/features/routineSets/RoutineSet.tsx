import { useAppSelector } from '../../common/hooks';
import { routineSetsSelectors } from './routineSetsSlice';
// setIndex: number,
// exerciseIndex: number,

interface SetProps {
  id: number | string,
}

function Set({ id }: SetProps) {
  const routineSet = useAppSelector((state) => routineSetsSelectors.selectById(state, id));
  if (!routineSet) {
    return null;
  }
  return (
    <form
      style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
      onSubmit={(e) => {
        e.preventDefault();
      }}
      onReset={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor={`reps${id}`}>
        Reps:
        {' '}
        <input id={`reps${id}`} defaultValue={routineSet.reps} type="number" />
      </label>
      <label htmlFor={`weight${id}`}>
        Weight:
        {' '}
        <input id={`weight${id}`} defaultValue={routineSet.weight} type="number" />
      </label>
      <button type="submit">Update Set</button>
      <button type="button">Delete Set</button>
    </form>
  );
}

export default Set;
