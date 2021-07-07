### 설치해야할 프로그램들 

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

### create react app
* browser가 react의 코드를 이해하지 못하기 때문에 따로 뭐를 해줘야한다. 이것을 설정하기위해 몇가지 단계가 필요한데, 복잡함.(full time react개발자로서는 니코는 안다고한다.)
* 하지만 create react app이라는 것을 fb에서 만들어줘서 기본적으로 하나의 명령을 실행해서 react web app을 set up하게 해준다. [github](https://github.com/facebook/create-react-app)
```cmd
npx create-react-app movie-app // set-up환경 조성
```


### package.json에 대해서도 알아봐야할듯 하다. 