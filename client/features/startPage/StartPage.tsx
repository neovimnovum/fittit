import NavComponent from '../../common/NavComponent';

export default function StartPage() {
  return (
    <>
      <NavComponent
        endpoint="workout"
        name="Start Workout"
      />
      <NavComponent
        endpoint="history"
        name="View Workout History"
      />
      <NavComponent
        endpoint="login"
        name="Log In"
      />
    </>
  );
}
