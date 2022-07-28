import type {
  ExercisesState, ProgramsState, RoutinesState, RoutineSetsState,
} from '@shared/types';

export const demoExercisesState: ExercisesState = {
  ids: [0, 1, 4],
  entities: {
    0: {
      id: 0,
      name: 'Chin-Ups',
    },
    1: {
      id: 1,
      name: 'Sit-Ups',
    },
    4: {
      id: 4,
      name: 'Hammer Curls',
    },
  },
};

export const demoProgramsState: ProgramsState = {
  ids: [3, 4, 2],
  entities: {
    2: {
      id: 2,
      startTime: 'Wed, 14 Jun 2017 07:00:00 GMT',
      endTime: (new Date().toUTCString()),
    },
    4: {
      id: 4,
      startTime: 'Wed, 14 Jun 2017 07:00:00 GMT',
      endTime: (new Date().toUTCString()),
    },
    3: {
      id: 3,
      startTime: 'Wed, 14 Jun 2017 07:00:00 GMT',
      endTime: (new Date().toUTCString()),
    },
  },
};

export const demoRoutinesState: RoutinesState = {
  ids: [3, 2, 1],
  entities: {
    3: {
      id: 3,
      exerciseId: 0,
      programId: 2,
    },
    2: {
      id: 2,
      exerciseId: 4,
      programId: 2,
    },
    1: {
      id: 1,
      exerciseId: 0,
      programId: 4,
    },
  },
};

export const demoRoutineSetsState: RoutineSetsState = {
  ids: [4, 7, 9],
  entities: {
    4: {
      id: 4,
      routineId: 3,
      weight: 0,
      reps: 12,
    },
    7: {
      id: 7,
      routineId: 3,
      weight: 0,
      reps: 10,
    },
    9: {
      id: 9,
      routineId: 2,
      weight: 25,
      reps: 12,
    },
  },
};
