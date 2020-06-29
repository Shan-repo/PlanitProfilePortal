import React, { Component } from 'react';
import profile from '../../profile.json';
import moment from "moment";



class Certification extends Component {
	render() { 
	  return (
		<div className="card">
		  <div className="card-content">
			<h4 className="header-font">
			CERTIFICATION
			</h4>
			<table class='striped'>
						<thead>
							<tr>
								<th>Certificate</th>
								<th>Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
						{
							profile.Certificates.map((Certificate) => {
								const cDate = moment(Certificate.CertificationDate);
								return (

									<tr>
									<td>{Certificate.CertificateName}</td>
									<td>{cDate.format('MMM YYYY')}</td>
									<td>
										<a rel="noopener noreferrer" target="_blank" href={Certificate.Source} class='btn blue lighten-2'>
											View
										</a>
									</td>
								</tr> 
									
								);
							})
							}
						</tbody>
					</table>
		
		  </div>
		</div>
	  );
	}
  }
  
  export default Certification;


