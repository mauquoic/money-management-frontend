import {AxiosResponse} from "axios";
import {Account} from "../../models/Account";
import axiosInstance from "../../shared/axios";

class AccountService {
  static getAccounts = async () => {
    return await axiosInstance.get("/accounts")
      .then((response: AxiosResponse<Array<Account>>) => {
        return response.data
      })
      .catch(() => {
        alert("Unable to retrieve the accounts.");
        return [];
      });
  }
}

export default AccountService;