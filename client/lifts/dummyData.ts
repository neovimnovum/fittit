import type { Session, Routine } from '../../types';

const chinups: Routine = {
  id: 1,
  name: 'Chin-Ups',
  sets: 4,
  reps: 11,
  weight: 0,
  record: [{ weight: 0, reps: 11 }, { weight: 0, reps: 10 }],
};

const situps: Routine = {
  id: 2,
  name: 'Sit-ups',
  sets: 4,
  reps: 18,
  weight: 0,
  record: [{ weight: 0, reps: 18 }, { weight: 0, reps: 20 }],
};

const hammerCurls: Routine = {
  id: 3,
  name: 'Hammer Curls',
  sets: 4,
  reps: 12,
  weight: 45,
  record: [{ weight: 50, reps: 10 }, { weight: 45, reps: 12 }],
};

const dummySession: Session = {
  startTime: '2022-07-21T19:23:17Z',
  endTime: '2022-07-21T22:31:34Z',
  username: 'admin',
  itinerary: [chinups, situps, hammerCurls],
};

export default dummySession;
