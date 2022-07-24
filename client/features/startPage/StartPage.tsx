import NavComponent from '../../common/NavComponent';

function MainContainer() {
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

export default MainContainer;
