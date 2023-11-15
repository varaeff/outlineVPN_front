import axios from "axios";

class OutlineVPN {
  constructor(api_url = "https://103.97.88.30:40800/kZCw9g41wN68edwlaZ7Y0A") {
    this.api_url = api_url;
  }

  async get_server_info() {
    try {
      const response = await axios.get(`${this.api_url}/server`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      console.error(err);
    }
  }

  async create_key(name) {
    try {
      const response = await axios.post(`${this.api_url}/access-keys`);
      if (response.status === 201) {
        response.data.name = name;
        const response_1 = await axios.put(
          `${this.api_url}/access-keys/${response.data.id}/name`,
          { name: name }
        );
        if (response_1.status === 204) {
          return response.data;
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  async show_keys() {
    try {
      const response = await axios.get(`${this.api_url}/access-keys`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err) {
      console.error(err);
    }
  }
}

export default OutlineVPN;
