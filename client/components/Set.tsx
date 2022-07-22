// import { useAppDispatch } from '../hooks';
// setIndex: number,
// exerciseIndex: number,

interface SetProps {
  id: number,
  weight: number,
  reps: number,
}

function Set({
  id, weight, reps,
}: SetProps) {
  // const dispatch = useAppDispatch();
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
        <input id={`reps${id}`} defaultValue={reps} type="number" />
      </label>
      <label htmlFor={`weight${id}`}>
        Weight:
        {' '}
        <input id={`weight${id}`} defaultValue={weight} type="number" />
      </label>
      <button type="submit">Update Set</button>
      <button type="button">Delete Set</button>
    </form>
  );
}

export default Set;
