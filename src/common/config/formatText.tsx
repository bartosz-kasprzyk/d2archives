import React from 'react';
import runeAssets from './runeAssets';
import { HighlightSearch, InfoText, LadderOnlyItem, RotwItem, RuneText, ValueBox } from '../Table/styled';

interface FormatTextProps {
    text: string,
    currentPath: string,
    searchQuery: string
}

const runes = Object.keys(runeAssets);

export const formatText = ({ text, currentPath, searchQuery }: FormatTextProps) => {
    const regex = /(?<!Damage:\s|\bDefense:\s|\bAdds\s)\b\d+-\d+\b/g;

    const runeRegex = new RegExp(`\\b(${runes.join('|')})\\b`, 'gi');

    const lines = text.split('\n');

    const escapeRegExp = (string: string) => {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    const highlightRegex = searchQuery
        ? new RegExp(`(${escapeRegExp(searchQuery)})`, 'gi')
        : null;

    return lines.map((line, lineIndex) => {
        const parts = line.split(/(\*Ladder\u00A0only\*|\(Weapon Version\)|\(Shield Version\)|\(Armor Version\)|\(Sword Version\)|(?<!Adds\s)\b\d+-\d+\b|Damage:\s\d+-\d+|Defense:\s\d+-\d+)/g);

        return (
            <React.Fragment key={lineIndex}>
                {parts.map((part, partIndex) => {
                    if (part === "+Ladder\u00A0only+") {
                        return (
                            <LadderOnlyItem key={partIndex}>
                                {part}
                            </LadderOnlyItem>
                        );
                    } else if (part === "New\u00A0in\u00A0RotW") {
                        return (
                            <RotwItem key={partIndex}>
                                {part}
                            </RotwItem>
                        );
                    } else if (part === "(Weapon Version)" || part === "(Shield Version)" || part === "(Armor Version)" || part === "(Sword Version)") {
                        return (
                            <InfoText key={partIndex}>
                                {part}
                            </InfoText>
                        );
                    } else if ((currentPath === '/runewords' || currentPath === '/uniques' || currentPath === '/sets') && regex.test(part)) {
                        return (
                            <ValueBox key={partIndex}>
                                {part}
                            </ValueBox>
                        );
                    } else if (currentPath === '/runewords' && runeRegex.test(part)) {
                        return part.split(runeRegex).map((subPart, subPartIndex) => {
                            const isRune = runes.some(rune => rune.toLowerCase() === subPart.toLowerCase());

                            const highlightParts = searchQuery && highlightRegex ? subPart.split(highlightRegex) : [subPart];

                            return highlightParts.map((highlightedPart, highlightedIndex) => {
                                const isHighlighted = highlightedPart.toLowerCase() === searchQuery?.toLowerCase();
                                const key = `${subPartIndex}-${highlightedIndex}`;

                                if (isRune) {
                                    return isHighlighted ? (
                                        <RuneText key={key}>
                                            <HighlightSearch >
                                                {highlightedPart}
                                            </HighlightSearch>
                                        </RuneText>
                                    ) : (
                                        <RuneText key={key}>{highlightedPart}</RuneText>
                                    );
                                }
                                return highlightedPart;
                            });
                        });
                    } else if (highlightRegex && highlightRegex.test(part)) {
                        return part.split(highlightRegex).map((subPart, subPartIndex) => {
                            if (subPart.toLowerCase() === searchQuery?.toLowerCase()) {
                                return (
                                    <HighlightSearch key={subPartIndex}>
                                        {subPart}
                                    </HighlightSearch>
                                );
                            }
                            return subPart;
                        });
                    } else {
                        return part;
                    }
                })
                }
                < br />
            </React.Fragment >
        );
    });
};