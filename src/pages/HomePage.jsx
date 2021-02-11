import logo from "../images/logo/logo.png";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome</h1>

      <h2>ENJOY LOAD OF FUN WHILE ON YOUR...</h2>

      <p className="p-rs-text">
        Work can be extremely tiring, especially working from home being so
        close to your bed. Here's your wakeup call . . .
      </p>
      <img src={logo} />
    </div>
  );
};

export default HomePage;
