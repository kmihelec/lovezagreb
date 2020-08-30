import React, {useEffect, useState} from "react";
import style from "./MainBody.module.css"

const LatestImages = ({items}) => {


    const [active, setActive] = useState({})
    const [activeFirst, setActiveFirst] = useState({})
    const [activeSecond, setActiveSecond] = useState({})
    const [activeThird, setActiveThird] = useState({})
    const [index, setIndex] = useState(0);
    const [indexFirst, setIndexFirst] = useState(1);
    const [indexSecond, setIndexSecond] = useState(2);
    const [indexThird, setIndexThird] = useState(3);


    useEffect(() => {
        if(items.length) {
            setActive(items[index])
            setActiveFirst(items[indexFirst])
            setActiveSecond(items[indexSecond])
            setActiveThird(items[indexThird])
            setIndex(index + 1)
            setIndexFirst(indexFirst + 1)
            setIndexSecond(indexSecond + 1)
            setIndexThird(indexThird + 1)
        }
    }, [])

    useEffect(() => {
        if(items.length) {
            if(index === items.length-1) setIndex(0)
            else setIndex(index + 1);
            setTimeout(() => {
                setActive(items[index])
            }, 3000)}
    }, [active])

    useEffect(() => {
        if(items.length) {

            if(indexFirst === items.length-1) setIndexFirst(0)
            else setIndexFirst(indexFirst + 1);
            setTimeout(() => {
                setActiveFirst(items[indexFirst])
            }, 3000)}
    }, [activeFirst])

    useEffect(() => {
        if(items.length) {
            if(indexSecond === items.length-1) setIndexSecond(0)
            else setIndexSecond(indexSecond + 1);
            setTimeout(() => {
                setActiveSecond(items[indexSecond])
            }, 3000)}
    }, [activeSecond])

    useEffect(() => {
        if(items.length) {
            if(indexThird === items.length-1) setIndexThird(0)
            else setIndexThird(indexThird + 1);
            setTimeout(() => {
                setActiveThird(items[indexThird])
            }, 3000)}
    }, [activeThird])


    const bgUrl = items.map(item => {return {
        backgroundImage: `url(https://www.lovezagreb.hr/media/galerije/tb_${item.FileName})`
    }})


    return (
        <div className={style.slider}>
            <div className={`${style.pictureContainer} ${style.show}`}>
                <div className={style.bgImg} style={bgUrl[items.indexOf(active)]}></div>
                <div className={style.author}>{active.Description}</div>
            </div>
            <div className={`${style.pictureContainer} ${style.hide}`}>
                <div className={style.bgImg} style={bgUrl[items.indexOf(activeFirst)]}></div>
                <div className={style.author}>{activeFirst.Description}</div>
            </div>
            <div className={`${style.pictureContainer} ${style.hide}`}>
                <div className={style.bgImg} style={bgUrl[items.indexOf(activeSecond)]}></div>
                <div className={style.author}>{activeSecond.Description}</div>
            </div>
            <div className={`${style.pictureContainer} ${style.hide}`}>
                <div className={style.bgImg} style={bgUrl[items.indexOf(activeThird)]}></div>
                <div className={style.author}>{activeThird.Description}</div>
            </div>

        </div>
    );
}

export default LatestImages