import React, { useState, useEffect } from "react";
import Button from "./components/button/button";
import "./App.css";
import Input from "./components/input/input";
import * as math from "mathjs";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (value) => {
    if (["+", "-", "x", "÷"].includes(value)) {
      setInputValue((prevValue) => prevValue + " " + value + " ");
    } else {
      setInputValue((prevValue) => prevValue + value);
    }
  };
  const handleLogarithmClick = () => {
    const logarithmValue = Math.log10(parseFloat(inputValue));
    setInputValue(logarithmValue.toString());
  };
  
  const handleSquareRootClick = () => {
    const squareRootValue = Math.sqrt(parseFloat(inputValue));
    setInputValue(squareRootValue.toString());
  };
  const handleAllClearClick = () => {
    setInputValue("");
  };
  const handleDerivativeClick = () => {
    try {
      const derivativeValue = math.derivative(inputValue, "x").toString();
      setInputValue(derivativeValue);
    } catch (error) {
      setInputValue("Hata");
    }
  };
    
  

  const handlePercentageClick = () => {
    const percentage = parseFloat(inputValue) / 100;
    setInputValue(percentage.toString());
  };

  const handleNegationClick = () => {
    setInputValue((prevValue) => {
      if (prevValue.charAt(0) === "-") {
        return prevValue.slice(1);
      } else {
        return "-" + prevValue;
      }
    });
  };

  const handleSquareClick = () => {
    const squaredValue = Math.pow(parseFloat(inputValue), 2);
    setInputValue(squaredValue.toString());
  };

  const handleClearClick = () => {
    setInputValue((prevValue) => prevValue.slice(0, -1));
  };
  

const handleEqualClick = () => {
  try {
    const expression = inputValue.replaceAll("x", "*").replaceAll("÷", "/");
    const result = math.evaluate(expression);
    setInputValue(result.toString());
  } catch (error) {
    setInputValue("Hata");
  }
};


  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <div className="App">
      <div className="xyz">
        <div className="opqw">
        <Input value={inputValue} onChange={setInputValue} />
        </div>
      
      <div className="total">
        <div className="first">
          <Button onClick={handlePercentageClick} first="%" />
          <Button onClick={() => handleButtonClick("7")} first="7" />
          <Button onClick={() => handleButtonClick("4")} first="4" />
          <Button onClick={() => handleButtonClick("1")} first="1" />
          <Button onClick={handleNegationClick} first="+/-" />
          <Button onClick={handleLogarithmClick} first="log" />
        </div>
        <div className="second">
          <Button onClick={handleSquareClick} third="x²" />
          <Button onClick={() => handleButtonClick("8")} second="8" />
          <Button onClick={() => handleButtonClick("5")} second="5" />
          <Button onClick={() => handleButtonClick("2")} second="2" />
          <Button onClick={() => handleButtonClick("0")} second="0" />
          <Button onClick={handleSquareRootClick} first="√" />
        </div>
        <div className="third">
        <Button onClick={handleAllClearClick} first="C" />
          <Button onClick={() => handleButtonClick("9")} third="9" />
          <Button onClick={() => handleButtonClick("6")} third="6" />
          <Button onClick={() => handleButtonClick("3")} third="3" />
          <Button onClick={() => handleButtonClick(",")} third="," />
          <Button onClick={handleDerivativeClick} first="dx" />

        </div>
        
        <div className="fourth">
          <Button onClick={handleClearClick} fourth="⬅" />
          <Button onClick={() => handleButtonClick("x")} fourth="x" />
          <Button onClick={() => handleButtonClick("-")} fourth="-" />
          <Button onClick={() => handleButtonClick("+")} fourth="+" />
          <Button onClick={() => handleButtonClick("÷")} second="÷" />
          <Button onClick={handleEqualClick} equalSign="=" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
