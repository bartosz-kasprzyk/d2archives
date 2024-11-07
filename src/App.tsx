import { useEffect, useState } from 'react';
import { Header } from './common/Header';
import useLoadContent from './common/hooks/useLoadContent';
import RuneList from './features/RuneList';
import RunewordList from './features/RunewordList';
import UniqueItemsList from './features/UniqueItemsList';
import SetItemsList from './features/SetItemsList';
import { HashRouter, Route, Navigate, Routes, useLocation } from 'react-router-dom';
import { toRunes, toRunewords, toSets, toUniques } from './common/config/routes';
import { ScrollToTopButton } from './common/ScrollToTopButton';
import github_icon from '../src/images/Icons/github_icon.png';
import coffee_icon from '../src/images/Icons/coffee_icon.png';
import feedback_icon from '../src/images/Icons/feedback_icon.png';
import { SlideOutLink } from './common/SlideOutLink';
import { DataType } from './types';
import { Form } from './common/Form';

function ScrollToTop() {
  const location = useLocation();
  const dataType: DataType = location.pathname.includes('runewords') || location.pathname.includes('runes')
    ? 'runeAndRuneword'
    : 'uniqueAndSet';

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
  const [isFeedbackOpen, setFeedbackOpen] = useState(false);

  const toggleFeedbackForm = () => setFeedbackOpen(prev => !prev);

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
        text="Visit My GitHub"
        href="https://github.com/bartosz-kasprzyk"
        $bottom="280px"
        $bottomPhone="200px"
        $color="#21262D"
        $translateX="-165px"
        $translateXPhone="-85px"
      />
      <SlideOutLink
        icon={coffee_icon}
        text="Buy Me A Coffee"
        href="https://buymeacoffee.com/bkasprzyk"
        $bottom="200px"
        $bottomPhone="140px"
        $color="#9D590C"
        $translateX="-170px"
        $translateXPhone="-90px"
      />
      <SlideOutLink
        icon={feedback_icon}
        text="Give Feedback"
        onClick={toggleFeedbackForm}
        $bottom="120px"
        $bottomPhone="80px"
        $color="#1B9718"
        $translateX="-145px"
        $translateXPhone="-75px"
      />

      {isFeedbackOpen && <Form onClose={toggleFeedbackForm} />}
      <ScrollToTopButton />
    </HashRouter>
  )
};

export default App;
