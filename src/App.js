import { Header } from './common/Header';
import RuneList from './features/RuneList';
import RunewordList from './features/RunewordList';
import { HashRouter, Route, Navigate, Routes } from 'react-router-dom';
import { toRunes, toRunewords } from './common/config/routes';
import { ScrollToTopButton } from './common/ScrollToTopButton';

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path={toRunes()} element={<RuneList />} />

        <Route path={toRunewords()} element={<RunewordList />} />

        <Route path="/" element={<Navigate to={toRunes()} />} />
      </Routes>

      <ScrollToTopButton />
    </HashRouter>
  )
};

export default App;
