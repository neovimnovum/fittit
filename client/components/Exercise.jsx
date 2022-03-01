import React from 'react';

function Exercise(props) {
  console.log(props);
  return (
    <>
      <div>Name: {props.name}</div>
      <div>Sets: {props.sets}</div>
      <div>Reps: {props.reps}</div>
      <div>Weight: {props.weight}</div>
      <div>Record: {props.record}</div>
    </>
  );
}

export default Exercise;
