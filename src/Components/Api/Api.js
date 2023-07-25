import axios from "axios";
export let USER_API_URL = "https://smartboxcleaningservices.com/api";
// export let USER_API_URL = "/api";
class Api {
  sendmail(user) {
    return axios.post(`${USER_API_URL}/quote.php`, user);
  }
}
export default new Api();
