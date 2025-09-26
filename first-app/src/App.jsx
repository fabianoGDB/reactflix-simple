import { useState } from "react";

export const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className="card">
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(true)}>Like</button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} isCool={true}></Card>
      <Card title="Avatar"></Card>
      <Card title="Lion King"></Card>
    </div>
  );
};

export default App;
