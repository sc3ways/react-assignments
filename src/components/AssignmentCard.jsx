import { Link } from "react-router-dom";

const AssignmentCard = () => {
  return (
    <div className="col-lg-3 col-12">
      <div className="card assignment-card">
        <div className="card-img">
          <img src="images/calculator.png" className="card-img-top" alt="..." />
        </div>

        <div className="card-body">
          <h3 className="card-title">Calculator</h3>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="/react-assignment/calculator" className="btn btn-primary">
            Go To Assignment
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AssignmentCard;
