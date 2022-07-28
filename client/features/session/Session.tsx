import { shallowEqual } from 'react-redux';
import Routine from '../routines/Routine';
import NavComponent from '../../common/NavComponent';
import { useAppSelector } from '../../common/hooks';

interface SessionProps {
  programId: number,
}

export default function Session({ programId }: SessionProps) {
  const routineIds = useAppSelector((state) => {
    const { ids } = state.routines;
    return ids.filter((id) => state.routines.entities[id]?.programId === programId);
  }, shallowEqual);
  const data: JSX.Element[] = routineIds.map((id) => <Routine id={id} key={id} />);
  return (
    <>
      {data}
      <div className="finisher" key="uniquediv" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <NavComponent
          endpoint=""
          name="Finish and Log Workout"
        />
      </div>
    </>
  );
}
