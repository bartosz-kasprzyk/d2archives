import { NoResultsText, NoResultsWrapper, SpeechBubble, StyledImage } from "./styled";
import cain from '../../images/Decard_Cain.webp'

export const NoResults = () => {
    return (
        <main>
            <NoResultsWrapper>
                <SpeechBubble>
                    <NoResultsText>Ah, it seems your search has led to a dead end, my friend. Perhaps you should try a different path.</NoResultsText>
                </SpeechBubble>
                <StyledImage src={cain} />
            </NoResultsWrapper>
        </main>
    );
};