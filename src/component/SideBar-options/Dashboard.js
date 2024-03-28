import React, { Fragment, useState, useEffect, useRef } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import { Container, Row, Col, Card, CardHeader, CardBody, Form, Button } from 'reactstrap';
import Chart from 'chart.js/auto';

function Dashboard() {
  const chartRef = useRef(null);
  const [dashboard, setDashboard] = useState([
    { pageName: 'Vikas Jat', visitors: '1034', uniqueUser: '340', bounceRate:'46,53%'},
    { pageName: 'Rahul Gothi', visitors: '4563', uniqueUser: '319', bounceRate:'46,53%' },
    { pageName: 'Anita Patil', visitors: '4333', uniqueUser: '294', bounceRate:'46,53%' },
    { pageName: 'Ram Patil', visitors: '6783', uniqueUser: '742', bounceRate:'46,53%' },
    { pageName: 'Shyam Sharma', visitors: '4093', uniqueUser: '594', bounceRate:'46,53%' },
    // Add more dummy data as needed
  ]);
  const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  });
  const [chartType, setChartType] = useState('line');
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    const newChartInstance = new Chart(chartRef.current, {
      type: chartType,
      data: chartData
    });

    setChartInstance(newChartInstance);

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [chartData, chartType]);

  const handleIntervalChange = (interval) => {
    let labels = [];
    let data = [];
    let newChartType = 'line';
    switch (interval) {
      case 'month':
        labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        data = [65, 59, 80, 81, 56, 55, 40];
        break;
      case 'year':
        labels = ['2021', '2022', '2023', '2024', '2025'];
        data = [100, 150, 120, 200, 180];
        break;
      case 'week':
        labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];
        data = [20, 30, 25, 35, 40];
        newChartType = 'bar';
        break;
      default:
        labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        data = [65, 59, 80, 81, 56, 55, 40];
    }
    setChartData({
      labels: labels,
      datasets: [{
        label: 'Sales',
        data: data,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    });
    setChartType(newChartType);
  };

  return (
    <Fragment>
      <Breadcrumb parent="Starter kit" title="Sample Page" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>DASHBOARD</h5>
              </CardHeader>
              <CardBody>
                <Form style={{width:"50%"}}>
                  <div className="text-center mb-4">
                    <Button color="primary" className="mr-2" onClick={() => handleIntervalChange('month')}>Month</Button>
                    <Button color="primary" className="mr-2" onClick={() => handleIntervalChange('year')}>Year</Button>
                    <Button color="primary" onClick={() => handleIntervalChange('week')}>Week</Button>
                  </div>
                  <canvas ref={chartRef} width="400" height="200"></canvas>
                </Form>
                <table className="table table-striped" style={{marginTop:"70px"}}>
                    <thead>
                      <tr>
                        <th>PAGE NAME</th>
                        <th>VISITORS</th>
                        <th>UNIQUE USER</th>
                        <th>BOUNCE RATE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dashboard.map(dashboard => (
                        <tr key={dashboard.pageName}>
                          <td>{dashboard.pageName}</td>
                          <td>{dashboard.visitors}</td>
                          <td>{dashboard.uniqueUser}</td>
                          <td>{dashboard.bounceRate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Dashboard;