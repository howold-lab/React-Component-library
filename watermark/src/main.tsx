/*
 * @Author: 许海辉 xuhaihui@newshiying.onaliyun.com
 * @Date: 2025-02-09 09:58:37
 * @LastEditors: 许海辉 xuhaihui@newshiying.onaliyun.com
 * @LastEditTime: 2025-02-09 10:01:03
 * @FilePath: \watermark\src\main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
