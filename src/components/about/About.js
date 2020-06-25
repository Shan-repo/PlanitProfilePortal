import React from 'react';
import Profile from "../../profile.json";
import Typography from '@material-ui/core/Typography';
import ImgProfile from '../../Image/shan.jpg';
import ExampleComponent from 'react-rounded-image';


export default function About() {
  return (
    <div> 
      <div  className="card">
        <div className="card-content" >
          <h3 className="mt-bottom">
          {Profile.Name}
          <div style={{float: 'right'}}>
                <ExampleComponent
                  image={ImgProfile}
                  roundedColor="#321124"
                  imageWidth="150"
                  imageHeight="150"
                  roundedSize="10"
                />
          </div>
          </h3>

          <h4 className="mt-bottom">
          {Profile.Position}
          </h4>
          <p >
          <Typography variant="h6" >
             {Profile.Description}
          </Typography>
          </p>
        </div>
      </div>
      
    </div>
  );
}
