import React from "react";
import {act, cleanup, render, screen, wait, waitFor} from "@testing-library/react";
import {mocked} from "ts-jest/utils";
import AccountService from "../../../assets/accounts/AccountService";
import AccountDisplay from "../../../assets/accounts/AccountDisplay";
import { shallow } from "enzyme";
import AccountTiles from "../../../assets/accounts/AccountTiles";
import AccountList from "../../../assets/accounts/AccountList";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

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

jest.mock('../../../assets/accounts/AccountService');

afterEach(cleanup);

describe("AccountDisplay rendering", () => {
  test("AccountDisplay makes service request and displays result correctly", async () => {
    mocked(AccountService.getAccounts).mockResolvedValue(accounts);
    render(<AccountDisplay/>);

    expect(screen.queryByText("myAccount")).toBeNull();
    await wait();

    expect(screen.queryByText("myAccount")).toBeDefined();
  });

  test("AccountDisplay can be viewed as tiled and tabled list", async () => {
    const wrapper = shallow(<AccountDisplay/>);

    expect(wrapper.find(AccountTiles)).toHaveLength(1);
    expect(wrapper.find(AccountList)).toHaveLength(0);

    const toggleGroup = wrapper.find(ToggleButtonGroup);

    toggleGroup.simulate('change');
    wrapper.update();

    expect(wrapper.find(AccountTiles)).toHaveLength(0);
    expect(wrapper.find(AccountList)).toHaveLength(1);
  });
});
