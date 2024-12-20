import AssignmentCard from "../components/AssignmentCard";

const Assignments = () => {
  return (
    <div className="assignments">
      <div className="container">
        <h1>Assignments</h1>
        <div className="assignment-block mt-4">
          <div className="row">
            <AssignmentCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Assignments;
