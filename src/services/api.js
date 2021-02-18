import axios from 'axios';

const http = axios.create({
    baseURL: '/api/',
});


const clientReplace = (k, v) => {
  let value = v;
  if (k === "phone") {
    value = v.replace(/[^0-9]/g, "");
  }
  return value === "" ? null : value;
};

export default {
    getClients() {
        return http.get("client/");
    },
    postClient(client) {
        let json = JSON.stringify(client, clientReplace);
        return http.post("client/", json, {
            headers: {
                'Content-type': 'application/json'
            }
        });
    }
}