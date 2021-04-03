import React, { useState,useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import { Typography } from '@material-ui/core';
import useStyles from './styles';
import { wordsToNumbers } from "words-to-numbers";

const alanKey = "3dcbb713a2ac293c518051886043ae0b2e956eca572e1d8b807a3e2338fdd0dc/stage"

const App = () => {

    const [activeArticle, setActiveArticle] = useState(-1);
    const [newsArticles, setNewsArticles] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command,articles,number }) => {  
                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                } else if(command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle+1 );
                } else if(command === 'open') {

                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy: true}) : number;
                    const article = articles[parsedNumber - 1];

                    if(parsedNumber > 20) {
                        alanBtn().playText("Please try that again")
                    } else if(article) {
                        window.open(article.url, '_blank');
                        alanBtn().playText('Opening...')
                    }

                    console.log(number);
                    window.open(articles.url, '_blank');
                }
            }  
        })
    }, [])

    return (
        <div>
            <div className={classes.designer}>
            <p>Designed by <a className={classes.link} style={{fontSize: '18px', letterSpacing: '1.5px'}} href="https://www.linkedin.com/in/jawahar-babu/" target="_blank"> Jawahar Babu</a></p>
            </div>
            {/* <div className={classes.designer}>
                <p style={{color: "#3d3d40",fontSize: "19px"}}> AI Voice Controlled News Reader,
                <br />
                 Designed using <a href="https://alan.app/" target='_blank' rel="none"
                style={{color: "#00033b", textDecoration:'none',textShadow: '.6px .6px #55565e'}}
            >Alan.app</a></p>
            </div> */}
            <div className={classes.logoContainer}>
            {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number "2"</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
          </div>
        ) : null}
                <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/music-logo-design.jpg" className={classes.alanLogo} alt="Logo" />
            </div>
            {/* <div className={classes.designer}>
                <p style={{color: "#3d3d40",fontSize: "19px"}}> AI Voice Controlled News Reader,
                <br />
                 Designed using <a href="https://alan.app/" target='_blank' rel="none"
                style={{color: "#00033b", textDecoration:'none',textShadow: '.6px .6px #55565e'}}
            >Alan.app</a></p>
            </div> */}
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
            {!newsArticles.length ? (
        <div className={classes.footer}>
          <Typography variant="body1" component="h2">
          AI Voice Controlled News Reader<br /> Designed Using  
            <a className={classes.linkBottom} href="https://alan.app/"> Alan.app</a>
          </Typography>
        </div>
      ) : null}
        </div>
    )
}

export default App
