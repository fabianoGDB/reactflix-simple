export const Card = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars"></Card>
      <Card title="Avatar"></Card>
      <Card title="Lion King"></Card>
    </div>
  );
};

export default App;
