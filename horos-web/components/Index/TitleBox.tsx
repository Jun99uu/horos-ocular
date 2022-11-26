export default function TitleBox() {
  return (
    <div className="container">
      <div className="title-box">
        <span className="subtitle">Indexing & Search In Video</span>
        <span className="title">Horos Ocular</span>
      </div>
      <div className="content-box">
        <span className="main-content">
          지금 로그인하고, 강력한 영상 분석 기술을 이용해보세요!
        </span>
        <span className="sub-content">
          Face Detection | Face Recognition | Speech Recognition
        </span>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          color: white;
          gap: 15px;
        }
        .title-box,
        .content-box {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
        }
        .subtitle {
          font-weight: 600;
          font-size: 14px;
        }
        .title {
          font-weight: 900;
          font-size: 42px;
          margin-top: -5px;
        }
        .main-content {
          font-weight: 600;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}
