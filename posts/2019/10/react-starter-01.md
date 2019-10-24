---
title: "[React]] React Web 개발 (1)"
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

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello World</h1>
  }
}
```
