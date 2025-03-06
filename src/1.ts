import { createElement } from "react";

const Card = (props) => {
  const { title, body } = props;

  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Card title="Hello World" body="This is a card with a title and some content." />
    </div>
  );
};

export default App;
