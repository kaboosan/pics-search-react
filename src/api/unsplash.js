import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID 51bca5f58b4229438bac984fde50192a2639574e6c4c2c07d9984811071153f2"
      }
});
