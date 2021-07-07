# 다시 공부할때 시작해볼려면 서버구동해야되서 npm start를 터미널창에 쳐줘야한다.



### 1. 설치해야할 프로그램들 

1. node.js 설치(홈페이지에서. 설치확인 : node -v / npm 설치확인 : npm -v,nodejs깔때 npm도 같이 자동으로 깔아진다.)
2. 콘솔에서 npm install npx -g (설치확인: npx -v)
3. VSC 설치(다른 코드 에디터 써도 됨)
4. git 설치(설치 확인:콘솔에서 git --version)

<br></br>

* 여기 내용이 잘 이해가 안가니 잘 봐야할듯.
* node.js란? [Link](https://junspapa-itdev.tistory.com/3) 어떤 방식이 있는지 잘알아보고, 장단점에 대해 알아두면좋을듯 아직은 그냥 훑어보기만했음. 
* npm이란? node.js로 만들어진 모듈을 관리하는 툴, node.js에 built in 되어있다. [Link](https://m.blog.naver.com/magnking/220961896609)
* npx란? 아직은 이해가 잘 안가니, 사용하면서 익혀야할듯. [Link](https://pongsoyun.tistory.com/116)
* 추가 링크 [node.js, nvm, npm이란 무엇인가](https://pongsoyun.tistory.com/115)

<br></br>

### 2. create react app
* browser가 react의 코드를 이해하지 못하기 때문에 따로 뭐를 해줘야한다. 이것을 설정하기위해 몇가지 단계가 필요한데, 복잡함.(full time react개발자로서는 니코는 안다고한다.)
* 하지만 create react app이라는 것을 fb에서 만들어줘서 기본적으로 하나의 명령을 실행해서 react web app을 set up하게 해준다. [github](https://github.com/facebook/create-react-app)
```cmd
npx create-react-app movie-app // set-up환경 조성
```

### 3. 폴더를을 github에 올려야한다
* 그냥 git init하고 레파지토리 만들고 그냥 하면 된다. 
### 4. How does React work?
* js파일을 수정하니까 바로바로 리프레시되면서 반영이 된다. 
* react가 무엇이냐면, react는 당신이 거기에 쓰는 모든 요소를 생성한다는 뜻(html파일이 비어있어도), 자바스크립트와 함께 만들어서 html에 밀어넣는다는 뜻. 
```js
//index.js 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


//App.js
function App() {
  return (
    <div className="App">
       Hello~~~
    </div>
  );
}
```
* 너의 모든 react application을 div사이에 넣어 !
* react는 소스코드에 처음부터 HTML을 넣지않고, HTML에서 HTML을 추가하거나 제거하는 법을 알고있다. 
* virtual DOM(virutal document object model)이라는게 있다.(그래서 브라우저에서 소스코드를 보면 html파일은 비어있다.) 이게바로 react의 일이다. 빠른이유이고, virtual이기때문에 존재하지않아서 
* import구문의 의미에 대해 더 알아봐야할듯.

### package.json에 대해서도 알아봐야할듯 하다. 