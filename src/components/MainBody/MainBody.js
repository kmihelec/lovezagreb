import React from "react";
import style from "./MainBody.module.css"
import {useSelector} from "react-redux";
import SmallStory from "./SmallStory";
import Button from "../Button";
import Loop from "./Loop";
import Topics from "./Topic";
import LatestImages from "./LatestImage";
import MedStory from "./MedStory";
import ShareYourPhoto from "./ShareYourPhoto";
const MainBody = () => {
    const loops = useSelector(state=> state.page.loops);
    const latest = useSelector(state=> state.page.latest);
    const mostLiked = useSelector(state=> state.page.mostLiked);
    const latestImages = useSelector(state=> state.page.latestImages);
    const topics = useSelector(state=> state.page.topics);
    const ranm = []
    for(let i = 0; i<mostLiked.length; i++) {
        ranm[i] = Math.floor(Math.random()* Math.floor(500))
    }


    return (
        <div className={style.main}>
            <div className={style.mainBody}>
                {/* --------------------------------NEWEST STORIES -------------------------------- */}
                <div className={style.latest}>
                {latest.map((latestStory, i) => {
                    if (i < 2) return <MedStory  key={latestStory.ID} item={latestStory} index={i}/>
                    else if (i === 3) return (<React.Fragment key={'000000'}>
                        <SmallStory key={latestStory.ID} item={latestStory} />
                        <ShareYourPhoto />
                        </React.Fragment>)
                    else return <SmallStory key={latestStory.ID} item={latestStory} />
                })}
                </div>
                <Button classname={style.moreStoriesButton} bgClr={'#ea1d5d'} name={'More stories'} fontsize={'1rem'} border={'none'} color={"white"}/>

                {/* -------------------------------- LOOPS -------------------------------- */}
                <div className={style.section}>
                <h2 className={style.sectionTitle}>Latest ZagrebLoops</h2>
                <h3 className={style.sectionSubTitle}>Move your cursor over the video to play it</h3>
                    <div className={style.loopsContainer}>
                        {loops.map(loop => <Loop key={loop.ID} item={loop}/>)}
                    </div>
                    <Button classname={style.moreStoriesButton} bgClr={'#ea1d5d'} name={'More loops'} fontsize={'1rem'} border={'none'} color={"white"}/>
                </div>
                {/* -------------------------------- MOST POPULAR STORIES -------------------------------- */}
                <div className={style.section}>
                    <h2 className={style.sectionTitle}>Most popular stories</h2>
                    <div className={style.latest}>
                        {mostLiked.map((story, i )=><SmallStory key={`${story.ID}${ranm[i]}`} item={story}/>
                        )}
                    </div>
                    <Button classname={style.moreStoriesButton} bgClr={'#ea1d5d'} name={'More stories'} fontsize={'1rem'} border={'none'} color={"white"}/>
                </div>

                {/* -------------------------------- TOPICS -------------------------------- */}

                <div className={style.section}>
                    <h2 className={style.sectionTitle}>ExploreTopics</h2>
                    <div className={style.slider}>
                        <div className={style.hide}>
                            {topics.map((topic, i) => <Topics key={topic.ID} items={topic} name={topic.name} article={topic.article} id={i} />)}
                        </div>
                    </div>
                </div>

                {/* -------------------------------- LATEST IMAGES -------------------------------- */}

                <div className={style.section}>
                    <h2 className={style.sectionTitle}>Latest images</h2>
                    <div className={style.slider}>
                        <div className={style.hide}>
                            {latestImages.map((image, i) => <LatestImages key={image.MediaID} item={image} id={i} />)}
                        </div>
                    </div>
                </div>

                {/* -------------------------------- SHARE PHOTO -------------------------------- */}
                <div className={style.section}>
                    <h2 className={style.sectionTitle}>Share your photo</h2>
                    <h3 className={style.sectionSubTitle}>Send us your photo of Zagreb with your personal details and we will share it on our Photo Wall</h3>
                    <div className={style.sharePhotos}>
                        <Button classname={style.moreStoriesButton} bgClr={'#ea1d5d'} name={'View more images'} fontsize={'1rem'} border={'none'} color={"white"}/>
                        <Button classname={style.sendPhoto} bgClr={'transparent'} name={'Send a photo'} fontsize={'1rem'} border={'1px solid #ea1d5d'} color={"#ea1d5d"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBody