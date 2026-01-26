function SearchSection() {
  const userInput = (e) => {
    console.log(e);
    const value = e.target.value;
    console.log("Input value is", value);
  };
  return (
    <div className="flex justify-center my-4">
      <div className="flex items-center">
        <input
          className="py-1 px-2 border"
          placeholder="Enter GitHub name..."
          onChange={userInput}
        />
        <button className=" px-2 py-1 text-white bg-blue-500 hover:opacity-80 active:opacity-70">
          Search
        </button>
      </div>
      <input />
    </div>
  );
}
export default SearchSection;
