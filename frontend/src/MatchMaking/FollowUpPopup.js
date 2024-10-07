import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './FollowUpPopup.css'; // Import the CSS file

const FollowUpPopup = () => {
  return (
    <div className="followup-popup">
      <Card className="followup-card">
        <Card.Body>
          <h3 className="followup-title">Hey Morva</h3>
          <p className="followup-subtitle">Ready to tackle your tasks?</p>
          
          {/* Today's Tasks Section */}
          <Card className="tasks-card">
            <div className="task-header">
              <div className="task-icon">
                <i className="bi bi-check-circle-fill"></i>
              </div>
              <div className="task-info">
                <h5>Today's Tasks</h5>
                <p>View and manage your tasks for today</p>
              </div>
            </div>
          </Card>

          {/* Projects Section */}
          <h4 className="projects-title">Projects</h4>
          <Button variant="dark" className="new-project-btn">+ New Project</Button>

          {/* Project Cards */}
          <Card className="project-card">
            <div className="project-info">
              <div className="project-icon">
                <i className="bi bi-stack"></i>
              </div>
              <div>
                <h5>Morva Labs</h5>
                <p>48 tasks</p>
              </div>
            </div>
          </Card>

          <Card className="project-card">
            <div className="project-info">
              <div className="project-icon">
                <i className="bi bi-stack"></i>
              </div>
              <div>
                <h5>Task by Me</h5>
                <p>0 tasks</p>
              </div>
            </div>
          </Card>

          <Card className="project-card">
            <div className="project-info">
              <div className="project-icon">
                <i className="bi bi-stack"></i>
              </div>
              <div>
                <h5>Saas Pro</h5>
                <p>12 tasks</p>
              </div>
            </div>
          </Card>

        </Card.Body>
      </Card>
    </div>
  );
};

export default FollowUpPopup;
