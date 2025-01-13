import { useState, useEffect } from 'react';
import './App.css';

function App() {
  let botton = "여기는 하단 바 입니다.";

  const nowDate = String(new Date());

  const [log, func] = useState("블로그");

  const [count, likefunc] = useState(0);

  const bodyTitle = ['1번 블로그 제목', '2번 블로그 제목', '3번 블로그 제목', '4번 블로그 제목', '5번 블로그 제목', '6번 블로그 제목', '7번 블로그 제목'];
  bodyTitle.sort((a, b) => b.localeCompare(a));

  // 데이터 조회
  const [data, setData] = useState([]);

  useEffect(() => {
		const fetchData = async() => {
          const res = await fetch('https://jsonplaceholder.typicode.com/posts');
          const result = res.json();
          // console.log("data : ",result);
          return result; 
        }	
        
        fetchData().then(res => setData(res)).catch((err) => console.error(err));
    }, []);

  function responseData(data){
    return data.map((item, index) => {
      return (
      <div className="ptagbox" key={index}>
        <p>{item.id}</p>
        <p>{item.title}</p>
        <p>게시글 내용</p>
        <p>{nowDate}</p>
      </div>
      );
    });
  }

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
            <p>{ bodyTitle[2] }</p>
            <p>게시글 내용</p>
            <p>{ nowDate }</p>
          </div>
          <div className='ptagbox'>
            <p>{ bodyTitle[3] }</p>
            <p>게시글 내용</p>
            <p>{ nowDate }</p>
          </div>
          <div className='ptagbox'>
            <p>{ bodyTitle[4] }</p>
            <p>게시글 내용</p>
            <p>{ nowDate }</p>
          </div>
          <div className='ptagbox'>
            <p>{ bodyTitle[5] }</p>
            <p>게시글 내용</p>
            <p>{ nowDate }</p>
          </div>
          <div className='ptagbox'>
            <p>{ bodyTitle[6] }</p>
            <p>게시글 내용</p>
            <p>{ nowDate }</p>
          </div>
          {
            responseData(data)
          }

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
