// For array access of Redux store
type Indices<L extends number, T extends number[] = []> =
  T['length'] extends L ? T[number] : Indices<L, [T['length'], ...T]>;

type ItineraryLengthAtLeast<T extends readonly Routine[], L extends number> =
  Pick<Required<T>, Indices<L>>;

type RecordLengthAtLeast<T extends readonly SetRecord[], L extends number> =
  Pick<Required<T>, Indices<L>>;

export function itineraryHasLengthAtLeast<T extends readonly Routine[], L extends number>(array: T, length: L):
array is T & ItineraryLengthAtLeast<T, L> {
  return array.length >= length;
}

export function recordHasLengthAtLeast<T extends readonly SetRecord[], L extends number>(array: T, length: L):
array is T & RecordLengthAtLeast<T, L> {
  return array.length >= length;
}

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
