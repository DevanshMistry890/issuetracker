import './App.css';
import './index.css';
import IssueTable from './components/IssueTable';
import AddIssueForm from './components/AddIssueForm';
import FilterIssues from './components/FilterIssues';
import CounterApp from './components/counter2';

function App() {
  return (
    /*
    <div className="App">
      <header className='m-5 center'>
        <h1>Issue Tracker</h1>
      </header>
      <main>
        <AddIssueForm />
        <hr></hr>
        <FilterIssues />
        <hr></hr>
        <IssueTable />
      </main>
    </div>*/
    <div>
      <CounterApp></CounterApp>
    </div>
  );
}


export default App;