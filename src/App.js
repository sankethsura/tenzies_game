import logo from "./logo.svg";
import "./App.css";
import Box from "./box";
import jokeelements from "./jokeelements";
import Joke from "./joke";
import React, { useEffect } from "react";

function App() {
 

  const [randomNo1, setRandomNo1] = React.useState(1);
  const [randomNo2, setRandomNo2] = React.useState(1);
  const [randomNo3, setRandomNo3] = React.useState(1);
  const [randomNo4, setRandomNo4] = React.useState(1);
  const [randomNo5, setRandomNo5] = React.useState(1);
  const [randomNo6, setRandomNo6] = React.useState(1);
  const [randomNo7, setRandomNo7] = React.useState(1);
  const [randomNo8, setRandomNo8] = React.useState(1);
  const [randomNo9, setRandomNo9] = React.useState(1);
  const [randomNo10, setRandomNo10] = React.useState(1);
  const [randomNo11, setRandomNo11] = React.useState(1);
  const [randomNo12, setRandomNo12] = React.useState(1);

  const [firstClickNo, setFirstClickNO] = React.useState(0);

  const [scoreno, setscoreno] = React.useState(0);

  const [isFreeze1, setFreeze1] = React.useState(false);
  const [isFreeze2, setFreeze2] = React.useState(false);
  const [isFreeze3, setFreeze3] = React.useState(false);
  const [isFreeze4, setFreeze4] = React.useState(false);
  const [isFreeze5, setFreeze5] = React.useState(false);
  const [isFreeze6, setFreeze6] = React.useState(false);
  const [isFreeze7, setFreeze7] = React.useState(false);
  const [isFreeze8, setFreeze8] = React.useState(false);
  const [isFreeze9, setFreeze9] = React.useState(false);
  const [isFreeze10, setFreeze10] = React.useState(false);
  const [isFreeze11, setFreeze11] = React.useState(false);
  const [isFreeze12, setFreeze12] = React.useState(false);

  const [text100, setText] = React.useState(
    '"Double-Click" on any of box you like !!!! and then click on "Roll"'
  );
  function textBelowfunc() {
    if (firstClickNo != 0) {
      setText(() => {
        let text5 = `Great !!!, you have fixed the number to "${firstClickNo}" , Now Search for similar numbers`;
        return text5;
      });
    }
  }

  if (
    isFreeze1 == true &&
    isFreeze2 == true &&
    isFreeze3 == true &&
    isFreeze4 == true &&
    isFreeze5 == true &&
    isFreeze6 == true &&
    isFreeze7 == true &&
    isFreeze8 == true &&
    isFreeze9 == true &&
    isFreeze10 == true &&
    isFreeze11 == true &&
    isFreeze12 == true
  ) {
    alert(`You took "${scoreno}" moves to complete the game!!!`);
  }

  useEffect(() => {
    noGenerator();
  }, []);

  function noGenerator() {
    setRandomNo1((e) => {
      let random = Math.floor(Math.random() * 6 + 1);
      
      return random;
    });
    setRandomNo2((e) => {
      let random = Math.floor(Math.random() * 6 + 1);
      return random;
    });
    setRandomNo3((e) => {
      let random = Math.floor(Math.random() * 6 + 1);
      return random;
    });
    setRandomNo4((e) => {
      let random = Math.floor(Math.random() * 6 + 1);
      return random;
    });
    setRandomNo5((e) => {
      let random = Math.floor(Math.random() * 6 + 1);
      return random;
    });
    setRandomNo6((e) => {
      let random = Math.floor(Math.random() * 6 + 1);
      return random;
    });
    setRandomNo7((e) => {
      let random = Math.floor(Math.random() * 6 + 1);
      return random;
    });
    setRandomNo8((e) => {
      let random = Math.floor(Math.random() * 6 + 1);
      return random;
    });
    setRandomNo9((e) => {
      let random = Math.floor(Math.random() * 6 + 1);
      return random;
    });
    setRandomNo10((e) => {
      let random = Math.floor(Math.random() * 6 + 1);
      return random;
    });
    setRandomNo11((e) => {
      let random = Math.floor(Math.random() * 6 + 1);
      return random;
    });
    setRandomNo12((e) => {
      let random = Math.floor(Math.random() * 6 + 1);
      return random;
    });
  }

  function freezefunc1(e) {
    
    if ((isFreeze1 == false && e == firstClickNo) || 0) {
      setFreeze1((e) => {
        return !e;
      });
    }
  }
  function freezefunc2(e) {
    if ((isFreeze2 == false && e == firstClickNo) || 0) {
      setFreeze2((e) => {
        return !e;
      });
    }
  }
  function freezefunc3(e) {
    if ((isFreeze3 == false && e == firstClickNo) || 0) {
      setFreeze3((e) => {
        return !e;
      });
    }
  }
  function freezefunc4(e) {
    if (isFreeze4 == false && e == (firstClickNo || 0)) {
      setFreeze4((e) => {
        return !e;
      });
    }
  }
  function freezefunc5(e) {
    if (isFreeze5 == false && e == (firstClickNo || 0)) {
      setFreeze5((e) => {
        return !e;
      });
    }
  }
  function freezefunc6(e) {
    if (isFreeze6 == false && e == (firstClickNo || 0)) {
      setFreeze6((e) => {
        return !e;
      });
    }
  }
  function freezefunc7(e) {
    if (isFreeze7 == false && e == (firstClickNo || 0)) {
      setFreeze7((e) => {
        return !e;
      });
    }
  }
  function freezefunc8(e) {
    if (isFreeze8 == false && e == (firstClickNo || 0)) {
      setFreeze8((e) => {
        return !e;
      });
    }
  }
  function freezefunc9(e) {
    if (isFreeze9 == false && e == (firstClickNo || 0)) {
      setFreeze9((e) => {
        return !e;
      });
    }
  }
  function freezefunc10(e) {
    if (isFreeze10 == false && e == (firstClickNo || 0)) {
      setFreeze10((e) => {
        return !e;
      });
    }
  }
  function freezefunc11(e) {
    if (isFreeze11 == false && e == (firstClickNo || 0)) {
      setFreeze11((e) => {
        return !e;
      });
    }
  }
  function freezefunc12(e) {
    if (isFreeze12 == false && e == (firstClickNo || 0)) {
      setFreeze12((e) => {
        return !e;
      });
    }
  }

  function firstClick(e) {
    if (firstClickNo == 0) {
      setFirstClickNO(() => {
        return e;
      });
    }
  }

  function Increasefunc() {
    setscoreno((e) => {
      return e + 1;
    });
  }

  let sticky1 = isFreeze1 ? firstClickNo : randomNo1;
  let sticky2 = isFreeze2 ? firstClickNo : randomNo2;
  let sticky3 = isFreeze3 ? firstClickNo : randomNo3;
  let sticky4 = isFreeze4 ? firstClickNo : randomNo4;
  let sticky5 = isFreeze5 ? firstClickNo : randomNo5;
  let sticky6 = isFreeze6 ? firstClickNo : randomNo6;
  let sticky7 = isFreeze7 ? firstClickNo : randomNo7;
  let sticky8 = isFreeze8 ? firstClickNo : randomNo8;
  let sticky9 = isFreeze9 ? firstClickNo : randomNo9;
  let sticky10 = isFreeze10 ? firstClickNo : randomNo10;
  let sticky11 = isFreeze11 ? firstClickNo : randomNo11;
  let sticky12 = isFreeze12 ? firstClickNo : randomNo12;

  let stylecolor1 = {
    backgroundColor: !isFreeze1 ? "rgb(180, 180, 180)" : "#A5C9CA",
  };
  let stylecolor2 = {
    backgroundColor: !isFreeze2 ? "rgb(180, 180, 180)" : "#A5C9CA",
  };
  let stylecolor3 = {
    backgroundColor: !isFreeze3 ? "rgb(180, 180, 180)" : "#A5C9CA",
  };
  let stylecolor4 = {
    backgroundColor: !isFreeze4 ? "rgb(180, 180, 180)" : "#A5C9CA",
  };
  let stylecolor5 = {
    backgroundColor: !isFreeze5 ? "rgb(180, 180, 180)" : "#A5C9CA",
  };
  let stylecolor6 = {
    backgroundColor: !isFreeze6 ? "rgb(180, 180, 180)" : "#A5C9CA",
  };
  let stylecolor7 = {
    backgroundColor: !isFreeze7 ? "rgb(180, 180, 180)" : "#A5C9CA",
  };
  let stylecolor8 = {
    backgroundColor: !isFreeze8 ? "rgb(180, 180, 180)" : "#A5C9CA",
  };
  let stylecolor9 = {
    backgroundColor: !isFreeze9 ? "rgb(180, 180, 180)" : "#A5C9CA",
  };
  let stylecolor10 = {
    backgroundColor: !isFreeze10 ? "rgb(180, 180, 180)" : "#A5C9CA",
  };
  let stylecolor11 = {
    backgroundColor: !isFreeze11 ? "rgb(180, 180, 180)" : "#A5C9CA",
  };
  let stylecolor12 = {
    backgroundColor: !isFreeze12 ? "rgb(180, 180, 180)" : "#A5C9CA",
  };

  return (
    <div className="app">
      <div className="main--screen">
        <div className="heading">Tenzies</div>
        <div className="score">Score</div>
        <div className="scoreNo">{scoreno}</div>
        <div className="text">
          Roll untill all dies are the same. Click each die to freeze it at its
          current value between rolls.
        </div>
        <div className="box--all">
          <div className="first--row">
            <div
              style={stylecolor1}
              onClick={() => {
                freezefunc1(randomNo1);
                firstClick(randomNo1);
              }}
              className="box1"
            >
              <div className="numbers">{sticky1}</div>
            </div>
            <div
              style={stylecolor2}
              onClick={() => {
                freezefunc2(randomNo2);
                firstClick(randomNo2);
              }}
              className="box2"
            >
              <div className="numbers">{sticky2}</div>
            </div>
            <div
              style={stylecolor3}
              onClick={() => {
                freezefunc3(randomNo3);
                firstClick(randomNo3);
              }}
              className="box3"
            >
              <div className="numbers">{sticky3}</div>
            </div>
            <div
              style={stylecolor4}
              onClick={() => {
                freezefunc4(randomNo4);
                firstClick(randomNo4);
              }}
              className="box4"
            >
              <div className="numbers">{sticky4}</div>
            </div>
            <div
              style={stylecolor5}
              onClick={() => {
                freezefunc5(randomNo5);
                firstClick(randomNo5);
              }}
              className="box5"
            >
              <div className="numbers">{sticky5}</div>
            </div>
            <div
              style={stylecolor6}
              onClick={() => {
                freezefunc6(randomNo6);
                firstClick(randomNo6);
              }}
              className="box6"
            >
              <div className="numbers">{sticky6}</div>
            </div>
          </div>
          <div className="second--row">
            <div
              style={stylecolor7}
              onClick={() => {
                freezefunc7(randomNo7);
                firstClick(randomNo7);
              }}
              className="box7"
            >
              <div className="numbers">{sticky7}</div>
            </div>
            <div
              style={stylecolor8}
              onClick={() => {
                freezefunc8(randomNo8);
                firstClick(randomNo8);
              }}
              className="box8"
            >
              <div className="numbers">{sticky8}</div>
            </div>
            <div
              style={stylecolor9}
              onClick={() => {
                freezefunc9(randomNo9);
                firstClick(randomNo9);
              }}
              className="box9"
            >
              <div className="numbers">{sticky9}</div>
            </div>
            <div
              style={stylecolor10}
              onClick={() => {
                freezefunc10(randomNo10);
                firstClick(randomNo10);
              }}
              className="box10"
            >
              <div className="numbers">{sticky10}</div>
            </div>
            <div
              style={stylecolor11}
              onClick={() => {
                freezefunc11(randomNo11);
                firstClick(randomNo11);
              }}
              className="box11"
            >
              <div className="numbers">{sticky11}</div>
            </div>
            <div
              style={stylecolor12}
              onClick={() => {
                freezefunc12(randomNo12);
                firstClick(randomNo12);
              }}
              className="box12"
            >
              <div className="numbers">{sticky12}</div>
            </div>
          </div>
          <button
            onClick={() => {
              noGenerator();
              textBelowfunc();
              Increasefunc();
            }}
            className="roll"
          >
            Roll
          </button>
        </div>
        <div className="text--below">{text100}</div>
      </div>
    </div>
  );
}
export default App;
