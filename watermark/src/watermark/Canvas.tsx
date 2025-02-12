/*
 * @Author: 许海辉 xuhaihui@newshiying.onaliyun.com
 * @Date: 2025-02-10 11:41:15
 * @LastEditors: 许海辉 xuhaihui@newshiying.onaliyun.com
 * @LastEditTime: 2025-02-11 09:41:13
 * @FilePath: \watermark\src\watermark\Canvas.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect,useRef } from "react";



const Canvas=()=>{
  
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(()=>{
        const ctx = canvasRef.current!.getContext('2d')!;
        const ratio=window.devicePixelRatio

        const img = new Image();
       img.crossOrigin = 'anonymous';
       img.referrerPolicy = 'no-referrer';

       img.src = 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ';


       const canvasWidth = 400;
       const canvasHeight = 400;
       canvasRef.current!.setAttribute('width', `${canvasWidth}`);
       canvasRef.current!.setAttribute('height', `${canvasHeight}`);

       canvasRef.current!.style.width=`${canvasWidth}px`
       canvasRef.current!.style.height=`${canvasHeight}px`

       ctx.translate((canvasWidth * ratio) / 2, (canvasHeight * ratio) / 2); // 移动到中心点

        
       img.onload = () => {
        ctx.drawImage(img, -50, -50, 200, 200); // 在中心点绘制图像，调整位置
    };

    },[])

    return(
        <div>
         <canvas ref={canvasRef}  ></canvas>
        </div>
    )
}


export default Canvas