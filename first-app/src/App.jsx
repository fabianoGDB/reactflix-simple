import { useState } from "react";

export const Card = ({ title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  );
};

const App = () => {
  const [hasLiked, setHasLiked] = useState();

  return (
    <div className="card-container">
      <Card title="Star Wars"></Card>
      <Card title="Avatar"></Card>
      <Card title="Lion King"></Card>
    </div>
  );
};

export default App;
