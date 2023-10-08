function Home() {
  const REACT_APP_TEST = process.env.REACT_APP_SERVER;

  return (
    <div>
      <h1 className="">{REACT_APP_TEST}</h1>
    </div>
  );
}

export default Home;
