import { FaRegCircleUser } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="px-3 py-2 navbar-sercion">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/react-assignment/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <span className="brand-name">React Assignment</span>
            </Link>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link to="/react-assignment/" className="nav-link text-white">
                  <i className="navbar-icon">
                    <IoHomeOutline />
                  </i>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/react-assignment/assignments"
                  className="nav-link text-white"
                >
                  <i className="navbar-icon">
                    <MdOutlineAssignmentInd />
                  </i>
                  Assignments
                </Link>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  <i className="navbar-icon">
                    <GrProjects />
                  </i>
                  Products
                </a>
              </li>

              <li>
                <a href="#" className="nav-link text-white">
                  <i className="navbar-icon">
                    <FaRegCircleUser />
                  </i>
                  Customers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
