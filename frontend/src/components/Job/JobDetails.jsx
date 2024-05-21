import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();

  const { isAuthorized, user } = useContext(Context);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/job/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setJob(res.data.job);
      })
      .catch((error) => {
        navigateTo("/notfound");
      });
  }, []);

  if (!isAuthorized) {
    navigateTo("/login");
  }

  return (
    <section className="jobDetail page">
      <div className="container">
        <h3>Job Details</h3>
        <div className="banner">
          <p>
            Title: <span>{job.title}</span>
          </p>
          <p>
            Company Name: <span>{job.companyName}</span>
          </p>
          <p>
            Country: <span>{job.country}</span>
          </p>
          <p>
            City: <span>{job.city}</span>
          </p>
          <p>
            Location: <span>{job.location}</span>
          </p>
          <p>
            Job Type: <span>{job.jobType}</span>
          </p>
          <p>
            Experience: <span>{job.experience}</span>
          </p>
          <p>
            Industry: <span>{job.industry}</span>
          </p>
          <p>
            Description: <span>{job.description}</span>
          </p>
          <p>
            Responsibilities: <span>{job.responsibilities}</span>
          </p>
          <p>
            Qualifications: <span>{job.qualifications}</span>
          </p>
          <p>
            Benefits: <span>{job.benefits}</span>
          </p>
          <p>
            Job Posted On: <span>{job.jobPostedOn && new Date(job.jobPostedOn).toLocaleDateString()}</span>
          </p>
          <p>
            Salary:{" "}
            {job.fixedSalary ? (
              <span>{job.fixedSalary}</span>
            ) : (
              <span>
                {job.salaryFrom} - {job.salaryTo}
              </span>
            )}
          </p>
          <p>
            Application Deadline: <span>{job.applicationDeadline && new Date(job.applicationDeadline).toLocaleDateString()}</span>
          </p>
          <p>
            Company Overview: <span>{job.companyOverview}</span>
          </p>
          {user && user.role === "Employer" ? (
            <></>
          ) : (
            <Link to={`/application/${job._id}`}>Apply Now</Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobDetails;

