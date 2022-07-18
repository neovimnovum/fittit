import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';

function Set(props) {
  const {
    ind, name, reps, weight, id, perform,
  } = props;
  return (
    <form
      style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}
      onSubmit={(e) => {
        e.preventDefault();
        const lift = e.target;
        const snapshot = {};
        snapshot.weight = lift.querySelector(`#weight${id}`).valueAsNumber;
        snapshot.reps = lift.querySelector(`#reps${id}`).valueAsNumber;
        snapshot.index = ind;
        console.log(snapshot);
        perform(actions.updateSetActionCreator, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(snapshot),
        }, `sets/${id}`);
      }}
      onReset={(e) => {
        e.preventDefault();
        perform(actions.removeExerciseActionCreator, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ index: ind }),
        }, `sets/${id}`);
      }}
    >
      <h3>{name}</h3>
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
      <button type="reset">Delete Set</button>
    </form>
  );
}

Set.propTypes = {
  name: PropTypes.string,
  sets: PropTypes.number,
  weight: PropTypes.number,
  id: PropTypes.number,
};

export default Set;
