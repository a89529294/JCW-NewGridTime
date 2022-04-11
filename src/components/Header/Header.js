import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { COLORS, QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <HeaderWrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
      <SubscribeWrapper>
        <SubscribeButton>Subscribe</SubscribeButton>
        <SubscriberLink>Already a subscriber?</SubscriberLink>
      </SubscribeWrapper>
    </HeaderWrapper>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    background: var(--color-gray-100);
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.desktopAndUp} {
    margin-left: auto;
  }
`;

const HeaderWrapper = styled(MaxWidthWrapper)`
  @media ${QUERIES.desktopAndUp} {
    position: relative;
    display: flex;
    align-items: center;

    /* ${SuperHeader} {
      position: absolute;
      left: 0;
    }

    ${MainHeader} {
      margin-inline: auto;
    } */
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }

  @media ${QUERIES.desktopAndUp} {
    &:nth-of-type(2) {
      display: none;
    }

    svg {
      color: var(--color-gray-900);
    }
  }
`;

const SubscribeWrapper = styled.div`
  display: none;
  @media ${QUERIES.desktopAndUp} {
    position: absolute;
    right: 32px;
    display: grid;
    gap: 8px;
  }
`;

const SubscribeButton = styled(Button)``;

const SubscriberLink = styled.a`
  font-family: var(--font-family-serif);
  color: var(--color-gray-900);
  font-style: italic;
  font-size: calc(14rem / 16);
  text-align: center;
  text-decoration: underline;
`;

export default Header;
