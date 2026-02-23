import React, { useState } from "react";
import { Loading } from "../../common/Loading";
import { Container } from "../../common/Container";
import {
  ColumnHeader,
  ImageSubtitle,
  ImageTitle,
  RowHeader,
  StyledBigImage,
  StyledTable,
  TableCell,
  TableRow,
  TableWrapper,
} from "../../common/Table/styled";
import { formatText } from "../../common/config/formatText";
import { useLocation } from "react-router-dom";
import images from "../../utils/loadImages";
import useLoadContent from "../../common/hooks/useLoadContent";
import {
  StyledKeyword,
  StyledLink,
  StyledText,
} from "../../common/CommonStyles/styled";
import { toSets } from "../../common/config/routes";
import { SearchBar } from "../../common/SearchBar";
import { NoResults } from "../../common/NoResults";
import { useScreenWidth } from "../../common/hooks/useScreenWidth";
import { Navigation } from "../../common/Header/Navigation";
import { useTheme } from "styled-components";
import { DataType, UniqueAndSetData } from "../../types";
import { Footer } from "../../common/Footer";

const UniqueItemsList = ({ dataType }: { dataType: DataType }) => {
  const theme = useTheme();

  const state = useLoadContent(dataType);
  const content = state.content as UniqueAndSetData;

  const screenWidth = useScreenWidth();
  const isLargeScreen = screenWidth > 767;

  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  if (!content) {
    return <Loading dataType={dataType} />;
  }

  const filteredUniqueItems = Object.values(content.content.uniqueItems).filter(
    (uniqueItem) => {
      const nameMatch = uniqueItem.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const typeMatch = uniqueItem.type
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const categoryMatch = uniqueItem.category
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const propsMatch = uniqueItem.props.some((prop) =>
        prop.toLowerCase().includes(searchQuery.toLowerCase()),
      );

      return nameMatch || typeMatch || categoryMatch || propsMatch;
    },
  );

  return (
    <Container>
      {!isLargeScreen && <Navigation />}

      <StyledText>
        <StyledKeyword $color={theme.color.unique}>Unique Items</StyledKeyword>{" "}
        are by far the most sought-after, possessing many magical properties
        that no Magical, Rare, or Crafted Item has. There is usually only one
        Unique item for every type of weapon and armor in the game. Unique items
        are denoted by their names being colored gold.{" "}
        <StyledLink to={toSets()}>Set Items</StyledLink> are different from
        Unique ones, but very similar to them in terms of how they work and
        rarity.
      </StyledText>

      <SearchBar
        placeholder={"Search uniques..."}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {filteredUniqueItems.length === 0 ? (
        <NoResults
          text={
            "Ahh...  It seems your search has led to a dead end, my friend. Perhaps you should try a different path."
          }
        />
      ) : (
        <TableWrapper>
          <StyledTable>
            <thead>
              <TableRow $index={0}>
                <ColumnHeader>Item</ColumnHeader>
                {isLargeScreen && <ColumnHeader>Category</ColumnHeader>}
                <ColumnHeader>Properties</ColumnHeader>
              </TableRow>
            </thead>
            <tbody>
              {filteredUniqueItems.map((uniqueItem, index) => {
                const imageKey = uniqueItem.image
                  .replace(/^\/images\//, "")
                  .replace(/\.(png|jpg|gif|jpeg)$/, "");
                const imageSrc = images[imageKey] || "/default_image.png";

                return (
                  <TableRow key={uniqueItem.name} $index={index + 1}>
                    <RowHeader $color={theme.color.unique}>
                      <StyledBigImage src={imageSrc} alt={uniqueItem.name} />
                      <div style={{ marginTop: "-15px" }}>
                        <ImageTitle>
                          {formatText({
                            text: uniqueItem.name,
                            currentPath: location.pathname,
                            searchQuery: searchQuery,
                          })}
                        </ImageTitle>
                        <ImageSubtitle>
                          {formatText({
                            text: uniqueItem.type,
                            currentPath: location.pathname,
                            searchQuery: searchQuery,
                          })}
                        </ImageSubtitle>
                        <div
                          style={{
                            fontSize: "0.70em",
                            marginTop: "3px",
                            color: theme.color.white.soft,
                          }}
                        >
                          {!isLargeScreen &&
                            formatText({
                              text: uniqueItem.category
                                .split(" ")
                                .slice(0, 2)
                                .join(" "),
                              currentPath: location.pathname,
                              searchQuery: searchQuery,
                            })}
                        </div>
                      </div>
                    </RowHeader>

                    {isLargeScreen && (
                      <TableCell>
                        {formatText({
                          text: uniqueItem.category
                            .split(" ")
                            .slice(0, 2)
                            .join(" "),
                          currentPath: location.pathname,
                          searchQuery: searchQuery,
                        })}
                      </TableCell>
                    )}
                    <TableCell>
                      {uniqueItem.props.map((prop, propIndex, propsArray) => {
                        const reqLevelIndex = propsArray.findIndex((p) =>
                          p.startsWith("Required Level:"),
                        );
                        const isRequires = prop.startsWith("Required");

                        return (
                          <div
                            key={propIndex}
                            style={{
                              color:
                                propIndex <= reqLevelIndex
                                  ? isRequires
                                    ? theme.color.required
                                    : theme.color.white.soft
                                  : theme.color.magic,
                            }}
                          >
                            {formatText({
                              text: prop,
                              currentPath: location.pathname,
                              searchQuery: searchQuery,
                            })}
                          </div>
                        );
                      })}
                    </TableCell>
                  </TableRow>
                );
              })}
            </tbody>
          </StyledTable>
        </TableWrapper>
      )}
      <Footer />
    </Container>
  );
};

export default UniqueItemsList;
