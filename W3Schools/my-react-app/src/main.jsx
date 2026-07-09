import { createRoot } from 'react-dom/client'

function Son(props) {
  return (
    <div style={{background: 'lightgreen'}}>
      <h2>Son {props.name}</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Daughter(props) {
  const {brand, name} = props;
  return (
    <div style={{background: 'lightblue'}}>
      <h2>Daughter {name}</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Parent() {
  return (
    <div>
      <h1>My two Children</h1>
      <Son name="Tony">
        <p>
          This was written in the Parent component,
          but displayed as a part of the Son component
        </p>
      </Son>
      <Daughter name="Kiara">
        <p>
          This was written in the Parent component,
          but displayed as a part of the Daughter component
        </p>
      </Daughter>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <Parent />
);