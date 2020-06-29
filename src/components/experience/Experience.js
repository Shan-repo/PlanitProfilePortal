import React, { Component } from 'react';
import profile from '../../profile.json';
import moment from "moment";
import Typography from '@material-ui/core/Typography';

class Experience extends Component {
  render() { 
    return (
      <div className="card">
        <div className="card-content">
          <h4 className="header-font">
            EXPERIENCE
          </h4>
          {
            profile.Experiences.map((experience) => {
              return (

                <div className="row mt-top">
                  <div className="col xl4 l4 m6 s12">
                    <img style={{ float: 'right' }} width="10%" src={experience.logo} alt='Shanavas' />
                    {experience.roles.map(function (role, i) {
                      const startDate = moment(role.startDate);
                      const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate));
                      return <div key={i}>
                        <h6 className="no-pad mt-bottom">
                          <strong className='company-font'>{experience.companyName}</strong>
                          <br></br>
                          <strong>{role.title}</strong>
                          <p>
                            <span className="jobDuration">{startDate.format('MMM YYYY')} - {role.currentJob ? 'Present' : timeEnd.format('MMM YYYY')}</span>
                          </p>
                        </h6>
                        <p >
                          <Typography variant="h7" >
                          {role.description}
                          </Typography>
                        </p>
                        {/* <p style={{ alignContent: "center" }}><strong>{role.description}</strong></p> */}
                      </div>
                    })}
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Experience;
