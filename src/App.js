import { useEffect } from 'react';
import { Header } from './common/Header';
import useLoadContent from './common/hooks/useLoadContent';
import RuneList from './features/RuneList';
import RunewordList from './features/RunewordList';
import UniqueItemsList from './features/UniqueItemsList';
import SetItemsList from './features/SetItemsList';
import { HashRouter, Route, Navigate, Routes } from 'react-router-dom';
import { toRunes, toRunewords, toSets, toUniques } from './common/config/routes';
import { ScrollToTopButton } from './common/ScrollToTopButton';
import github_icon from '../src/images/Icons/github_icon.png'
import coffee_icon from '../src/images/Icons/coffee_icon.png'
import { SlideOutLink } from './common/SlideOutLink';

function ScrollToTop({ dataType }) {
  const state = useLoadContent(dataType);
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
        <Route path={toRunes()} element={<RuneList dataType="runeAndRuneword" />} />

        <Route path={toRunewords()} element={<RunewordList dataType="runeAndRuneword" />} />

        <Route path={toUniques()} element={<UniqueItemsList dataType="uniqueAndSet" />} />

        <Route path={toSets()} element={<SetItemsList dataType="uniqueAndSet" />} />

        <Route path="/" element={<Navigate to={toRunes()} />} />
      </Routes>

      <SlideOutLink
        icon={github_icon}
        text="Follow Me"
        href="https://github.com/bartosz-kasprzyk"
        $bottom="280px"
        $color="#21262D"
        $translateX="-110px"
      />
      <SlideOutLink
        icon={coffee_icon}
        text="Buy Me A Coffee"
        href="https://buymeacoffee.com/bkasprzyk"
        $bottom="200px"
        $color="#9D590C"
        $translateX="-170px"
      />
      <ScrollToTopButton />
    </HashRouter>
  )
};

export default App;
