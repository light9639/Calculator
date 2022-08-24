# :zap: Calculator 프로젝트 소개
:octocat: 바로가기 https://light9639.github.io/Calculator/

![화면 캡처 2022-08-22](https://raw.githubusercontent.com/light9639/Calculator/master/src/assets/light9639.github.io_Calculator_.png)

:sparkles: React 계산기 사이트입니다. :sparkles:

## :rocket: 시작하는 법
미리보기를 원하신다면 다운로드 후 yarn을 설치하고
```bash
yarn vite
# or
yarn dev
```
를 누르고 http://127.0.0.1:5173/ 로 접속하면 미리보기 화면을 띄울 수 있습니다.
## :calendar: 개발인원 및 기간
- 1인 개발 2022.08.20 ~ 2022.08.22(3일 소요)
## :dart: 개발 목적
- React의 useState 기능을 이용하여 계산을 효과적으로 하기 위해 만들게 되었습니다.
## :black_nib: 구현기능
- React의 useState 기능과 계산하고 Styled Component로 레이아웃을 만든 React 계산기입니다.
## :hammer_and_wrench: 적용 기술
### :zap: React
- useState 기능을 이용하여 값을 계산하거나 리셋 지우기 기능을 구현하였습니다.
- onClick 이벤트를 Button과 CalButton에 적용하여 계산식을 작성했습니다.
- 자바스크립트 정규식을 사용하여 0으로 나눴을 때 경고창이 뜨도록 하였습니다.
### :zap: Styled Component
- Styled Component를 이용하여 MainContainer, ButtonContainer, Button을 만들고 그에 맞는 Css를 추가하여 디자인하였습니다.
### :zap: Vite
- WebPack을 사용하는 대신 Vite라는 2세대 번들링 툴을 사용하여 서버에서 작동하는 JS의 크기를 줄이고 속도를 높였습니다.
