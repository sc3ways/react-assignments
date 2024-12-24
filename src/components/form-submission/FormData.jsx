const FormData = ({
  onChangeHandler,
  formSubmitHandler,
  formResetHandler,
  message,
  formData,
}) => {
  return (
    <div className="col-lg-6 col-12">
      <div className="form-card">
        <h3>Enquiry Froms</h3>

        <form>
          {message && <p style={{ color: "red" }}>{message}</p>}

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              value={formData.firstName}
              name="firstName"
              id="firstName"
              placeholder="Enter First Name"
              onChange={onChangeHandler}
            />
            <label htmlFor="firstName">Enter First Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              placeholder="Enter Last Name"
              onChange={onChangeHandler}
            />
            <label htmlFor="lastName">Enter Last Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="emailAddress"
              name="email"
              value={formData.email}
              placeholder="name@example.com"
              onChange={onChangeHandler}
            />
            <label htmlFor="emailAddress">Enter Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="contactNumber"
              name="phone"
              value={formData.phone}
              placeholder="name@example.com"
              onChange={onChangeHandler}
            />
            <label htmlFor="contactNumber">Enter Mobile Number</label>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="gender">Gender</label>
            <div className="row">
              <div className="col-lg-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={formData.gender}
                    onChange={onChangeHandler}
                    id="male"
                    checked
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name={formData.gender}
                    id="female"
                    onChange={onChangeHandler}
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group mb-3">
            <select
              className="form-select form-select-lg mb-3"
              name="designation"
              value={formData.designation}
              onChange={onChangeHandler}
            >
              {[
                "Select your Answer",
                "Professional",
                "Manager",
                "Excutive",
                "Other",
              ].map((opt, idx) => (
                <option key={idx + 1} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <button
              type="button"
              onClick={formResetHandler}
              className="btn btn-primary m-3"
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={formSubmitHandler}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormData;
