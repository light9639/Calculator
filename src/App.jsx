import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [calc, setCalc] = useState("");
  const [operCheck, setOperCheck] = useState(true);
  const [pointCheck, setPointCheck] = useState(true);

  const getNum = (e) => {
    setCalc((prev) => prev + e.target.value);
    setOperCheck(true);
  };

  const getOper = (e) => {
    if (operCheck) {
      setCalc((prev) => prev + e.target.value);
      setOperCheck(false);
    }
  };

  const getPoint = (e) => {
    if (calc.length === 0) {
      return;
    }
    if (pointCheck) {
      setCalc((prev) => prev + e.target.value);
      setPointCheck(false);
    }
  };

  const getResult = () => {
    let replace_str = calc.replace(/×/gi, "*").replace(/÷/gi, "/");

    if (isNaN(eval(replace_str))) {
      setCalc("");
    } else if (eval(replace_str) == Infinity) {
      alert("0으로 나눌수 없습니다.");
      setCalc("");
      return false;
    } else {
      setCalc((prev) => eval(replace_str));
    }
  };

  const delCalc = () => {
    setPointCheck(true);
    setOperCheck(true);
    let str = String(calc).slice(0, -1);
    setCalc((prev) => str);
  };

  const allClear = () => {
    setPointCheck(true);
    setCalc((prev) => "");
  };

  return (
    <div className="App">
      <MainContainer>
        <h1>React 계산기</h1>
        <InputBar readOnly value={calc} />
        <ButtonContainer>
          <TopButton onClick={allClear}>AC</TopButton>
          <TopButton onClick={delCalc}>DEL</TopButton>
          <TopButton value="%" onClick={getOper}>
            %
          </TopButton>
          <CalButton value="÷" onClick={getOper}>
            ÷
          </CalButton>
          <Button value={7} onClick={getNum}>
            7
          </Button>
          <Button value={8} onClick={getNum}>
            8
          </Button>
          <Button value={9} onClick={getNum}>
            9
          </Button>
          <CalButton value="×" onClick={getOper}>
            ×
          </CalButton>
          <Button value={4} onClick={getNum}>
            4
          </Button>
          <Button value={5} onClick={getNum}>
            5
          </Button>
          <Button value={6} onClick={getNum}>
            6
          </Button>
          <CalButton value="-" onClick={getOper}>
            -
          </CalButton>
          <Button value={1} onClick={getNum}>
            1
          </Button>
          <Button value={2} onClick={getNum}>
            2
          </Button>
          <Button value={3} onClick={getNum}>
            3
          </Button>
          <CalButton value="+" onClick={getOper}>
            +
          </CalButton>
          <ZeroButton value={0} onClick={getNum}>
            0
          </ZeroButton>
          <Button value="." onClick={getPoint}>
            .
          </Button>
          <CalButton onClick={getResult}>=</CalButton>
        </ButtonContainer>
      </MainContainer>
    </div>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ButtonContainer = styled.div`
  display: grid;
  width: 40%;
  max-width: 475px;
  height: 50%;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  @media screen and (max-width: 1024px) {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
  }
  @media screen and (max-width: 640px) {
    width: 98%;
    height: 50%
  }
`;

const Button = styled.button`
  background-color: #333;
  border: none;
  color: #fff;
  font-size: 2rem;
  border-radius: 30px;
  cursor: pointer;
  transition: .5s;
  &:hover {
    background-image: linear-gradient(135deg, #f83600 0%, #f9d423 100%);
  }
  &:active {
    margin-left: 2px;
    margin-top: 2px;
    box-shadow: none;
  }
`;

const TopButton = styled(Button)`
  font-size: 1.75rem;
`;

const CalButton = styled(Button)`
  background-color: #f09a36;
`;

const ZeroButton = styled(Button)`
  grid-column: 1/3;
`;

const InputBar = styled.input`
  width: 40%;
  max-width: 450px;
  height: 75px;
  margin-bottom: 25px;
  border-radius: 10px;
  font-size: 32px;
  border: none;
  text-align: right;
  padding-right: 20px;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 1024px) {
    width: 380px;
  }
  @media screen and (max-width: 480px) {
    max-width: 98%;
    width: 90%;
  }
`;

export default App;