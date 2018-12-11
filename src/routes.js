import React from "react";
import Search from "./components/Search";
import Album from "./components/Album";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import styled from "styled-components";
import { media } from "./style";

const Wrapper = styled.div`
  display: inline-flex;
  width: 85%;
  padding-top: 35px;

  ${media.tablet`
    width: 100%;
    display:flex;
    padding-top: 15px;
  `}
`;

const Routes = () => {
  return (
    <Wrapper className="routes_wrapper">
      <Route exact={true} path={"/"} component={Search} />
      <Route path={"/album/:id"} component={Album} />
    </Wrapper>
  );
};

export default Routes;
