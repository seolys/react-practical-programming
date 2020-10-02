## React-Router-DOM

- 다양한 조건으로 컴포넌트를 렌더링.
- 코드 스플릿팅.(코드분할)
  - 페이지 단위로 코드 분할
- BrouserRouter: 현재 페이지의 상태값을 관리해준다.
- Link: 클릭했을 때, to에 해당하는 경로로 이동시켜준다.
- Route: path정보에 따라서 어떤 컴포넌트를 렌더링할지 결정을 해준다.
  - exact: path가 완전히 매칭되었을때만 컴포넌트를 렌더링한다. exact를 넣지않으면, /photo나 /rooms일때도 /가 포함되어있기때문에 Home컴포넌트가 같이 렌더링되는데 그런부분을 방지한다.

설치

```
npm install react-router-dom
```
