import React from "react";
import {Layout} from 'react-mdl';
import { Grid, Header } from "semantic-ui-react";
import JSONdata from "../../mydata.json";
import { Line  } from "react-chartjs-2";

// defaults.global.maintainAspectRatio = false

const DashboardBarChart = () => {
  const data = {
    labels: JSONdata.barChart[0].labels,
    datasets: JSONdata.barChart[1].datasets,
    options: JSONdata.barChart[2].options
  };
  return <Line data={data} />;
};
export default class ResourceUtilization extends React.PureComponent {

  render() {
    return (

    
      <Layout {...this.props} >
        <Header as="h2">ResourceUtilization</Header>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={16}>
              <DashboardBarChart />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>

    );
  }
}
