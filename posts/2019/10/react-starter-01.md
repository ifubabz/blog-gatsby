---
title: "[React] React 시작하기"
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
    super(props)
    this.state = {
      value: 0,
    }
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>{this.state.value}</h2>
        <button onClick={() => this.setState({ value: this.state.value + 1 })}>
          +
        </button>
      </div>
    )
  }
}
```

별도의 메소드를 호출하는 형태로 구현할 수 있고 이전 `state`와 `props`를 메소드 내에서 참조할 수도 있습니다.
`onClick` 속성에 메소드를 실행하도록 설정하고 해당 메소드 내에서 `this.setState()`를 실행합니다.

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

함수형 컴포넌트는 보다 간단하게 컴포넌트를 작성하는 방법이고 `state` 없이 `render` 함수만을 가집니다.  
`React.Component`를 확장하는 클래스를 정의하는 대신 `props`를 입력받아서 렌더링할 대상을 반환하는 함수를 작성할 수 있습니다.
함수형 컴포넌트는 클래스로 작성하는 것보다 빠르게 작성할 수 있으며 많은 컴포넌트를 함수 컴포넌트로 표현할 수 있습니다.
함수 내부에서 `this.props` 대신 매개변수로 받은 `props` 객체를 사용할 수 있습니다.

```javascript
function Welcome(props) {
  return <h1>Hello {props.name}</h1>
}
```

## JSX

JSX는 JavaScript를 확장한 문법입니다. UI가 어떻게 생겨야 하는지 설명하기 위해 React와 함께 사용할 것을 권장합니다.
JSX에는 JavaScript의 모든 기능이 포함되어 있고 React “엘리먼트(element)” 를 생성합니다.  
컴파일이 끝나면, JSX 표현식이 정규 JavaScript 함수 호출이 되고 JavaScript 객체로 인식됩니다. 태그가 비어있다면 XML처럼 /> 를 이용해 바로 닫아주어야 합니다.  
속성에 따옴표를 이용해 문자열 리터럴을 정의할 수 있고 중괄호를 사용하여 어트리뷰트에 JavaScript 표현식을 삽입할 수도 있습니다.

```javascript
const element1 = <div tabIndex="0"></div>

const element2 = <img src={user.imageURL}></img>
```

기본적으로 React DOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 이스케이프 하므로, 애플리케이션에서 명시적으로 작성되지 않은 내용은 주입되지 않습니다.
모든 항목은 렌더링 되기 전에 문자열로 변환됩니다. 이런 특성으로 인해 XSS (cross-site-scripting) 공격을 방지할 수 있습니다.
