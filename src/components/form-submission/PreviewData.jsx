import { useContext } from "react";
import { FormAppContext } from "../../store/form-context";
import PreviewCard from "./PreviewCard";

const PreviewData = () => {
  const { formItems } = useContext(FormAppContext);
  return (
    <div className="col-lg-6 col-12">
      <div className="form-data-preview">
        <div className="row">
          {formItems.length === 0 && (
            <p>There is no list. Please fill the form</p>
          )}
          {formItems.map((item, idx) => (
            <PreviewCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PreviewData;
