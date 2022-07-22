function Exercise(props) {
  const {
    name, record, sets, reps, weight, id, ind, logSet,
  } = props;
  return (
    <form
      style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
      onSubmit={(e) => {
        e.preventDefault();
        const lift = e.target;
        const snapshot = {};
        snapshot.index = ind;
        snapshot.sets = lift.querySelector(`#sets${id}`).valueAsNumber;
        snapshot.weight = lift.querySelector(`#weight${id}`).valueAsNumber;
        snapshot.reps = lift.querySelector(`#reps${id}`).valueAsNumber;
        return logSet(snapshot);
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
