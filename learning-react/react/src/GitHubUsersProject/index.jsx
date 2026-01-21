import Data from "./users.json";
import UserSection from "./UsersSection";
import "./../index.css";

// console.log(Data);
function GitHubUsers() {
  return (
    <div>
      {/* <h1>Coming Soon</h1> */}
      <UserSection users={Data} />
    </div>
  );
}
export default GitHubUsers;
