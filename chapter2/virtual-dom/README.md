- jsx를 console.log로 찍어보면 아래와 같다.

```html
<a key="key1" style="{{width:" 100}} href="https://reactjs.org"> click here </a>
```

```json
{
    $$typeof: Symbol(react.element),
    key: "key1",
    props: {
        children: "click here"
        href: "https://reactjs.org"
        style: {width: 100}
    },
    ref: null,
    type: "a",
    _owner: null,
    _store: {validated: false},
}
```

- 상태값이 바뀔때마다 리액트는 메모리에 보관중인 가상돔과 비교하여, 변경분만 HTML에 반영한다.
- dom상태값이 변경시 변경될 부분만 다시 렌더링한다.(전체렌더링 X)
- 컴포넌트상태값이 변경시 unmount 후 다시 mount한다.
  - 컴포넌트가 추가되는것을 mount라고 한다.
  - 컴포넌트가 mount될때는 useState에 첫번째 매개변수 입력된 초기값이 상태값으로 할당이 된다.
  - 컴포넌트가 제거되는것을 unmount라고 한다.
