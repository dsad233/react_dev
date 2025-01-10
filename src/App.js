import { useState } from 'react';
import './App.css';

function App() {
  // let postTitle = '제목문';
  let botton = "여기는 하단 바 입니다.";

  const nowDate = String(new Date());

  const [log, func] = useState("블로그");

  const [count, likefunc] = useState(0);

  const bodyTitle = ['1번 블로그 제목', '2번 블로그 제목'];

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
          <div className='ptagbox'>
            <p>{ bodyTitle[0] }</p>
            <p>게시글 내용</p>
            <p>{ nowDate }</p>
            <button onClick={ () => likefunc(count + 1) }>👍 { count }</button>
            <button onClick={ () => likefunc(count > 0 ? count - 1 : count) }>👎</button>
          </div>
          <div className='ptagbox'>
            <p>{ bodyTitle[1] }</p>
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
