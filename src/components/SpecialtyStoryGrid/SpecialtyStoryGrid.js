import React from "react";
import styled from "styled-components/macro";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";
import { QUERIES } from "../../constants";

import MarketCard from "../MarketCard";
import SectionTitle from "../SectionTitle";
import MiniStory from "../MiniStory";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <OverflowWrapper>
          <SportsStories>
            {SPORTS_STORIES.map((data) => (
              <MiniStory key={data.id} {...data} />
            ))}
          </SportsStories>
        </OverflowWrapper>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: 1fr 1fr;
    gap: 0px;

    > *:first-child {
      padding-right: 16px;
      border-right: 1px solid var(--color-gray-300);
    }

    > *:last-child {
      margin-left: 16px;
    }
  }
`;

const MarketsSection = styled.section``;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
`;

const SportsSection = styled.section`
  @media ${QUERIES.tabletAndUp} {
    overflow-x: scroll;
  }
`;

const OverflowWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    overflow-x: scroll;
  }
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));

  @media ${QUERIES.tabletAndUp} {
    display: block;
    white-space: nowrap;

    > * {
      width: 220px;
      display: inline-block;
    }

    > *:not(:last-of-type) {
      margin-right: 16px;
    }
  }
`;

export default SpecialtyStoryGrid;
