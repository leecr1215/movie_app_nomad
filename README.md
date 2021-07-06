# Movie App 2019

React JS Fundenmentals Course (2019 Update!)
In Nomadcoder

--------------

* Nomad coder link
  - [nomadcoders_react](https://nomadcoders.co/react-fundamentals/lobby)

----------------------

* 기본 지식
  - component는 HTML을 반환하는 함수
  - jsx = javascript안의 html
  - map함수
    + rendering에 사용.
    + array를 취하고 원하는 array 반환.
    + map을 이용해 array안의 값을 접근할 수 있음.
    + map에 있는 각 item은 key가 필요함.
  - proptypes는 값이 잘 들어있는지를 볼 때 유용함.
    + ex) rating: PropTypes.number.isRequired
    + -> 이때 rating은 number tpye이어야 하고, 값이 무조건 존재해야함.
  - Function component vs Class component 
    + function component는 function이고 return함
    + class component는 class이고 react component로 부터 확장.
    + 둘다 screen에 표시됨.
  - state
    + object이다.
    + 바꿀 데이터를 state 안에 넣는다.
  - setState()
    + state의 변수 값을 바꾼다. 
    + react는 새로운 state와 함께 render function을 호출한다.
  - componentDidMount()
    + 처음에 실행됨. 
    + setState()-> render() -> componentDidMount() 호출
  - componentDidUpdate()
    + 업데이트 시 render() 호출 후 호출됨.
  - componentWillUnmount()
    + 창 이동 시 render() 호출 후 호출됨.
