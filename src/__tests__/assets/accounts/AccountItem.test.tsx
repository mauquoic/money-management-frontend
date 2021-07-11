import React from "react";
import {AccountItem} from "../../../assets/accounts/AccountItem";
import {cleanup, render} from "@testing-library/react";

const account = {
  "id": 1,
  "name": "myAccount",
  "description": "This is a description.",
  "currency": "CHF",
  "amount": 100
};

afterEach(cleanup);

describe("AccountItem rendering", () => {
  test("AccountItem is rendered correctly", () => {
    const accountItem = render(<AccountItem account={account} />);
    expect(accountItem).toMatchSnapshot();
  });
});