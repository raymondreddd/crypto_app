import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd'; 
import {Navbar, News, Exchanges, CryptoDetails, Cryptocurrencies} from '../components';
import { Link } from 'react-router-dom';
import Loader from './Loader';

import {useGetCryptosQuery} from '../services/cryptoApi'

const {Title} = Typography;
const Homepage = () => {

  const { data: fetched_data, isFetching } = useGetCryptosQuery(10);

  const globalStats = fetched_data?.data?.stats;
  console.log('global data',fetched_data);

  if (isFetching) return <Loader />;

  return (
    <>
    <Title level = {2} className="heading">
      Global Crypto Statistics
    </Title>
    <Row>
    {/* in ant design there are 24 spaces, so it will take half the space */}
      <Col span={12}><Statistic title="Total Crypto currencies" value={globalStats.total} /></Col>
      <Col span={12}><Statistic title="Total Exhcanges" value={millify(globalStats.totalExchanges)} /></Col>
      <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
      <Col span={12}><Statistic title="Total 24hr Volume" value={millify(globalStats.total24hVolume)} /></Col>
      <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      
    </Row>

    <div className='home-heading-container'>
      <Title level={2} className="home-title">Top 10 Cryptocurrencies in the World</Title>
      <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
    </div>
    <Cryptocurrencies simplified />

    <div className='home-heading-container'>
      <Title level={2} className="home-title">Latest Crypto News</Title>
      <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
    </div>
    <News simplified />



    </>
  )
}

export default Homepage