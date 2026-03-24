function Book(props){
  return(
    <div>
      <h2>이 책의 제목은 {props.title}입니다.</h2>
      <p>이 책의 저자는 {props.author}입니다.</p>
      <p>이 책은 {props.price}원 입니다.</p>
    </div>
  )
}

function Letter({name,text}){
  return(
    <div>
      <h2>{name}님께</h2>
      <p>{text}</p>
    </div>
  )
}

function Button({text,color}){
  return(
    <button style={{cursor:"pointer",backgroundColor:color,color:"white"}}>{text}</button>
  )
}

function VideoCard({title, channel, views}){
  return(
    <div>
      <h3>{title}</h3>
      <p>{channel}</p>
      <p>조회수 : {views}</p>
    </div>
  )
}

function VideoList({videos}){
  return(
    <div>
      {videos.map((video,index)=>(
        <VideoCard
        key={index}
        title={video.title}
        channel={video.channel}
        views={video.views}
        />
      ))}
    </div>
  )
}

function App(){
  
    const videos=[
        {
          title:"리액트 기초 강의",
          channel:"22",
          views:"75000"
        },
        {
          title:"C 기초 강의",
          channel:"44",
          views:"8500"
        },
        {
          title:"자바 기초 강의",
          channel:"66",
          views:"35000"
        }
      ]
  return (
    <div>
      <h1>4주차 수업과제</h1>
      <hr />

      <Book title="데이터베이스" author="황길동" price={30000}/>
      <Book title="파이썬" author="우길동" price={45000}/>
      <Book title="프론트엔드" author="좌길동" price={50000}/>
      <hr />

      <Letter name="민지" text="감사합니다" />
      <Letter name="길동" text="안녕하세요" />
      <Letter name="춘향" text="수고하셨습니다" />
      <hr />

      <Button text="로그인" color="blue"/>
      <Button text="회원가입" color="red"/>
      <Button text="취소" color="green"/>
      <hr />

      <img src=""></img>
      <h1>📺 추천영상</h1>
      <VideoList videos={videos} />
      <hr />
      
      
    </div>
  );
}

export default App;