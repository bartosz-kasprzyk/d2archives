import React from 'react';
import runeImages from './runeImages';
import { CategoryText, InfoText, NewItem, RuneText, ValueBox } from '../Table/styled';

const runes = Object.keys(runeImages);

export const formatText = (text, currentPath) => {
    const regex = /(?<!Adds\s)\b\d+-\d+\b/g;
    const runeRegex = new RegExp(`\\b(${runes.join('|')})\\b`, 'gi');

    const lines = text.split('\n');

    return lines.map((line, lineIndex) => {
        const parts = line.split(/(\*New\*|\(Weapon Version\)|\(Shield Version\)|\(Armor Version\)|\(Sword Version\)|(?<!Adds\s)\b\d+-\d+\b|Weapon:|Helmet\/Armor:|Shield:)/g);

        return (
            <React.Fragment key={lineIndex}>
                {parts.map((part, partIndex) => {
                    if (part === "*New*") {
                        return (
                            <NewItem key={partIndex}>
                                {part}
                            </NewItem>
                        );
                    } else if (part === "(Weapon Version)" || part === "(Shield Version)" || part === "(Armor Version)" || part === "(Sword Version)") {
                        return (
                            <InfoText key={partIndex}>
                                {part}
                            </InfoText>
                        );
                    } else if (part === "Weapon:" || part === "Helmet/Armor:" || part === "Shield:") {
                        return (
                            <CategoryText key={partIndex}>
                                {part}
                            </CategoryText>
                        );
                    } else if (currentPath === '/runewords' && regex.test(part)) {
                        return (
                            <ValueBox key={partIndex}>
                                {part}
                            </ValueBox>
                        );
                    } else if (runeRegex.test(part)) {
                        return part.split(runeRegex).map((subPart, subPartIndex) => {
                            if (runes.some(rune => rune.toLowerCase() === subPart.toLowerCase())) {
                                return (
                                    <RuneText key={subPartIndex}>
                                        {subPart}
                                    </RuneText>
                                );
                            }
                            return subPart;
                        });
                    } else {
                        return part;
                    }
                })}
                <br />
            </React.Fragment>
        );
    });
};