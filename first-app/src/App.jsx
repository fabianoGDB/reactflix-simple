import { useState } from "react";

export const Card = ({ title, hasLiked, handleHasLiked }) => {
  const liked = hasLiked;
  return (
    <div className="card">
      <h2>{title}</h2>

      <button onClick={() => handleHasLiked(true)}>Like</button>
    </div>
  );
};

const App = () => {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card-container">
      <Card
        title="Star Wars"
        rating={5}
        isCool={true}
        handleHasLiked={setHasLiked}
        hasLiked={hasLiked}
      ></Card>
      <Card title="Avatar"></Card>
      <Card title="Lion King"></Card>
    </div>
  );
};

export default App;
