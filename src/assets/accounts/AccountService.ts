import {AxiosResponse} from "axios";
import {Account} from "../../models/Account";
import axiosInstance from "../../shared/axios";

class AccountService {
  static getAccounts = async () => {
    return await axiosInstance.get("https://run.mocky.io/v3/1a0f21ef-f96b-4b94-92a4-7afea097e0fb")
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