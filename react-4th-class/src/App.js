import './App.css';
import CollapseibleItem from './components/makingCollapseBar/colapsibleBar';
import UserForm from './components/Users/userForms';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="back">
      <CollapseibleItem title="19) Introducing a human.">
      <h2>Below is the name of a human being.</h2>
      <p>Saad Farhan</p>
      </CollapseibleItem>
      <Users />
      <UserForm />
    </div>
  );
}

export default App;
