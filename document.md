# 다시 공부할때 시작해볼려면 서버구동해야되서 npm start를 터미널창에 쳐줘야한다.

### 1. 설치해야할 프로그램들

1. node.js 설치(홈페이지에서. 설치확인 : node -v / npm 설치확인 : npm -v,nodejs깔때 npm도 같이 자동으로 깔아진다.)
2. 콘솔에서 npm install npx -g (설치확인: npx -v)
3. VSC 설치(다른 코드 에디터 써도 됨)
4. git 설치(설치 확인:콘솔에서 git --version)

<br></br>

- 여기 내용이 잘 이해가 안가니 잘 봐야할듯.
- node.js란? [Link](https://junspapa-itdev.tistory.com/3) 어떤 방식이 있는지 잘알아보고, 장단점에 대해 알아두면좋을듯 아직은 그냥 훑어보기만했음.
- npm이란? node.js로 만들어진 모듈을 관리하는 툴, node.js에 built in 되어있다. [Link](https://m.blog.naver.com/magnking/220961896609)
- npx란? 아직은 이해가 잘 안가니, 사용하면서 익혀야할듯. [Link](https://pongsoyun.tistory.com/116)
- 추가 링크 [node.js, nvm, npm이란 무엇인가](https://pongsoyun.tistory.com/115)

<br></br>

### 2. create react app

- browser가 react의 코드를 이해하지 못하기 때문에 따로 뭐를 해줘야한다. 이것을 설정하기위해 몇가지 단계가 필요한데, 복잡함.(full time react개발자로서는 니코는 안다고한다.)
- 하지만 create react app이라는 것을 fb에서 만들어줘서 기본적으로 하나의 명령을 실행해서 react web app을 set up하게 해준다. [github](https://github.com/facebook/create-react-app)

```cmd
npx create-react-app movie-app // set-up환경 조성
```

### 3. 폴더를을 github에 올려야한다

- 그냥 git init하고 레파지토리 만들고 그냥 하면 된다.

### 4. How does React work?

- js파일을 수정하니까 바로바로 리프레시되면서 반영이 된다.
- react가 무엇이냐면, react는 당신이 거기에 쓰는 모든 요소를 생성한다는 뜻(html파일이 비어있어도), 자바스크립트와 함께 만들어서 html에 밀어넣는다는 뜻.

```js
//index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

//App.js
function App() {
  return <div className="App">Hello~~~</div>;
}
```

- 너의 모든 react application을 div사이에 넣어 !
- react는 소스코드에 처음부터 HTML을 넣지않고, HTML에서 HTML을 추가하거나 제거하는 법을 알고있다.
- virtual DOM(virutal document object model)이라는게 있다.(그래서 브라우저에서 소스코드를 보면 html파일은 비어있다.) 이게바로 react의 일이다. 빠른이유이고, virtual이기때문에 존재하지않아서
- import구문의 의미에 대해 더 알아봐야할듯.

### component

```js
//index.js
import React from 'react'; // 이것을 쓰지않으면 jsx가 있는 component를 사용하는것을 이해하지 못한다.
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('potato')); //한개의 component만 render가 가능하다.


//App.js
import React from 'react';
import Potato from "./potato" // 다른 component추가해주기

function App() { //맨앞글자는 대문자로 써주어야한다.
  return (
    <div>
       <h1>Hello Sangjun!</h1>
       <Potato />
    </div>
  );
}

export default App; //export를 해줘야 import를 할수 있다.

//Potato. js
//Potato라는 나만의 component를 만들고싶다.
import React from 'react'; // 이것을 쓰지않으면 jsx가 있는 component를 사용하는것을 이해하지 못한다.

function Potato() {//맨앞글자는 대문자로 써주어야한다.
  return ( <h3>I love potato</h3>)

}

export default Potato;

```

- <App /> 이 부분은 [component](https://gocoder.tistory.com/2271)
- component는 function이다 HTML을 반환하는 function이다.
- react의 component라고 쓸려면 <App /> 이형식을 따라줘야되는데, 이러한 형식을 [JSX](https://developerntraveler.tistory.com/54)(시간날떄마다 이러한 것을 많이봐야 할듯)라고 한다. javascript안의 html,component를 만들고 어떻게 사용하는지에 대한 것 (react에서만쓰이는 개념, 다른데에서는 쓰이지 않음.)
- JSX는 HTML + javaScript이다.
- react application이 하나의 component만을 rendering하기때문에 여러개의 component를 할려면 위에처럼 <App /> component에 다른 component를 추가해줘야 한다.

<br></br>

### component2 component에 정보보내기

```js
import React from "react";

function Food({ fav }) {
  return <h1>I like Potato</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello Sangjun!</h1>
      <Food fav="kimchi" />
    </div>
  );
}
```

- <fav> 이렇게 쓴것은 인자가 object로 올땐데 그 인자의 fav property를 쓰겠다는 것이다.

### package.json에 대해서도 알아봐야할듯 하다.

### 렌더링이란

- [JSX](https://velog.io/@edie_ko/React-JSX%EB%9E%80-%EB%A0%8C%EB%8D%94%EB%A7%81-Rendering%EC%9D%B4%EB%9E%80)란 HTML 문법을 JavaScript 코드 내부에 쓴것! JavaSciript Extension 즉 자바스크립트의 확장이다. , 몇가지 규칙을 따라줘야함

### list.map(실행 될 함수)

- map은 function을 취해서 그 function을 각 array의 각 item에 적용한다.

```js
function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

{
  foodILike.map((dish) => (
    <Food name={dish.name} picture={dish.image} /> // <> 으로 해줘야 js로 인식한다는 것이다. 안해주면 그냥 text로 인식한다.s
  ));
}
```

- 그리고 return을 해주면 array로 리턴해준다.

### object마다 유니크한 키를 가지고있어야한다.

```js
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}
```

- 원래는 필요가 없는데 react가 똑똑하지 못해서 저렇게 id값을 넣어줘야한다. Food라는 함수의 인자로 넣을때는 넣지는 않는다.

### npm i prop-types

- 전달해준 component가 내가 원하는 component인지 알려주는 녀석
- 잘 설치되어있는 확인할려면 package.json파일을 봐보면 된다.
- APP.js파일에 import ProTypes from "prop-types"; 도 해줘야함.
- 검색 키워드 react [proptypes](https://ko.reactjs.org/docs/typechecking-with-proptypes.html)

JSX란 렌더링이란 컴포넌트란 package json이란 한번 정리해야할듯 너무 글이 많음.
