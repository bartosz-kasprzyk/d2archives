import { Credits, FooterText, FooterTitle, StyledDrawingSignature, StyledFooter, Sup } from "./styled";
import drawingSignature from "../../images/drawingsignature.png"

export const Footer = () => (
    <StyledFooter>
        <a href="https://github.com/bartosz-kasprzyk">
            <StyledDrawingSignature
                src={drawingSignature}
                alt={"Author's logo linking to his GitHub profile"}
                title={"Bartosz Kasprzyk's GitHub Profile"}
            />
        </a>
        <div>
            <FooterText>
                This page is a fan project and is not affiliated with, endorsed, or approved by Blizzard Entertainment<Sup>®</Sup>. <br />
                All Diablo II assets, trademarks, and copyrights are the property of Blizzard Entertainment<Sup>®</Sup>. <br />
            </FooterText>

            <Credits>
                <FooterTitle>Created by:</FooterTitle>
                <a href="https://github.com/bartosz-kasprzyk" target="_blank" rel="noopener noreferrer">Bartosz Kasprzyk</a>
                <br />
                <FooterTitle>Credits:</FooterTitle>
                <ul>
                    <li>
                        <a href="https://diablo2.blizzard.com/en-gb/" target="_blank" rel="noopener noreferrer">
                            D2R Official Website
                        </a>
                    </li>
                    <li>
                        <a href="https://diablo2.io/" target="_blank" rel="noopener noreferrer">
                            D2R Database, Marketplace & Community
                        </a>
                    </li>
                    <li>
                        <a href="https://diablo.fandom.com/wiki/Diablo_Wiki" target="_blank" rel="noopener noreferrer">
                            Diablo Wiki
                        </a>
                    </li>
                </ul>
            </Credits>
        </div>
    </StyledFooter>
);