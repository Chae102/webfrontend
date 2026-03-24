// 실습 1
function Hello() {
  return <h1>안녕하세요 React</h1>;
}

// 실습 2
function User({ name }) {
  return <h2>안녕하세요 {name}님</h2>;
}

// 실습 3
function Product({name,price}){
  return (
    <div>
      <h3>상품 : {name}</h3>
      <p>가격 : {price}</p>
    </div>
  )
}

// 실습 4
function ProfileCard({name,age,job}){
  return (
    <div>
      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
      <p>직업 : {job}</p>
    </div>
  )
}

// 실습 5
function Button({text}){
  return(
    <button type="submit">{text}</button>
  )
}

// 실습 6
function Box({children}){
  return(
    <div>
      {children}
    </div>
  );
}

// 실습 7
function FruitList({fruits}){
  return(
    <ul>
      {fruits.map((fruit,index)=>(
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  )
}

// 컴포넌트 형태로 들어갈시 export default Hello; 생략
function App(){
  // 선언 부분
  const fruits=["사과","바나나","포도"];

  return(
    <div>
      <h1>4주차 실습</h1>
      <hr />

      <h2>실습 1</h2>
      <Hello />
      <hr />

      <h2>실습 2</h2>
      <User name="민지" />
      <User name="철수" />
      <hr />

      <h2>실습 3</h2>
      <Product name="노트북" price={100} />
      <Product name="키보드" price={5} />
      <Product name="마우스" price={3} />

      <h2>실습 4</h2>
      <ProfileCard name="김민지" age={20} job="학생"/>
      <hr />

      <h2>실습 5</h2>
      <Button text="로그인"/>
      <Button text="회원가입"/>
      <Button text="삭제"/>
      <hr />

      <h2>실습 6</h2>
      <Box>
        <h1>안녕하세요</h1>
      </Box>
      <hr />

      <h2>실습 7</h2>
      <FruitList fruits={fruits}/>
      <hr />
    </div>
  );
}
export default App;