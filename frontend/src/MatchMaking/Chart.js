import React from 'react';
import { Container, Row, Col, Card, ListGroup, ProgressBar } from 'react-bootstrap';
import { Doughnut, Line } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack, faBell, faCheckCircle, faExclamationCircle, faInfoCircle, faClock } from '@fortawesome/free-solid-svg-icons';

// Import necessary Chart.js components
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

function Chart() {
  // Dummy data for Profile Completion Doughnut chart
  const profileCompletion = {
    datasets: [
      {
        data: [85, 15], // 85% completion
        backgroundColor: ['#0066FF', '#d3d3d3'], // Blue and light grey
        borderWidth: 0
      }
    ]
  };

  // Dummy data for Analytics (Backup Overview) graph
  const analyticsData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Last Week',
        data: [100, 120, 140, 130, 150, 140, 160],
        fill: true,
        backgroundColor: 'rgba(0, 102, 255, 0.2)',
        borderColor: '#0066FF',
        tension: 0.3,
      },
      {
        label: 'This Week',
        data: [80, 110, 130, 120, 140, 130, 150],
        fill: true,
        backgroundColor: 'rgba(255, 165, 0, 0.2)', // Orange
        borderColor: '#FFA500', // Orange
        tension: 0.3,
      },
      {
        label: 'Last Month',
        data: [90, 115, 135, 125, 145, 135, 155],
        fill: true,
        backgroundColor: 'rgba(0, 255, 0, 0.2)', // Green
        borderColor: '#00FF00', // Green
        tension: 0.3,
      }
    ]
  };

  return (
    <Container fluid className="dashboard-container">
      <Row>
        {/* Left Side */}
        <Col md={6}>
          {/* Total Offers/Needs and Total Matches */}
          <Row>
            <Col md={6}>
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title><FontAwesomeIcon icon={faThumbtack} /> Total Offers/Needs</Card.Title>
                  <h2 className="text-center">120</h2>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title><FontAwesomeIcon icon={faCheckCircle} /> Total Matches</Card.Title>
                  <h2 className="text-center">65</h2>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Profile Page Completion */}
          <Row>
            <Col md={12}>
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title><FontAwesomeIcon icon={faInfoCircle} /> Profile Page Completion</Card.Title>
                  <Doughnut data={profileCompletion} options={{ cutout: '70%' }} />
                  <h4 className="text-center mt-3">85%</h4>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Backup Overview (Analytics Graph) */}
          <Row>
            <Col md={12}>
              <Card className="dashboard-card">
                <Card.Body>
                  <Card.Title><FontAwesomeIcon icon={faClock} /> Backup Overview</Card.Title>
                  <Line data={analyticsData} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        {/* Right Side (Alert Center) */}
        <Col md={6}>
          <Card className="alert-card">
            <Card.Header className="alert-header">Alert Center</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className="alert-item info">
                <FontAwesomeIcon icon={faInfoCircle} /> Information: Someone viewed your profile
                <span className="alert-timestamp"> - Today, 10:30 AM</span>
              </ListGroup.Item>
              <ListGroup.Item className="alert-item warning">
                <FontAwesomeIcon icon={faExclamationCircle} /> Warning: This company liked your profile
                <span className="alert-timestamp"> - Today, 09:15 AM</span>
              </ListGroup.Item>
              <ListGroup.Item className="alert-item urgent">
                <FontAwesomeIcon icon={faBell} /> Urgent: You have a new match!
                <span className="alert-timestamp"> - Yesterday, 03:45 PM</span>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Chart;
