import React from "react";
import style from "./MainStory.module.css"
import {useSelector} from "react-redux";
import Button from "../Button";

const MainStory = () => {
    const story = useSelector(state=> state.page.mostRecent);

    const bgUrl = {
        backgroundImage: `url(https://www.lovezagreb.hr//media/news/large_${story.FileName})`
    }

    return (
        <div className={style.mainStory} style={bgUrl}>
            <div className={style.wrapper}>
                <div className={style.story}>
                    <h1 className={style.title}>{story.naslov}</h1>
                    <h2 className={style.heading}>{story.heading}</h2>
                    <h3 className={style.hashtag}>#{story.TopicName}</h3>
                    <Button bgClr={'#ea1d5d'} name={'Read more'} fontsize={'0.9rem'} border={'none'}
                            classname={style.mainStoryButton} color={"white"}/>
                </div>
            </div>
        </div>
    )
}

export default MainStory