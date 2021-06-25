import './App.css'
import FootBallResults from './components/FootBallResults'
import LastTenDaysResults from './components/LastTenDaysResults'
import LastThirtyDaysMultipleCompetitions from './components/LastThirtyDaysMultipleCompetitions'
import LastThirtyDaysResults from './components/LastThirtyDaysResults'

function App() {
  return (
    <div className="App">
      <header className="appHeader">Football results</header>
      <main>
        {/* <FootBallResults/> */}
        <LastThirtyDaysResults />
        <LastTenDaysResults />
        <LastThirtyDaysMultipleCompetitions />
      </main>
    </div>
  )
}

export default App
