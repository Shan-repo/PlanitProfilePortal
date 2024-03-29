import React, { Component } from 'react';
import profile from '../../profile.json';
import moment from "moment";
import Typography from '@material-ui/core/Typography';


class Education extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h4 className="header-font">
            EDUCATION
          </h4>
          {
            profile.Education.map((education) => {

              const stDate = moment(education.startDate);
              const tEnd = moment(education.endDate);
              return (
                <div className="row mt-top">
                  <div className="col xl4 l4 m6 s12">

                    <h6 className="no-pad mt-bottom">
                      <strong className='company-font'>{education.Edu}</strong>
                      <p >
                        <Typography style={{ float: 'right' }} variant="h7" >
                          {education.Percentage}
                        </Typography>
                      </p>
                      <br></br>
                      <strong>{education.university}</strong>
                      <br></br>
                      <span className="jobDuration">{stDate.format('YYYY')} - {tEnd.format('YYYY')} </span>

                    </h6>


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

export default Education;


