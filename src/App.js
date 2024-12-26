import './App.css';

let postTitle = '제목문';
let body = '바디값';
let botton = "여기는 하단 바 입니다.";

function App() {
  return (
    <div className="App">
      <div className='loginbar'>
        <form action="/" >
        
        </form>
        <button>로그인하기</button>
      </div>
      <header>
      <div className='titlebox'>
        <h4 className='title'>{ postTitle }</h4>
      </div>
      </header>

      <body>
        <div className='bodybox'>
          <p className='bodyp'>{ body }</p>
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
