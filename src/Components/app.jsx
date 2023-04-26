import React, { useState } from "react";
import Display from "./display";
import Button from "./value";
import data from "./btn.js";
import Footer from "./Footer";

function App() {
  const [temp, settemp] = useState(true);
  var [val1, setVal1] = useState([]);
  var [ope, setOpe] = useState([]);
  var [val2, setVal2] = useState([]);
  const [myans, setme] = useState();
  var helper1 = false,
    helper2 = false;
  function handleme(event) {
    setme();
    if (
      temp &&
      event.target.value !== "+" &&
      event.target.value !== "-" &&
      event.target.value !== "/" &&
      event.target.value !== "*" &&
      event.target.value !== "%" &&
      event.target.value !== "+/-" &&
      event.target.value !== "AC" &&
      event.target.value !== "X"
    ) {
      setVal1((previous) => {
        return [...previous, event.target.value];
      });
    } else if (event.target.value === "=") {
      var a = 0,
        c = 0,
        b = 0,
        d = 0;
      var i = 0;
      var j = 0;
      while (i < val1.length) {
        if (val1[i] === ".") {
          helper1 = true;
          i++;
        }
        if (helper1) {
          c /= 10;
          c = +c + +val1[i];
        } else {
          a *= 10;
          a = +a + +val1[i];
        }
        i++;
      }
      a = +a + +(c / 10);
      while (j < val2.length) {
        if (val2[j] === ".") {
          helper2 = true;
          j++;
        }
        if (helper2) {
          d /= 10;
          d = +d + +val2[j];
          console.log(d);
        } else {
          b *= 10;
          b = +b + +val2[j];
        }
        j++;
      }
      b = +b + +(d / 10);
      if (ope[0] === "+") {
        setme(+a + +b);
      } else if (ope[0] === "-") {
        setme(+a - +b);
      } else if (ope[0] === "*") {
        setme(+a * +b);
      } else if (ope[0] === "%") {
        setme((a * b) / 100);
      } else if (ope[0] === "+/-") {
        setme(+a - +b);
      } else {
        setme(+a / +b);
      }
      setVal1([]);
      setVal2([]);
      setOpe([]);
      settemp(true);
    } else if (event.target.value === "AC") {
      setVal1([]);
      setVal2([]);
      setOpe([]);
      setme();
    } else if (event.target.value === "X") {
      if (val2.length !== 0) {
        setVal2((prevValue) => {
          return prevValue.filter((index, item) => {
            return item !== +val2.length - +1;
          });
        });
        //console.log(val2);
      } else if (ope.length !== 0) {
        settemp(true);
        setOpe((prevValue) => {
          return prevValue.filter((index, item) => {
            return item !== +ope.length - +1;
          });
        });
      } else {
        console.log(val1.length);
        setVal1((prevValue) => {
          return prevValue.filter((index, item) => {
            return item !== +val1.length - +1;
          });
        });
      }
    } else if (!temp) {
      setVal2((previous) => {
        return [...previous, event.target.value];
      });
    } else {
      settemp(false);
      setOpe((prevValue) => {
        return [...prevValue, event.target.value];
      });
    }
  }

  /*
    if (event.target.value === "=") {
      setmeand();
    } else if (val1 === 0) {
      handleItem1(event.target.value);
    } else if (ope !== "+") {
      handleOperator(event.target.value);
    } else {
      handleItem2(event.target.value);
    }*/
  //console.log(event.target.value);
  /*function setmeand() {
    setme(+val1 + +val2);
    console.log(myarray);
    //return myans;
  }
  function handleItem2(e) {
    setVal2(e);
    //return val2;
  }
  function handleOperator(e) {
    setOpe(e);
    //return ope;
  }*/
  return (
    <div style={{ marginTop: "10%" }}>
      <div className="polygon1">
        <div>
          <Display
            value1={val1.map((val) => {
              return val;
            })}
            opera={ope}
            value2={val2}
            ans={myans}
          />
        </div>
        <div className="btn">
          {data.map((val) => {
            return <Button value={val} changed={handleme} />;
          })}
        </div>
      </div>
<Footer/>
    </div>
  );
}

export default App;
