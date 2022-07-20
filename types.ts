export interface Exercise {
  id: number,
  name: string,
}

export interface Set {
  id: number,
  exerciseId: number,
  workoutId: number,
  weight: number,
  reps: number,
}

export interface Workout {
  id: number,
  startTime: string,
  endTime: string,
  username: string,
}

// Not used in the data model, but on frontend and for returning from Server:

export interface SetRecord extends Pick<Set, 'weight' | 'reps'> {}

export interface Routine extends Pick<Exercise, 'id' | 'name'>, Pick<Set, 'weight' | 'reps'> {
  record: SetRecord[],
}

export interface Session extends Omit<Workout, 'id' | 'username'> {
  itinerary: Routine[],
}
