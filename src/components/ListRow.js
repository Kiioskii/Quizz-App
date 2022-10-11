import React from "react";

const LsitRow = (props) => {
  const [curentQuestion, setCurentQuestion] = React.useState(0);
  const [curentAnswer, setCurentAnswer] = React.useState([]);
  const [optionChosen, setOptionChosen] = React.useState(null);

  const chosenOption = (option) => {
    setOptionChosen(option);
  };

  // console.log(optionChosen);

  React.useEffect(() => {
    setCurentAnswer(props.answers.data[curentQuestion]);
  }, [curentQuestion, props.answers]);

  // console.log("---------");
  // console.log(curentAnswer);
  // console.log("---------");

  // const answerList = curentAnswer.map((ans, index) => {
  //   return (
  //     <button
  //       key={index}
  //       className="Anser-btn"
  //       onClick={() => chosenOption(ans)}
  //     >
  //       {ans}
  //     </button>
  //   );
  // });

  // return (
  //   <div className="ListRow">
  //     <h1 className="Question">{props.question}</h1>
  //     <div className="Row">{answerList}</div>
  //   </div>
  // );

  console.log(props.answers);
};

export default LsitRow;
