import React, {useState, useEffect} from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
// import Loader from './Loader';

const Cryptocurrencies = ({simplified}) => {

  const count  = simplified ? 10 : 50;

  const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  //callback function only gets exe, when cryptoList or searchTerm (dpenedency array) are firing any event
  useEffect(() => {
    // setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if(isFetching) return "loading isFetching....";

  console.log(count);
  console.log('crytpo list',cryptos);

  return (
    <>
    {/* render search only in crytpo page, not homepage. use simplified prop, if it is there then show it. ifnot then = ! && */}
    {!simplified && 
        <div className="search-crypto">
            <Input placeholder="Search Cryptocurrency"
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />
      </div>
    }
   
      <Row gutter = {[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid} >
          {/* for responsive desgin we use gutter */}
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card title={`${currency.rank}. ${currency.name}`} extra={<img className="crypto-image" src={currency.iconUrl} />} hoverable >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies