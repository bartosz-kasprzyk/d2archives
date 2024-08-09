import { StyledText, StyledRune } from "./styled";
import ElRune from "../../images/RuneEl.webp"

const RuneList = () => {

    return (
        <>
            <StyledText>Rune List</StyledText>
            <StyledRune src={ElRune} alt="El Rune" />
        </>
    )
};

export default RuneList;