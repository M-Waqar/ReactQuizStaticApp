import React, { useState } from 'react';

const quelink = [
  {
    question: "What is capital of Pakistan ?",
    answeroption: [
      { anstext: 'Islamabad', isCorrect: true },
      { anstext: 'karachi', isCorrect: false },
      { anstext: 'Lahore', isCorrect: false },
      { anstext: 'Faislabad', isCorrect: false },
    ]
  },
  {
    question: "Who is the founder of Pakistan ?",
    answeroption: [
      { anstext: 'Allama Iqbal', isCorrect: false },
      { anstext: 'Quid-e-Azam', isCorrect: true },
      { anstext: 'Imran Khan', isCorrect: false },
      { anstext: 'Nawaz SHarif', isCorrect: false },
    ]
  },
  {
    question: "How many provinces in Pakistan ?",
    answeroption: [
      { anstext: '3', isCorrect: false },
      { anstext: '6', isCorrect: false },
      { anstext: '5', isCorrect: false },
      { anstext: '4', isCorrect: true },
    ]
  },
  {
    question: "Minar Pakistan in which city ?",
    answeroption: [
      { anstext: 'Islamabad', isCorrect: false },
      { anstext: 'Pindi', isCorrect: false },
      { anstext: 'Lahore', isCorrect: true },
      { anstext: 'Peshawar', isCorrect: false },
    ]
  },
  {
    question: "Independence day of Pakistan ?",
    answeroption: [
      { anstext: '01-Mar', isCorrect: false },
      { anstext: '13-Aug', isCorrect: false },
      { anstext: '15-Aug', isCorrect: false },
      { anstext: '14-Aug', isCorrect: true },
    ]
  }
];

function App() {
  const [current, setcurrent] = useState(0);
  const [showres, setshowres] = useState(false);
  const [score,setscore] = useState(0);

  const handleclick = (ans) => {
    if(ans){
      setscore(score + 1);
    }
    let nextque = current + 1;
    if(nextque < quelink.length) {
      setcurrent(nextque);
    } else {
      setshowres(true);
    }
  }

  const restartClick = () => {
    setcurrent(0);
    setshowres(false);
    setscore(0);
  }
  return (
    <div className="mx-auto mt-5 border border-primary rounded" style={{ width: 30 +'rem' }}>
      <div className="text-center bg-primary p-2">
        <h1>Quiz App</h1>
      </div>
      <div>
        {
          showres ? 
          <div className="m-3">
            <h4 className="text-primary text-center">
              You Scored 
              <span className="badge badge-success m-3">{score}</span> / 
              <span className="badge badge-info m-3">{quelink.length}</span>
            </h4>
            <button className="btn btn-block btn-primary mt-5" onClick={restartClick}>Start Again</button>
          </div>
          :
          <>
          <div className="m-3">
            <h4 className="text-primary text-center">
              Question {current} of {quelink.length}
            </h4>
          </div>
          <div className="row">
        <div className="col-7">
          <h6 className="m-2 text-primary">
            {
              quelink[current].question
            }
          </h6>
        </div>
        <div className="col-5">
          {
            quelink[current].answeroption.map((options, index) => (
              <div key={index} className="m-2">
                <button onClick={() => handleclick(options.isCorrect)}
                className="btn btn-outline-success btn-block">
                  { options.anstext }
                </button>
              </div>
            ))
          }
        </div>
      </div>
          </>
        }
      </div>
    </div>
  );
}

export default App;
