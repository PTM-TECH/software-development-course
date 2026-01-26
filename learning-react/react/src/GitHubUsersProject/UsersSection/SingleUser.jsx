function SingleUser({ name, image, url }) {
  const navigate = () => {
    // console.log("Navigate to url", url);
    window.open(url, "_blank");
  };
  // const mouserOver = () => {
  //   console.log("mouse over", name);
  // };
  return (
    <div className="w-60 shadow-lg text-black p-5 m-3 flex flex-col items-center text-center">
      <div>
        <img className="rounded-full w-32 h-32 object-cover mb-4" src={image} />
      </div>
      <div className="p-4">
        <div>
          Name: <b>{name}</b>
        </div>
        <button
          onClick={navigate}
          className="px-4 py-2 rounded-md text-white bg-blue-600 cursor-pointer hover:opacity-45 active:opacity-50"
        >
          GitHub
        </button>
      </div>
    </div>
  );
}
export default SingleUser;
