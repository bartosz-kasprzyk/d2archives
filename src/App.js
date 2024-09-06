import { Header } from './common/Header';
import RuneList from './features/RuneList';
import RunewordList from './features/RunewordList';
import { HashRouter, Route, Navigate, Routes, useLocation } from 'react-router-dom';
import { toRunes, toRunewords } from './common/config/routes';
import { ScrollToTopButton } from './common/ScrollToTopButton';
import useLoadContent from './common/hooks/useLoadContent';
import { useEffect } from 'react';

function ScrollToTop() {
  const state = useLoadContent();
  const status = state.status;

  useEffect(() => {
    if (status === 'loading') {
      window.scrollTo(0, 0);
    }
  }, [status]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <Header />
      <ScrollToTop />

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
