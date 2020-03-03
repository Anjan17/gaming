import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import FlagWithName from "./FlagWithName";
// import './App.css';
import Card from "./Card";

function App() {

  const [type, setType] = useState('All');
  const [status, setStatus] = useState('upcoming');
  const [dataQuery, setDataQuery] = useState(gql`
    {
      schedule(type: "All", status: "upcoming", page:0) {
        matchID
        seriesName
      }
    }`);

  useEffect(() => {
    setDataQuery(gql`
    {
      schedule(type:"${type}", status:"${status}", page:1) {
        matchID
        seriesName
      }
    }`);
  }, [type, status]);

  const { data, error, loading } = useQuery(dataQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data.schedule);

  return (
    <div className="schedule pa5 bg-gray">
      <button onClick={e => setStatus("upcoming")}>Upcoming</button>
      <button onClick={e => setStatus("live")}>Live</button>
      <button onClick={e => setStatus("completed")}>Completed</button>
      <br />
      <button onClick={e => setType("All")}>All</button>
      <button onClick={e => setType("International")}>International</button>
      <button onClick={e => setType("Domestic")}>Domestic</button>
      {
        data.schedule.map(item => (
          <Card seriesName={item.seriesName} key={item.matchID}>
            <FlagWithName countryFlag='green' name='Libya' />
            <FlagWithName countryFlag='red' name='Romania' />
          </Card>
        ))
      }
    </div>
  );
}

export default App;
