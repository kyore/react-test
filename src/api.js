import axios from "axios";

export default {
  user: {
    login: (email, password) =>
      axios.post("api/auth", { email, password }).then((res) => res.data.user),
  },
};
