import { NoResultsText, NoResultsWrapper, SpeechBubble, StyledImage } from "./styled";
import cain from '../../images/Decard_Cain.webp'

export const NoResults = ({ text }: { text: string }) => {
    return (
        <main>
            <NoResultsWrapper>
                <SpeechBubble>
                    <NoResultsText>
                        {text}
                    </NoResultsText>
                </SpeechBubble>
                <StyledImage src={cain} />
            </NoResultsWrapper>
        </main>
    );
};