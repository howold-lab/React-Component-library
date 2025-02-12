import { CSSProperties,FC,ReactNode,useEffect,useRef,useState } from "react";


interface MyLazyLoadProps{
    className?:string,
    style?:CSSProperties,
    placeholder?:ReactNode,
    offset?:string | number,
    width?: number | string,
    height?: string | number,
    onContentVisible?: () => void,
    children: ReactNode,
}




const MyLazyload:FC<MyLazyLoadProps>=(props)=>{

    const {
        className,
        style,
        placeholder,
        offset =0,
        width,
        height,
        onContentVisible,
        children
    }=props

    const containerRef=useRef<HTMLDivElement>(null)
    const [visible,setVisible]=useState(false)


    function lazyLoadHandler (entries: IntersectionObserverEntry[]) {
        const [entry] = entries;
        const { isIntersecting } = entry;

        if (isIntersecting) {
            setVisible(true);
            onContentVisible?.();
            
            const node = containerRef.current;
            if (node && node instanceof HTMLElement) {
                elementObserver.current?.unobserve(node);
            }
        }
    };

    const elementObserver=useRef<IntersectionObserver>(null)

    const styles={
        height,
        width,
        ...style
    }

    useEffect(()=>{
        const options = {
            rootMargin: typeof offset === 'number' ? `${offset}px` : offset || '0px',
            threshold: 0
        };

        elementObserver.current=new IntersectionObserver(lazyLoadHandler,options)

        const node=containerRef.current
        if(node instanceof HTMLElement){
            elementObserver.current.observe(node);
        }

        return () => {
            if (node && node instanceof HTMLElement) {
                elementObserver.current?.unobserve(node);
            }
        }

    },[])
    return <div ref={containerRef} className={className} style={styles}>
        {visible? children : placeholder}
    </div>
}

export default MyLazyload