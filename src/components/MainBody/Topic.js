import React, {useEffect, useState} from "react";
import style from "./MainBody.module.css"

const Topics = ({items}) => {

    const [active, setActive] = useState({article:{}})
    const [activeFirst, setActiveFirst] = useState({article:{}})
    const [activeSecond, setActiveSecond] = useState({article:{}})
    const [index, setIndex] = useState(0);
    const [indexFirst, setIndexFirst] = useState(1);
    const [indexSecond, setIndexSecond] = useState(2);


    useEffect(() => {
        if(items.length) {
            setActive(items[index])
            setActiveFirst(items[indexFirst])
            setActiveSecond(items[indexSecond])
            setIndex(index + 1)
            setIndexFirst(indexFirst + 1)
            setIndexSecond(indexSecond + 1)

        }
    }, [])

    useEffect(() => {
        if(items.length) {
            if(index === items.length-1) setIndex(0)
            else setIndex(index + 1);
            setTimeout(() => {
                setActive(items[index])
            }, 4000)}
    }, [active])

    useEffect(() => {
        if(items.length) {

            if(indexFirst === items.length-1) setIndexFirst(0)
            else setIndexFirst(indexFirst + 1);
            setTimeout(() => {
                setActiveFirst(items[indexFirst])
            }, 4000)}
    }, [activeFirst])

    useEffect(() => {
        if(items.length) {
            if(indexSecond === items.length-1) setIndexSecond(0)
            else setIndexSecond(indexSecond + 1);
            setTimeout(() => {
                setActiveSecond(items[indexSecond])
            }, 4000)}
    }, [activeSecond])

    const bgUrl = items.map(item => {return {
        backgroundImage: `url(https://www.lovezagreb.hr//media/news/medium_${item.article.FileName})`
    }})

    return (
       <div className={style.slider}>

           <div className={`${style.topicContainer} ${style.show}`} style={bgUrl[items.indexOf(active)]}>
               <div className={style.topic}>
                   <h1>{active.name}</h1>
                   <h2>{active.article.naslov}</h2>
                   <p>{active.article.heading}</p>
               </div>
           </div>
           <div className={`${style.topicContainer} ${style.hide}`} style={bgUrl[items.indexOf(activeFirst)]}>
               <div className={style.topic}>
                   <h1>{activeFirst.name}</h1>
                   <h2>{activeFirst.article.naslov}</h2>
                   <p>{activeFirst.article.heading}</p>
               </div>
           </div>
           <div className={`${style.topicContainer} ${style.hide}`} style={bgUrl[items.indexOf(activeSecond)]}>
               <div className={style.topic}>
                   <h1>{activeSecond.name}</h1>
                   <h2>{activeSecond.article.naslov}</h2>
                   <p>{activeSecond.article.heading}</p>
               </div>
           </div>

       </div>
    );
}

export default Topics