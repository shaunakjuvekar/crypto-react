import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const {Title} = Typography;

const Homepage = () => {
  return (
    <>
        <Title level={2} className='heading'>Global Crypto Stats</Title>
        <Row>
            <Col span={12}><Statistic title="Total Cryptocurrencies" value='5'></Statistic></Col>
            <Col span={12}><Statistic title="Total Exhanches" value='5'></Statistic></Col>
            <Col span={12}><Statistic title="Total Market Cap" value='5'></Statistic></Col>
            <Col span={12}><Statistic title="Total 24hr Volume" value='5'></Statistic></Col>
            <Col span={12}><Statistic title="Total CrypMarketstocurrencies" value='5'></Statistic></Col>
            
        </Row>
    </>
  )
}

export default Homepage