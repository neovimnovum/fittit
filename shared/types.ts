// Data model
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
export interface SetRecord {
  weight: number,
  reps: number,
}

export interface Routine extends Pick<Exercise, 'id' | 'name'>, SetRecord {
  sets: number,
  record: SetRecord[],
}

export interface Session extends Omit<Workout, 'id'> {
  itinerary: Routine[],
}
