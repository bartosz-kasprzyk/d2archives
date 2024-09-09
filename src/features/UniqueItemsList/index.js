import React from 'react';
import useUniqueItems from '../../common/hooks/useUniuqueItems';
import d2error from '../../images/d2error.gif'
import { StyledError, StyledLink, StyledList, StyledWrapper } from './styled';
import { StyledText } from '../RuneList/styled';
import { Loading } from '../../common/Loading';

const UniqueItemsList = () => {
    const { items, loading } = useUniqueItems();

    if (loading) return <Loading />;

    return (
        <StyledWrapper>
            <StyledText>
                Unique item list with properties is currently unavailable.
            </StyledText>
            <StyledError src={d2error} alt="error" />
            <StyledText>
                If you know of an API or JSON file containing this information or have any leads, please <StyledLink href="mailto:bartosz.kasprzyk58@gmail.com">contact me</StyledLink>!
            </StyledText>
            <StyledList>
                {items
                    .filter(item => item.name !== "Armor"
                        && item.name !== "Expansion"
                        && item.name !== "Odium"
                        && item.name !== "Rings"
                        && item.name !== "Zakarum's Salvation"
                        && item.name !== "Class Specific"
                        && item.name !== "Constricting Ring"
                        && item.name !== "Hell Forge Hammer"
                        && item.name !== "Horadric Staff"
                        && item.name !== "KhalimFlail"
                        && item.name !== "SuperKhalimFlail"
                        && item.name !== "Staff of Kings"
                        && item.name !== "Amulet of the Viper")
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
            </StyledList>
        </StyledWrapper>
    );
};

export default UniqueItemsList;