import Routine from '../routines/Routine';
import NavComponent from '../../common/NavComponent';
import { useAppSelector } from '../../common/hooks';

export default function SessionContainer() {
  const itineraryIds: number[] = useAppSelector(
    (state) => state.programs.ids,
  );
  const data: JSX.Element[] = itineraryIds.map(
    (id: number, index: number) => <Routine id={id} index={index} key={id} />,
  );
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
