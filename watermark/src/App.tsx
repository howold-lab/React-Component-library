import Watermark from "./watermark";
import  MyLazyload from './lazyLoad'
import img2 from './assets/img2.png';

const App = () => {
  return(
  <div>
    {/* 水印组件 */}
    <Watermark
  image='https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original'
  >
   <div style={{height: 800}}>
     <p>
      pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
      pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
      pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
      pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
      pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
     </p>
   </div>
  </Watermark> 

  {/* 懒加载 */}

  <p>
    懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载
    懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载
    懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载
    懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载
    懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载
    懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载
    懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载
    懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载
    懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载
    懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载懒加载
  </p>

  <MyLazyload placeholder="正在加载中" onContentVisible={()=>{
    console.log('img2 正在显示')
  }}>
      <img src={img2}/>
  </MyLazyload>
  </div>
  )

};

export default App;