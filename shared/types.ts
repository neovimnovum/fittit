// Data model
export interface Exercise {
  id: number,
  name: string,
}

export interface Program {
  id: number,
  startTime: string,
  endTime: string,
}

export interface Routine {
  id: number,
  exerciseId: number,
  programId: number
}

export interface RoutineSet {
  id: number,
  routineId: number,
  weight: number,
  reps: number,
}

// Not used in the data model, but on frontend and for returning from Server:
type ExerciseMap = Record<number, Exercise>;

export interface ExercisesState {
  ids: number[],
  entities: ExerciseMap
}

type ProgramMap = Record<number, Program>;

export interface ProgramsState {
  ids: number[],
  entities: ProgramMap,
}

type RoutineMap = Record<number, Routine>;

export interface RoutinesState {
  ids: number[],
  entities: RoutineMap
}

type RoutineSetMap = Record<number, RoutineSet>;

export interface RoutineSetsState {
  ids: number[],
  entities: RoutineSetMap
}
