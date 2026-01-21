import SingleUser from "./SingleUser";

function UserSection({ users }) {
  return (
    <div>
      <h1>GitHub Users</h1>
      <div className="flex flex-wrap">
        {users.map((user) => (
          <SingleUser
            key={user.id}
            name={user.login}
            image={user.avatar_url}
            url={user.html_url}
          />
        ))}
      </div>
    </div>
  );
}
export default UserSection;
