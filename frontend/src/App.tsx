import React from 'react';
import './App.css';
import TeamNames from './CollegeBasketballTeams.json';

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

interface TeamData {
  school: string;
  name: string;
  city: string;
  state: string;
}

interface TeamListProps {
  teams: TeamData[];
}

function Header() {
  return (
    <h1
      style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#333',
      }}
    >
      NCAA Basketball Team List
    </h1>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="card">
        <div className="team-details">
          <h2>{oneTeam.school}</h2>
          <h3>Mascot: {oneTeam.name}</h3>
          <h3>
            Location: {oneTeam.city}, {oneTeam.state}
          </h3>
        </div>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {TeamNames.teams.map((team: TeamData) => (
        <Team key={team.school} {...team} />
      ))}
    </div>
  );
}
// The section of our code that is displaying on our site, the stuff above is just new writing of functions
// The app returns the function of the list of teams that we reated above
// Has to be wrapped in a closing tag (div)
function App() {
  return (
    <div className="App">
      <Header />
      <TeamList />
    </div>
  );
}

export default App;
