import AssignmentCard from "../components/AssignmentCard";
import assignments from "../data/assignmentList.json";

const Assignments = () => {
  return (
    <div className="assignments py-4">
      <div className="container">
        <h1>Assignments</h1>
        <div className="assignment-block mt-4">
          <div className="row">
            {assignments.map((card) => (
              <AssignmentCard key={card.id} item={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Assignments;
