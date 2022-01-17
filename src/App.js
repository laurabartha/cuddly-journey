import FanInformation from "./FanInformation";
import PageHeading from "./PageHeading";

function App() {
  console.log("WOOO APP WAZZUP");

  const ancientBirbsTeam = {
    id: 1,
    name: "Torrano Ancient Birbs",
    city: "Torrano",
    stadium: {
      name: "Birbs Nest",
      capacity: 30000
    }
  }

  const modernBirbs = {
    id: 2,
    name: "Torrano Modern Birbs",
    city: "Torrano",
    stadium: {
      name: "Birb Roost",
      capacity: 30001
    }
  }

  const sportsTeams = [ancientBirbsTeam, modernBirbs];

  const followTeam = (name) => {
    console.log(`You are now following that ${name}`);
  }

  return (
    <div>
      <PageHeading>
        <h1> ALL THE SPORTS TEAMS!!</h1>
        <h2> All The Time</h2>
      </PageHeading>
      <div>
      {
        sportsTeams.map((team, index)=>{
          return (
          <FanInformation
          key = {team.id} 
          id = {team.id}
          teamName={team.name}
          number = {index}
          city = {team.city}
          stadium = {team.stadium}
          followTeamFunction = {followTeam}
          />
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
