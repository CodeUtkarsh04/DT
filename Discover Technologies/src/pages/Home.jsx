import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Fake content to test scroll */}
      <div className="min-h-screen px-20 py-20 bg-slate-50">
        <h1 className="text-3xl font-bold mb-4">
          Fake Home Page
        </h1>
        <p className="text-slate-600 max-w-xl">
          This is dummy content to test the sticky navbar.
          Scroll down and the navbar should stay at the top.
        </p>
      </div>
    </>
  );
};

export default Home;
