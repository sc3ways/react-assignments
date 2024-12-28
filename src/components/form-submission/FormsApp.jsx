import FormAppContextProvider from "../../store/form-context";
import FormData from "./FormData";
import PreviewData from "./PreviewData";

const FormsApp = () => {
  return (
    <>
      <div className="forms-section">
        <div className="container">
          <div className="row justify-content-between">
            <FormAppContextProvider>
              <FormData />
              <PreviewData />
            </FormAppContextProvider>
          </div>
        </div>
      </div>
    </>
  );
};
export default FormsApp;
