---
title: "[React] React Web 개발 (1)"
date: "2019-10-24T16:12:03.284Z"
description: "React로 Web 개발 시작하기"
category: develop
tags:
  - develop
  - javascript
  - react
  - web
---

# React

React는 효율적인 사용자 인터페이스를 개발하기 위한 Javascript 라이브러리입니다. 웹 화면을 독립적이고 특정 관심사에 집중된 컴포넌트 단위로 구성하여 복잡한 화면 구성을 비교적 효율적으로 관리할 수 있습니다.

## Hello World

Hello World 를 제목 스타일(`<h1>`)으로 생성하는 컴포넌트입니다.

컴포넌트를 사용하여 React에게 화면에 표현하고 싶은 것이 무엇인지 알려줍니다.
데이터가 변경될 때 React는 컴포넌트를 효율적으로 업데이트하고 다시 렌더링합니다.

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello World</h1>
  }
}
```

`Welcome` 컴포넌트는 React 컴포넌트 클래스 또는 React 컴포넌트 타입입니다.
개별 컴포넌트는 `props`라는 매개변수를 받아오고 `render` 함수를 통해 표시할 뷰 계층 구조를 반환합니다.

“JSX”라는 특수한 문법을 사용하여 React의 구조를 보다 쉽게 작성할 수 있습니다.
`<h1>` 구문은 빌드하는 시점에서 `React.createElement('h1')`로 변환됩니다.

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}
```

## props를 통해 데이터 전달하기

`Main` 컴포넌트에서 `Welcome` 컴포넌트로 `name` 데이터를 전달하는 코드입니다.
`props`는 상위(호출) 컴포넌트는에서 정의하고 자체 컴포넌트에서는 읽기 전용으로 수정할 수 없습니다.

```javascript
class Main extends React.Component {
  render() {
    return <Welcome name="react" />
  }
}
```

`props`는 외부에서 컴포넌트와 소통하는 창구 역할을 합니다. 자체 컴포넌트에서는 초기값(Default)를 설정할 수 있습니다.

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}

Welcome.defaultProps = {
  name: "Default Name",
}
```

## state로 데이터 관리하기
컴포넌트는 무엇인가를 기억하기 위해 `state`를 사용합니다.
React 컴포넌트는 생성자에 `this.state`를 설정하여 `state`를 사용할 수 있습니다. 
`this.state`는 정의된 React 컴포넌트의 `private`한 객체로 생각해야 합니다.
`state`는 `this.setState` 메소드를 통해 값을 설정할 수 있습니다.

```javascript
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>{this.state.value}</h2>
        <button onClick={() => this.setState(
              {value: this.state.value+1}
            )}
        >+
        </button>
      </div>
    )
  }
}
```

별도의 메소드를 호출하는 형태로 구현할 수 있고 이전 `state`와 `props`를 메소드 내에서 참조할 수도 있습니다.

```javascript
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }
  updateValue() {
    this.setState((prevState, props) => {
      return { value: prevState.value + 1 }
    });
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>{this.state.value}</h2>
        <button onClick={() => this.updateValue()}>
      </div>
    )
  }
}
```
## 함수형 컴포넌트

