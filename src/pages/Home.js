import PlayerList from '../components/PlayerList';
import TeamList from '../components/TeamList';

const Home = () => (
  <>
    <div className="flex justify-center mt-12">
      <TeamList />
      <PlayerList />
    </div>
  </>
);
export default Home;
