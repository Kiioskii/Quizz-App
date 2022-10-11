import React from "react";

const useFech = (API_URL) => {
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    const fechQuestions = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res?.json();
        const questionsData = data?.results;

        setQuestions(questionsData);
      } catch (err) {
        throw new Error(err);
      }
    };
    fechQuestions();
  }, [API_URL]);

  return { questions };
};

export default useFech;
