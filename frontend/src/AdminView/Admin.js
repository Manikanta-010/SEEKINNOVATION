import React from 'react';
import { Container, Row, Col, Card, Table, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDollarSign, faChartLine } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css'; // Import the CSS

function Admin() {
  // Dummy data for leaderboard
  const leaderboardData = [
    { rank: 1, trader: "0x30d3klUoek8d9fndkgge99887", pnl: "$50,000", roi: "200%" },
    { rank: 2, trader: "0x30d3klUoek8d9fndkgge99887", pnl: "$50,000", roi: "200%" },
    { rank: 3, trader: "0x30d3klUoek8d9fndkgge99887", pnl: "$50,000", roi: "200%" },
    { rank: 4, trader: "0x30d3klUoek8d9fndkgge99887", pnl: "$50,000", roi: "200%" },
    // Add more dummy data as required
  ];

  return (
    <Container fluid className="leaderboard-container">
      <Row>
        {/* Main Leaderboard Section */}
        <Col md={8}>
          <Card className="leaderboard-card">
            <Card.Body>
              <h4 className="leaderboard-title">Leaderboard</h4>
              <p className="leaderboard-subtitle">Lorem ipsum dolor sit amet consectetur.</p>

              {/* Table */}
              <Table responsive="sm" className="leaderboard-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Trader</th>
                    <th>PNL</th>
                    <th>ROI</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.rank}</td>
                      <td>{data.trader}</td>
                      <td>{data.pnl}</td>
                      <td>{data.roi}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        {/* Right-hand Section */}
        <Col md={4}>
          <Card className="stats-card">
            <Card.Body>
              <div className="stats-header">
                <FontAwesomeIcon icon={faUser} className="stats-icon" />
                <div className="stats-info">
                  <p>Trader Population</p>
                  <h4>10,000</h4>
                </div>
              </div>
              <div className="stats-header">
                <FontAwesomeIcon icon={faDollarSign} className="stats-icon" />
                <div className="stats-info">
                  <p>Cumulative Profits</p>
                  <h4>$10,000,000</h4>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card className="pnl-card">
            <Card.Body>
              <h4 className="pnl-title">Historical PNL</h4>
              {/* Placeholder for Chart */}
              <div className="pnl-graph-placeholder">
                <p>Chart Placeholder</p>
              </div>
              <Table responsive="sm" className="pnl-table">
                <thead>
                  <tr>
                    <th>Contracts</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MMPEPE</td>
                    <td>$10,000</td>
                  </tr>
                  <tr>
                    <td>MMPEPE</td>
                    <td>$10,000</td>
                  </tr>
                  {/* Add more dummy data if needed */}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;
