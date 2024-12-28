import { useContext } from "react";
import { FormAppContext } from "../../store/form-context";
import { TiDelete } from "react-icons/ti";

const PreviewCard = ({ item }) => {
  const { deleteItem } = useContext(FormAppContext);
  return (
    <div className="col-lg-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {item.firstName} {item.lastName}
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{item.email}</li>
          <li className="list-group-item">{item.phone}</li>
          <li className="list-group-item">{item.designation}</li>
        </ul>
        <button className="delete-btn" onClick={() => deleteItem(item.id)}>
          <TiDelete />
        </button>
      </div>
    </div>
  );
};
export default PreviewCard;
