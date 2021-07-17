# 다시 공부할때 시작해볼려면 서버구동해야되서 npm start를 터미널창에 쳐줘야한다.

### 1. 설치해야할 프로그램들

1. node.js 설치(홈페이지에서. 설치확인 : node -v / npm 설치확인 : npm -v,nodejs깔때 npm도 같이 자동으로 깔아진다.)
2. 콘솔에서 npm install npx -g (설치확인: npx -v)
3. VSC 설치(다른 코드 에디터 써도 됨)
4. git 설치(설치 확인:콘솔에서 git --version)

<br></br>

- 여기 내용이 잘 이해가 안가니 잘 봐야할듯.
- node.js란? [Link](https://junspapa-itdev.tistory.com/3) 어떤 방식이 있는지 잘알아보고, 장단점에 대해 알아두면좋을듯 아직은 그냥 훑어보기만했음.
- 또 다른 [링크](https://ko-de-dev-green.tistory.com/29)
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
- 그래서 index.html 파일에서 div태그 id값이 root라서 document.getElementById("root")); 해준거임.

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

- [Virtual DOM](https://velopert.com/3236) 브라우저가 어떻게 작동하는 지에 대해 설명하고, Virtual DOM이 정확히 무슨역할을 하는지 설명해줌. 나중에 시간나면 읽어봐야할듯.

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
- [component](https://velog.io/@jgam/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%9D%98-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%9E%80)는 function이다 HTML을 반환하는 function이다.
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

### 렌더링이란

- [JSX,rendering](https://velog.io/@edie_ko/React-JSX%EB%9E%80-%EB%A0%8C%EB%8D%94%EB%A7%81-Rendering%EC%9D%B4%EB%9E%80)란 HTML 문법을 JavaScript 코드 내부에 쓴것! JavaSciript Extension 즉 자바스크립트의 확장이다. , 몇가지 규칙을 따라줘야함
- 렌더링이란(링크는 위에 있고), html 요소(element), 또는 React 요소 등의 코드가 눈으로 볼 수 있도록 그려지는 것을 렌더링(rendering) 이라고 말합니다.

### list.map(실행 될 함수)

- [map,list에 key값을 넣어주는이유](https://velog.io/@hurima90/React%EC%8A%A4%ED%84%B0%EB%94%94%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4%EC%9D%98-map-%ED%95%A8%EC%88%98)은 function을 취해서 그 function을 각 array의 각 item에 적용한다.

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
    <Food name={dish.name} picture={dish.image} /> // <> 으로 해줘야 js로 인식한다는 것이다. 안해주면 그냥 text로 인식한다.
  ));
}
```

- 그리고 return을 해주면 array로 리턴해준다.
- map function가 제공해주는 또다른 argument가 있다. foodILike.map((dish,index))다. 그래서 map에 있는 item에 key제공해줄때 index(item number)를 할당할수 있다.

### object마다 유니크한 Key를 가지고있어야한다.

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

- [Key](https://velog.io/@hurima90/React%EC%8A%A4%ED%84%B0%EB%94%94%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4%EC%9D%98-map-%ED%95%A8%EC%88%98) 어떤 원소가 변경되었는지 빠르게 감지하기위해 key값을 넣는다.

### npm i prop-types

- 전달해준 component가 내가 원하는 component인지 알려주는 녀석
- 잘 설치되어있는 확인할려면 package.json파일을 봐보면 된다.
- APP.js파일에 import ProTypes from "prop-types"; 도 해줘야함.
- 검색 키워드 react [proptypes](https://ko.reactjs.org/docs/typechecking-with-proptypes.html)

### function component, class component => state

- react는 자동적으로 너의 class component의 render method를 실행한다.
- function component는 return이 존재해야하지만, class component는 아니다.

```js
class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  render() {
    return(
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>;
    );
  }
}
```

- class component는 state이가 잇다. state는 object이고 바꾸고 싶은 data를 넣는것이다.
- 즉 state를 사용하고싶을떄는 class component를 사용하는것이고, 아닐떄는 function component를 사용하는것이다.

### setState

- class component의 state를 변경해줄떄는 setstate를 사용해주어야한다.
- [setState](https://velog.io/@lllen/React-%EC%9D%B4%EB%B2%A4%ED%8A%B8)를 호출할 대마다 react는 새로운 state와 함께 render function을 호출한다. 다시 render한다!

### react class component는 render()말고 더 많은걸 가지고있다.

- component life cycle : component가 어떤 단계에 있는지에 따라 제어할수있는 메서드들이 있다. 중요한 개념이다.
- [React.Component](https://ko.reactjs.org/docs/react-component.html) 공식 API레퍼런스, 공식 문서 등등. 이런것들을 보면서 코딩하는 습관을 가져야할듯.

### fetch란

- [fetch](https://ljtaek2.tistory.com/130)
- JavaScript에서 서버로 네트워크 요청을 보내고 응답을 받을 수 있도록 해주는 매서드
- 링크에 들어가본결과 좀더 많이 공부할 내용이 있다. 해봐야할듯.

### ES6문법

- [ES6문법](https://velog.io/@kimhscom/JavaScript-%EC%9E%90%EC%A3%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-ES6-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC) 자바스크립트 문법 최신
- Arrow functions(화살표 함수)
- 삼항조건 연산자: if문의 축약형태, condition ? expr1 : expr2

```js
// arrow function
setTimeout(() => {
  this.setState({ isLoding: false });
}, 6000);
// 삼항조건 연산자
<div>{isLoading ? "Loading..." : "We are ready"}</div>;

render(){
  const { isLoding, movies } = this.state; // this.state.movies.map()이렇게 쓰는것을 movies.map() 이런식으로 줄여쓸수있다.
}
```

- setTimeout(func, delay) 이다. func부분에 arrow function을 넣어준것이다.
- 삼항조건 연산자: if문의 축약형태

```js
getMovies = async () => {
  ////
  const {
    data: {
      data: { movies }, //반점필요없는데 자꾸 저장하면 생김.
    },
    ////
  } = await axios.get(
    "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
  );
  this.setState({ movies: movies, isLoding: false });
};

//원래는 이거였는데.
const movies = await axios.get(
  "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
);
//저런식으로 줄여쓰면서 자동으로 movies가 변수가되면서 된듯.
```

- console.log(movies)를 하면 내가 요청한 객체의 data data movies안에 내가 원하는 데이터가 있다.
- movies.data.data.movies 를 줄인것인데 잘 이해가 가지 않는다. ES6문법에서는 할수있다고는 하는데.

### object destructuriong 객체구조화

- [stackoverflow](https://stackoverflow.com/questions/40357836/what-does-this-render-method-do-const-images-selectedimage-this-state) 영어를 해석해보는 노력을 해봐야할듯.

```js
render() {
    const { isLoding } = this.state;
    return <div>{isLoding ? "Loading..." : "We are ready"}</div>;
  };
```

### fetch 하는방법 axios

- API 연동모듈 [axios](https://velog.io/@shin6403/React-axios%EB%9E%80-feat.-Fetch-API)
- 많은 사람들이 fetch할때 fetch를 많이 사용하는데 axios를 사용할거다.

### 동기방식 비동기 방식

- 자바스크립트는 기본적으로 동기적 언어. 하지만 비동기적 으로 처리되는 일부 연산 존재.[Link](https://velog.io/@dosilv/TIL-React-setState-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0-648sv7je)
- 동기방식: 코드에 쓰여진 대로 실행하고 마치고 실행하고 마치고를 반복.
- 비동기방식: 함수를 실행시켜놓고 다음함수로 넘어가는 방식.
- [Link](https://blog.silnex.kr/ajax%EB%A5%BC-%ED%86%B5%ED%95%B4-%EB%B3%B4%EB%8A%94-%EB%8F%99%EA%B8%B0-%EB%B0%A9%EC%8B%9D%EA%B3%BC-%EB%B9%84%EB%8F%99%EA%B8%B0-%EB%B0%A9%EC%8B%9D%EC%9D%98-%EC%9D%B4%ED%95%B4/)

### JSON (JavaScript Object Notation)이란

- 단순히 데이터를 표시하는 표현 방법, 서버와 클라이언트 간의 교류에서 일반적으로 많이사용
- [Link](https://velog.io/@surim014/JSON%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80)

```js
getMovies = async () => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(
    "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
  );
  console.log(movies);
};
```

- json뒤에 ?sort_by=rating 을 해줌으로써 조건? 을 걸수있다. API 문서를 보면된다.

### API YTS (불법적인 토렌트 영화를 업로드)

- 매번 url이 바뀌기 때문에 니코가 자동으로 되게 json추적할수있게 해줬음.
- [YTS](https://yts.mx/api#list_movies)

### Async & await

- axios로 movie list로 받아오는데 시간이 걸리기때문에 동기방식으로 처리해줄거임 그방식이 [Async & await](https://velog.io/@limes/React-Async-await)
-

```js
getMovies = async () => {
  const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
};
```

### promise에 대해 좀더 알아봐야할듯.

- [Link](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)

### 태그에 관하여

- App.js[<section/>](https://m.blog.naver.com/skydoor2014/221147725417) : 하나의 그룹 혹은 묶음으로 다루어주는 역할.
- <img src={poster} alt={title} title={title}/> : title는 마우스를 위에올렸을때 어떤 문장이 나타나는지,alt는 경로에 이미지가없을 때 나타내는거임 [Link](https://www.codingfactory.net/11004)

### react component꾸미기

- react에는 많은 옵션이 있는데 style component를 사용할거임. 무료강의 있음 보셈.
- Styled Components의 경우 보니까 리액트 멤버십 강의에 포함된거 같네요. 대신 유튜브에 이전의 무료 강의들 올라와있어요.
  [Styled Components 강의 플레이리스트](https://www.youtube.com/watch?v=MqGxMOhPqeI&list=PL7jH19IHhOLNUIOJcGj6egl-dNB-QXjEm)

### 이 디자인을 카피할거다!

- [dribbble.com](https://dribbble.com/shots/2442798-Movie-Application/attachments/475341)
- 여기 사이트에 뭔가많은 디자인들이 있다 무엇을하는 사이트일까? 디자인 사이트
- [style Timelapse](https://nomadcoders.co/react-fundamentals/lectures/1560) 이 강의와 맞지않아서 그냥 타임랩스로 보여준다. 다른개발자들도 어떤식으로 하는지 다른 타임랩스도 보면 좋을듯.
