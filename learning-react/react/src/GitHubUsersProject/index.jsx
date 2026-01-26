import Data from "./users.json";
import UserSection from "./UsersSection";
import "./../index.css";
import SearchSection from "./SearchSection";
import StateNum from "./LearningSection/StateNumber";
import Colors from "./LearningSection/colors";

// console.log(Data);
function GitHubUsers() {
  return (
    <div>
      {/* <h1>Coming Soon</h1> */}
      <StateNum />
      <Colors />
      <SearchSection />
      <UserSection users={Data} />
    </div>
  );
}
export default GitHubUsers;
