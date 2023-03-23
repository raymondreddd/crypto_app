import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import {useGetCryptosQuery} from '../services/cryptoApi'

const {Title} = Typography;
const Homepage = () => {

  const {data, isFetching} = useGetCryptosQuery();

  console.log(data);

  return (
    <>
    <Title level = {2} className="heading">
      Global Crypto Statistics
    </Title>
    <Row>
    {/* in ant design there are 24 spaces, so it will take half the space */}
      <Col span={12}><Statistic title="Total Crypto currencies" value={5} /></Col>
      <Col span={12}><Statistic title="Total Exhcanges" value={5} /></Col>
      <Col span={12}><Statistic title="Total Market Cap" value={5} /></Col>
      <Col span={12}><Statistic title="Total 24hr Volume" value={5} /></Col>
      <Col span={12}><Statistic title="Total Markets" value={5} /></Col>
      
    </Row>

    </>
  )
}

export default Homepage