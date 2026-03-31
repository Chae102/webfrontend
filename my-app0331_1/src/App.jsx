import { useState } from "react";

// 개별 영상 카드 컴포넌트
function VideoCard({ title, channel, views }) {
  // 좋아요 수 상태 (각 카드별로 따로 관리됨)
  const [likes, setLikes] = useState(0);

  // 카드 클릭 횟수 상태
  const [clicks, setClicks] = useState(0);

  // 카드 전체 클릭 시 실행 (클릭 수 증가)
  const handleCardClick = () => {
    setClicks(clicks + 1);
  };

  // 좋아요 버튼 클릭 시 실행
  const handleLikeClick = (event) => {
    event.stopPropagation();
    // 이벤트 버블링 방지
    // → 버튼 클릭 시 카드 클릭 이벤트까지 같이 실행되는 것을 막음

    setLikes(likes + 1); // 좋아요 증가
  };

  return (
    <div
      onClick={handleCardClick} // 카드 클릭 이벤트 연결
      style={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "12px",
        cursor: "pointer",
      }}
    >
      <h3>{title}</h3>

      {/* 영상 정보 출력 */}
      <p>채널: {channel}</p>
      <p>조회수: {views}</p>

      {/* 상태값 출력 */}
      <p>클릭 수: {clicks}</p>
      <p>좋아요 수: {likes}</p>

      {/* 좋아요 버튼 */}
      <button onClick={handleLikeClick}>좋아요</button>
    </div>
  );
}

// 영상 리스트 컴포넌트
function VideoList({ videos }) {
  return (
    <div>
      {/* 
        map 함수
        - videos 배열을 하나씩 꺼내서(video)
        - VideoCard 컴포넌트로 변환
        - 결과: 여러 개의 카드 UI 생성
      */}
      {videos.map((video) => (
        <VideoCard
          key={video.id} // 리스트 렌더링 시 필수 (고유값)
          title={video.title}
          channel={video.channel}
          views={video.views}
        />
      ))}
    </div>
  );
}

// 메인 App 컴포넌트
function App() {
  // 현재 선택된 필터 상태
  const [filter, setFilter] = useState("전체");

  // 영상 데이터 (배열)
  const videos = [
    {
      id: 1,
      title: "리액트 기초 강의",
      channel: "코딩채널",
      views: "10만",
      category: "공부",
    },
    {
      id: 2,
      title: "자바스크립트 완벽 정리",
      channel: "개발자TV",
      views: "25만",
      category: "자바스크립트",
    },
    {
      id: 3,
      title: "프론트엔드 취업 로드맵",
      channel: "코딩랩",
      views: "5만",
      category: "취업",
    },
    {
      id: 4,
      title: "React props 쉽게 이해하기",
      channel: "리액트쌤",
      views: "8만",
      category: "공부",
    },
  ];

  // filter 함수
  const filteredVideos =
    filter === "전체"
      ? videos // 전체 선택 시 모든 데이터 사용
      : videos.filter((video) =>
          video.category === filter
          // 배열을 하나씩 검사하면서
          // 선택한 카테고리(filter)와 같은 것만 남김
        );

  return (
    <div style={{ padding: "20px" }}>
      <h1>추천 영상</h1>

      {/* 필터 버튼 영역 */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("전체")}>전체</button>

        <button
          onClick={() => setFilter("공부")}
          style={{ marginLeft: "8px" }}
        >
          공부
        </button>

        <button
          onClick={() => setFilter("자바스크립트")}
          style={{ marginLeft: "8px" }}
        >
          자바스크립트
        </button>

        <button
          onClick={() => setFilter("취업")}
          style={{ marginLeft: "8px" }}
        >
          취업
        </button>
      </div>

      {/* 현재 선택된 필터 표시 */}
      <p>현재 필터: {filter}</p>

      {/* 
        필터링된 데이터 전달
        → filter로 걸러진 영상들만 VideoList에 넘김
      */}
      <VideoList videos={filteredVideos} />
    </div>
  );
}

export default App;