import React from "react";
import {
  Avatar_02,
  Avatar_05,
  Avatar_09,
  Avatar_10,
  Avatar_16,
} from "src/Entryfile/imagepath";
import UserEducation from "./education";
import UserExperience from "./experience";
import "./styles.css";

const UserTab = ({ userData, ...props }) => {
  return (
    <>
      <div className="card tab-box">
        <div className="row user-tabs">
          <div className="col-lg-12 col-md-12 col-sm-12 line-tabs">
            <ul className="nav nav-tabs nav-tabs-bottom">
              <li className="nav-item">
                <a
                  href="#emp_profile"
                  data-toggle="tab"
                  className="nav-link active"
                >
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a href="#emp_projects" data-toggle="tab" className="nav-link">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tab-content">
        {/* Profile Info Tab */}
        <div
          id="emp_profile"
          className="pro-overview tab-pane fade show active"
        >
          <div className="row">
            <div className="col-md-6 d-flex">
              <div className="card profile-box flex-fill">
                <div className="card-body">
                  <h3 className="card-title">Bank information</h3>
                  <ul className="personal-info">
                    <li>
                      <div className="title">Bank name</div>
                      <div className="text">ICICI Bank</div>
                    </li>
                    <li>
                      <div className="title">Bank account No.</div>
                      <div className="text">159843014641</div>
                    </li>
                    <li>
                      <div className="title">IFSC Code</div>
                      <div className="text">ICI24504</div>
                    </li>
                    <li>
                      <div className="title">PAN No</div>
                      <div className="text">TC000Y56</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="card profile-box flex-fill">
                <div className="card-body">
                  <h3 className="card-title">
                    Family Informations{" "}
                    <a
                      href="#"
                      className="edit-icon"
                      data-toggle="modal"
                      data-target="#family_info_modal"
                    >
                      <i className="fa fa-pencil" />
                    </a>
                  </h3>
                  <div className="table-responsive">
                    <table className="table table-nowrap">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Relationship</th>
                          <th>Date of Birth</th>
                          <th>Phone</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Leo</td>
                          <td>Brother</td>
                          <td>Feb 16th, 2019</td>
                          <td>9876543210</td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                aria-expanded="false"
                                data-toggle="dropdown"
                                className="action-icon dropdown-toggle"
                                href="#"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a href="#" className="dropdown-item">
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a href="#" className="dropdown-item">
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <UserEducation userData={userData} />
            <UserExperience userData={userData} />
          </div>
        </div>
        {/* /Profile Info Tab */}
        {/* Projects Tab */}
        <div className="tab-pane fade" id="emp_projects">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="dropdown profile-action">
                    <a
                      aria-expanded="false"
                      data-toggle="dropdown"
                      className="action-icon dropdown-toggle"
                      href="#"
                    >
                      <i className="material-icons">more_vert</i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a
                        data-target="#edit_project"
                        data-toggle="modal"
                        href="#"
                        className="dropdown-item"
                      >
                        <i className="fa fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        data-target="#delete_project"
                        data-toggle="modal"
                        href="#"
                        className="dropdown-item"
                      >
                        <i className="fa fa-trash-o m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                  <h4 className="project-title">
                    <a href="/blue/app/projects/projects-view">
                      Office Management
                    </a>
                  </h4>
                  <small className="block text-ellipsis m-b-15">
                    <span className="text-xs">1</span>{" "}
                    <span className="text-muted">open tasks, </span>
                    <span className="text-xs">9</span>{" "}
                    <span className="text-muted">tasks completed</span>
                  </small>
                  <p className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. When an unknown printer took a galley
                    of type and scrambled it...
                  </p>
                  <div className="pro-deadline m-b-15">
                    <div className="sub-title">Deadline:</div>
                    <div className="text-muted">17 Apr 2019</div>
                  </div>
                  <div className="project-members m-b-15">
                    <div>Project Leader :</div>
                    <ul className="team-members">
                      <li>
                        <a href="#" data-toggle="tooltip" title="Jeffery Lalor">
                          <img alt="" src={Avatar_16} />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="project-members m-b-15">
                    <div>Team :</div>
                    <ul className="team-members">
                      <li>
                        <a href="#" data-toggle="tooltip" title="John Doe">
                          <img alt="" src={Avatar_02} />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="tooltip" title="Richard Miles">
                          <img alt="" src={Avatar_09} />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="tooltip" title="John Smith">
                          <img alt="" src={Avatar_10} />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="tooltip" title="Mike Litorus">
                          <img alt="" src={Avatar_05} />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="all-users">
                          +15
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="m-b-5">
                    Progress{" "}
                    <span className="text-success float-right">40%</span>
                  </p>
                  <div className="progress progress-xs mb-0">
                    <div
                      style={{ width: "40%" }}
                      data-toggle="tooltip"
                      role="progressbar"
                      className="progress-bar bg-success"
                      data-original-title="40%"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="dropdown profile-action">
                    <a
                      aria-expanded="false"
                      data-toggle="dropdown"
                      className="action-icon dropdown-toggle"
                      href="#"
                    >
                      <i className="material-icons">more_vert</i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a
                        data-target="#edit_project"
                        data-toggle="modal"
                        href="#"
                        className="dropdown-item"
                      >
                        <i className="fa fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        data-target="#delete_project"
                        data-toggle="modal"
                        href="#"
                        className="dropdown-item"
                      >
                        <i className="fa fa-trash-o m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                  <h4 className="project-title">
                    <a href="/blue/app/projects/projects-view">
                      Project Management
                    </a>
                  </h4>
                  <small className="block text-ellipsis m-b-15">
                    <span className="text-xs">2</span>{" "}
                    <span className="text-muted">open tasks, </span>
                    <span className="text-xs">5</span>{" "}
                    <span className="text-muted">tasks completed</span>
                  </small>
                  <p className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. When an unknown printer took a galley
                    of type and scrambled it...
                  </p>
                  <div className="pro-deadline m-b-15">
                    <div className="sub-title">Deadline:</div>
                    <div className="text-muted">17 Apr 2019</div>
                  </div>
                  <div className="project-members m-b-15">
                    <div>Project Leader :</div>
                    <ul className="team-members">
                      <li>
                        <a href="#" data-toggle="tooltip" title="Jeffery Lalor">
                          <img alt="" src={Avatar_16} />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="project-members m-b-15">
                    <div>Team :</div>
                    <ul className="team-members">
                      <li>
                        <a href="#" data-toggle="tooltip" title="John Doe">
                          <img alt="" src={Avatar_02} />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="tooltip" title="Richard Miles">
                          <img alt="" src={Avatar_09} />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="tooltip" title="John Smith">
                          <img alt="" src={Avatar_10} />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="tooltip" title="Mike Litorus">
                          <img alt="" src={Avatar_05} />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="all-users">
                          +15
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="m-b-5">
                    Progress{" "}
                    <span className="text-success float-right">40%</span>
                  </p>
                  <div className="progress progress-xs mb-0">
                    <div
                      style={{ width: "40%" }}
                      data-toggle="tooltip"
                      role="progressbar"
                      className="progress-bar bg-success"
                      data-original-title="40%"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="dropdown profile-action">
                    <a
                      aria-expanded="false"
                      data-toggle="dropdown"
                      className="action-icon dropdown-toggle"
                      href="#"
                    >
                      <i className="material-icons">more_vert</i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a
                        data-target="#edit_project"
                        data-toggle="modal"
                        href="#"
                        className="dropdown-item"
                      >
                        <i className="fa fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        data-target="#delete_project"
                        data-toggle="modal"
                        href="#"
                        className="dropdown-item"
                      >
                        <i className="fa fa-trash-o m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                  <h4 className="project-title">
                    <a href="/blue/app/projects/projects-view">
                      Video Calling App
                    </a>
                  </h4>
                  <small className="block text-ellipsis m-b-15">
                    <span className="text-xs">3</span>{" "}
                    <span className="text-muted">open tasks, </span>
                    <span className="text-xs">3</span>{" "}
                    <span className="text-muted">tasks completed</span>
                  </small>
                  <p className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. When an unknown printer took a galley
                    of type and scrambled it...
                  </p>
                  <div className="pro-deadline m-b-15">
                    <div className="sub-title">Deadline:</div>
                    <div className="text-muted">17 Apr 2019</div>
                  </div>
                  <div className="project-members m-b-15">
                    <div>Project Leader :</div>
                    <ul className="team-members">
                      <li>
                        <a href="#" data-toggle="tooltip" title="Jeffery Lalor">
                          <img alt="" src={Avatar_16} />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="project-members m-b-15">
                    <div>Team :</div>
                    <ul className="team-members">
                      <li>
                        <a href="#" data-toggle="tooltip" title="John Doe">
                          <img alt="" src={Avatar_02} />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="tooltip" title="Richard Miles">
                          <img alt="" src={Avatar_09} />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="tooltip" title="John Smith">
                          <img alt="" src={Avatar_10} />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="tooltip" title="Mike Litorus">
                          <img alt="" src={Avatar_05} />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="all-users">
                          +15
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="m-b-5">
                    Progress{" "}
                    <span className="text-success float-right">40%</span>
                  </p>
                  <div className="progress progress-xs mb-0">
                    <div
                      style={{ width: "40%" }}
                      data-toggle="tooltip"
                      role="progressbar"
                      className="progress-bar bg-success"
                      data-original-title="40%"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-4 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="dropdown profile-action">
                    <a
                      aria-expanded="false"
                      data-toggle="dropdown"
                      className="action-icon dropdown-toggle"
                      href="#"
                    >
                      <i className="material-icons">more_vert</i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a
                        data-target="#edit_project"
                        data-toggle="modal"
                        href="#"
                        className="dropdown-item"
                      >
                        <i className="fa fa-pencil m-r-5" /> Edit
                      </a>
                      <a
                        data-target="#delete_project"
                        data-toggle="modal"
                        href="#"
                        className="dropdown-item"
                      >
                        <i className="fa fa-trash-o m-r-5" /> Delete
                      </a>
                    </div>
                  </div>
                  <h4 className="project-title">
                    <a href="/blue/app/projects/projects-view">
                      Hospital Administration
                    </a>
                  </h4>
                  <small className="block text-ellipsis m-b-15">
                    <span className="text-xs">12</span>{" "}
                    <span className="text-muted">open tasks, </span>
                    <span className="text-xs">4</span>{" "}
                    <span className="text-muted">tasks completed</span>
                  </small>
                  <p className="text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. When an unknown printer took a galley
                    of type and scrambled it...
                  </p>
                  <div className="pro-deadline m-b-15">
                    <div className="sub-title">Deadline:</div>
                    <div className="text-muted">17 Apr 2019</div>
                  </div>
                  <div className="project-members m-b-15">
                    <div>Project Leader :</div>
                    <ul className="team-members">
                      <li>
                        <a href="#" data-toggle="tooltip" title="Jeffery Lalor">
                          <img alt="" src={Avatar_16} />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="project-members m-b-15">
                    <div>Team :</div>
                    <ul className="team-members">
                      <li>
                        <a href="#" data-toggle="tooltip" title="John Doe">
                          <img alt="" src={Avatar_02} />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="tooltip" title="Richard Miles">
                          <img alt="" src={Avatar_09} />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="tooltip" title="John Smith">
                          <img alt="" src={Avatar_10} />
                        </a>
                      </li>
                      <li>
                        <a href="#" data-toggle="tooltip" title="Mike Litorus">
                          <img alt="" src={Avatar_05} />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="all-users">
                          +15
                        </a>
                      </li>
                    </ul>
                  </div>
                  <p className="m-b-5">
                    Progress{" "}
                    <span className="text-success float-right">40%</span>
                  </p>
                  <div className="progress progress-xs mb-0">
                    <div
                      style={{ width: "40%" }}
                      data-toggle="tooltip"
                      role="progressbar"
                      className="progress-bar bg-success"
                      data-original-title="40%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Projects Tab */}
        {/* Bank Statutory Tab */}
        <div className="tab-pane fade" id="bank_statutory">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title"> Basic Salary Information</h3>
              <form>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="col-form-label">
                        Salary basis <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Select salary basis type</option>
                        <option>Hourly</option>
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="col-form-label">
                        Salary amount{" "}
                        <small className="text-muted">per month</small>
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">$</span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type your salary amount"
                          defaultValue={0.0}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="col-form-label">Payment type</label>
                      <select className="select">
                        <option>Select payment type</option>
                        <option>Bank transfer</option>
                        <option>Check</option>
                        <option>Cash</option>
                      </select>
                    </div>
                  </div>
                </div>
                <hr />
                <h3 className="card-title"> PF Information</h3>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="col-form-label">PF contribution</label>
                      <select className="select">
                        <option>Select PF contribution</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="col-form-label">
                        PF No. <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Select PF contribution</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="col-form-label">Employee PF rate</label>
                      <select className="select">
                        <option>Select PF contribution</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="col-form-label">
                        Additional rate <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Select additional rate</option>
                        <option>0%</option>
                        <option>1%</option>
                        <option>2%</option>
                        <option>3%</option>
                        <option>4%</option>
                        <option>5%</option>
                        <option>6%</option>
                        <option>7%</option>
                        <option>8%</option>
                        <option>9%</option>
                        <option>10%</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="col-form-label">Total rate</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="N/A"
                        defaultValue="11%"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="col-form-label">Employee PF rate</label>
                      <select className="select">
                        <option>Select PF contribution</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="col-form-label">
                        Additional rate <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Select additional rate</option>
                        <option>0%</option>
                        <option>1%</option>
                        <option>2%</option>
                        <option>3%</option>
                        <option>4%</option>
                        <option>5%</option>
                        <option>6%</option>
                        <option>7%</option>
                        <option>8%</option>
                        <option>9%</option>
                        <option>10%</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="col-form-label">Total rate</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="N/A"
                        defaultValue="11%"
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <h3 className="card-title"> ESI Information</h3>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="col-form-label">ESI contribution</label>
                      <select className="select">
                        <option>Select ESI contribution</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="col-form-label">
                        ESI No. <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Select ESI contribution</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="col-form-label">
                        Employee ESI rate
                      </label>
                      <select className="select">
                        <option>Select ESI contribution</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="col-form-label">
                        Additional rate <span className="text-danger">*</span>
                      </label>
                      <select className="select">
                        <option>Select additional rate</option>
                        <option>0%</option>
                        <option>1%</option>
                        <option>2%</option>
                        <option>3%</option>
                        <option>4%</option>
                        <option>5%</option>
                        <option>6%</option>
                        <option>7%</option>
                        <option>8%</option>
                        <option>9%</option>
                        <option>10%</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="col-form-label">Total rate</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="N/A"
                        defaultValue="11%"
                      />
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn" type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Bank Statutory Tab */}
      </div>
    </>
  );
};

export default UserTab;
