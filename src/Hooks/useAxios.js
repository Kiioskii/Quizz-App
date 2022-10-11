import React from "react";
import axios from "axios";

axios.defaults.baseURL = "https://opentdb.com";

const useAxios = ({ url }) => {
  const [response, setResponse] = React.useState(null);
  const [errors, setErrors] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fechData = () => {
      axios
        .get(url)
        .then((res) => setResponse(res.data))
        .catch((err) => setErrors(err))
        .finally(() => setLoading(false));
    };
    fechData();
  }, [url]);
  return { response, errors, loading };
};

export default useAxios;
