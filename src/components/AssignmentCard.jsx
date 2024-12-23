import { Link } from "react-router-dom";

const AssignmentCard = ({ item }) => {
  return (
    <div className="col-lg-3 col-12">
      <div className="card assignment-card">
        <div className="card-img">
          <img src={item.img} className="card-img-top" alt="..." />
        </div>

        <div className="card-body">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.text}</p>
          <Link to={item.url} className="btn btn-primary">
            Go To Assignment
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AssignmentCard;
