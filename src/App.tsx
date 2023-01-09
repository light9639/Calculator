import { MouseEvent, useState } from 'react';
import * as S from './Style/Styled'

export default function App(): JSX.Element {
  // UseState 모음
  const [calc, setCalc] = useState<string>("");
  const [operation, setOperation] = useState<boolean>(true);
  const [point, setPoint] = useState<boolean>(true);

  // 숫자 가져오기
  function getNumber(e: MouseEvent<HTMLButtonElement>) {
    setCalc((prev) => prev + (e.target as HTMLTextAreaElement).value);
    setOperation(true);
  };

  // 연산 기호 가져오기
  function getOperation(e: MouseEvent<HTMLButtonElement>) {
    if (operation) {
      setCalc((prev) => prev + (e.target as HTMLTextAreaElement).value);
      setOperation(false);
    }
  };

  // 점(.) 가져오기
  function getPoint(e: MouseEvent<HTMLButtonElement>) {
    if (calc.length === 0) {
      return;
    }
    if (point) {
      setCalc((prev) => prev + (e.target as HTMLTextAreaElement).value);
      setPoint(false);
    }
  };

  // 결과 계산
  function getResult() {
    const replace_str = calc.replace(/×/gi, "*").replace(/÷/gi, "/");

    if ( isNaN(eval(replace_str)) ) {
      setCalc("");
    } else if ( eval(replace_str) == Infinity ) {
      alert("0으로 나눌수 없습니다.");
      setCalc("");
      return false;
    } else {
      setCalc((prev) => eval(replace_str));
    }
  };

  // 수정버튼
  function Delete() {
    setPoint(true);
    setOperation(true);
    const str = String(calc).slice(0, -1);
    setCalc((prev) => str);
  };

  // 모두 지우기
  function allClear() {
    setPoint(true);
    setCalc((prev) => "");
  };

  return (
    <div className="App">
      <S.MainWrapper>
        <h1>React 계산기</h1>
        <S.SearchBar readOnly value={calc} />
        <S.ButtonWrapper>
          <S.TopButton onClick={allClear}>AC</S.TopButton>
          <S.TopButton onClick={Delete}>DEL</S.TopButton>
          <S.TopButton value="%" onClick={getOperation}>
            %
          </S.TopButton>
          <S.CalButton value="÷" onClick={getOperation}>
            ÷
          </S.CalButton>
          <S.Button value={7} onClick={getNumber}>
            7
          </S.Button>
          <S.Button value={8} onClick={getNumber}>
            8
          </S.Button>
          <S.Button value={9} onClick={getNumber}>
            9
          </S.Button>
          <S.CalButton value="×" onClick={getOperation}>
            ×
          </S.CalButton>
          <S.Button value={4} onClick={getNumber}>
            4
          </S.Button>
          <S.Button value={5} onClick={getNumber}>
            5
          </S.Button>
          <S.Button value={6} onClick={getNumber}>
            6
          </S.Button>
          <S.CalButton value="-" onClick={getOperation}>
            -
          </S.CalButton>
          <S.Button value={1} onClick={getNumber}>
            1
          </S.Button>
          <S.Button value={2} onClick={getNumber}>
            2
          </S.Button>
          <S.Button value={3} onClick={getNumber}>
            3
          </S.Button>
          <S.CalButton value="+" onClick={getOperation}>
            +
          </S.CalButton>
          <S.ZeroButton value={0} onClick={getNumber}>
            0
          </S.ZeroButton>
          <S.Button value="." onClick={getPoint}>
            .
          </S.Button>
          <S.CalButton onClick={getResult}>=</S.CalButton>
        </S.ButtonWrapper>
      </S.MainWrapper>
    </div>
  );
}