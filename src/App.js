import { useState } from 'react';
import './App.css';

function App() {
  // let postTitle = '제목문';
  let botton = "여기는 하단 바 입니다.";

  const nowDate = String(new Date());

  const [log, func] = useState("블로그");
  return (
    <div className="App">
      <div className='loginbar'>
        <form action="/" >
        
        </form>
        <button>로그인하기</button>
      </div>
      <header>
      <div className='titlebox'>
        <h4 className='title'>{ log }</h4>
      </div>
      </header>

      <body>
        <div className='bodybox'>
          {/* <p className='bodyp'>{ body }</p> */}
          <div className='ptagbox'>
            <p>게시글 제목</p>
            <p>게시글 내용</p>
            <p>{ nowDate }</p>
          </div>
          <div className='ptagbox'>
            <p>게시글 제목</p>
            <p>게시글 내용</p>
            <p>{ nowDate }</p>
          </div>
          <div className='ptagbox'>
            <p>게시글 제목</p>
            <p>게시글 내용</p>
            <p>{ nowDate }</p>
          </div>
          <div className='ptagbox'>
            <p>게시글 제목</p>
            <p>게시글 내용</p>
            <p>{ nowDate }</p>
          </div>
          <div className='ptagbox'>
            <p>게시글 제목</p>
            <p>게시글 내용</p>
            <p>{ nowDate }</p>
          </div>
          <div className='ptagbox'>
            <p>게시글 제목</p>
            <p>게시글 내용</p>
            <p>{ nowDate }</p>
          </div>
          <div className='ptagbox'>
            <p>게시글 제목</p>
            <p>게시글 내용</p>
            <p>{ nowDate }</p>
          </div>
        </div>
      </body>

      <footer>
        <div className='footerbox'>
          <p className='footerp'>{ botton }</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
