function CountryListsShimmer() {
  return (
    <>
      <div className="country-shimmer-list row pt-4">
        {Array.from({ length: 12 }).map((el, index) => {
          return (
            <div key={index + 1} className="col-lg-3 py-3">
              <div className="country-card card shimmer-card">
                <div className="card-img"></div>
                <div className="card-body">
                  <h3></h3>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default CountryListsShimmer;
