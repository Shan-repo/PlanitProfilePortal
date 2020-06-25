import React, { Component } from 'react';
import profile from '../../profile.json';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import StarIcon from '@material-ui/icons/Star';

const styles = {
  skillChip: 'skillChip',
  skillPanelDetail: 'skillPanelDetail'
}

class Skills extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h4 className="header-font">
            CORE SKILLS
          </h4>
          {
            profile.Skills.map((skill) => {
              return (
                <ExpansionPanel key={skill.Area} defaultExpanded>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h5">{skill.Area}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={styles.skillPanelDetail}>
                    {
                        skill.SkillSet.map((skillDetail) => {
                            return (
                                <Chip
                                    icon={skillDetail.Hot ? <StarIcon /> : null}
                                    label={skillDetail.Name}
                                    className={styles.skillChip}
                                    color="Primary"
                                    key={skillDetail.Name}
                                />
                            );
                        })
                    }
                </ExpansionPanelDetails>
            </ExpansionPanel>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Skills;
