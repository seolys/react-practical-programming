// 리액트 내부
let hooks = null;

// useState or useEffect or ...
export function useHook() {
  // ...
  hoos.push(hookData);
}

function process_a_component_rendering(component) {
  hooks = []; // 빈 배열 초기화
  component(); // 컴포넌트 실행
  let hooksForThisComponent = hooks;
  hooks = null;
  // ...
}
