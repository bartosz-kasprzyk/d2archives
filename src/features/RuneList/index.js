import { StyledText, StyledRune } from "./styled";
import ElRune from "../../images/RuneEl.webp"
import { Table } from "../../common/Table";

const RuneList = () => {

    return (
        <>
            <StyledText>Rune List</StyledText>
            <StyledRune src={ElRune} alt="El Rune" />
            <Table />
        </>
    )
};

export default RuneList;