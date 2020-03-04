import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FlagWithName from "./FlagWithName";
import Card from "./Card";

function App() {

  const [type, setType] = useState('All');
  const [status, setStatus] = useState('live');
  const [page, setPage] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  const [dataQuery, setDataQuery] = useState(gql`
    {
      schedule(type: "live", status: "All") {
        matchID
        seriesName
      }
    }`);

  useEffect(() => {
    setDataQuery(gql`
    {
      schedule(type:"${type}", status:"${status}") {
        matchID
        seriesName
      }
    }`);
  }, [type, status, page]);

  const { data, error, loading } = useQuery(dataQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  
  return (
    <div className="schedule pa5 bg-gray">
      <button onClick={e => setStatus("upcoming")}>Upcoming</button>
      <button onClick={e => setStatus("live")}>Live</button>
      <button onClick={e => setStatus("completed")}>Completed</button>
      <br />
      <Tabs selectedIndex={tabIndex} onSelect={tabIndex => setTabIndex(tabIndex )}>
        <TabList>
          <Tab onClick={e => { setType("All"); setTabIndex(0); }}>All</Tab>
          <Tab onClick={e => { setType("International"); setTabIndex(1); }}>International</Tab>
          <Tab onClick={e => { setType("Domestic"); setTabIndex(2); }}>Domestic</Tab>
        </TabList>

        <TabPanel>
          <h2>{
            data.schedule.map(item => (
              <Card seriesName={item.seriesName} key={item.matchID}>
                <FlagWithName countryFlag='green' name='Libya' />
                <FlagWithName countryFlag='red' name='Romania' />
              </Card>
            ))}</h2>
        </TabPanel>
        <TabPanel>
          <h2>{
            data.schedule.map(item => (
              <Card seriesName={item.seriesName} key={item.matchID}>
                <FlagWithName countryFlag='green' name='Libya' />
                <FlagWithName countryFlag='red' name='Romania' />
              </Card>
            ))
          }</h2>
        </TabPanel>
        <TabPanel>
          <h2>{
            data.schedule.map(item => (
              <Card seriesName={item.seriesName} key={item.matchID}>
                <FlagWithName countryFlag='green' name='Libya' />
                <FlagWithName countryFlag='red' name='Romania' />
              </Card>
            ))
          }</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
