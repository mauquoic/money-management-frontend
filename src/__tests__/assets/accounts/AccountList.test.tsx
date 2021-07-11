import React from "react";
import {cleanup, render} from "@testing-library/react";
import AccountList from "../../../assets/accounts/AccountList";

const accounts = [{
  "id": 1,
  "name": "myAccount",
  "description": "This is a description.",
  "currency": "CHF",
  "amount": 100
},
  {
    "id": 2,
    "name": "myAccount2",
    "currency": "USD",
    "amount": 200
  }];

afterEach(cleanup);

describe("AccountList rendering", () => {
  test("AccountList is rendered correctly", () => {
    const accountList = render(<AccountList accounts={accounts}/>);
    expect(accountList).toMatchSnapshot();
  });
});