import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core'

import NewsCard from '../NewsCard/NewsCard';
import useStyles from './styles.js'


const infoCards = [
    { color: '#FF390E', title: 'Latest News', text: 'Give me the latest news', cate:'All Types of NEWS' },
    { color: '#D10000', title: 'News by Categories', cate: 'Business, Entertainment, General, Health, Science, Sports, Technology...', text: 'Give me the latest Technology news' },
    { color: '#138E00', title: 'News by Terms', cate: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#92004B', title: 'News by Sources', cate: 'BBC News', text: 'Give me the news from BBC' },

    // { color: '#8900CA', title: 'Weather',cate: 'Provides weather conditions and details like temperature, humidity, and pressure. Shows a widget with weather information.', text: 'What is the weather now?' },
    // { color: '#009C65', title: 'Bitcoin', cate: 'Gives Bitcoin price information, prices over the past week, month, and year.', text: 'what was the Bitcoin price / in past week ?' },
    // { color: '#FF6500', title: 'Calculator, Calendar', cate: 'All types of Operators & General Calendar', text: 'Try Saying- what is 5+5, What day is tomorrow ?' },
    // { color: '#000D95', title: 'Translator', cate: 'Translate phrases from one language to another', text: 'What languages are avaliable?' },
    
  ];


const NewsCards = ( { articles, activeArticle }) => {
    const classes = useStyles();

    if(!articles.length){
        return (
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                    {infoCards.map((infoCard) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                            <div className={classes.card} style={{backgroundColor: infoCard.color}}>
                                <Typography variant="h5">{infoCard.title}</Typography>
                                <Typography variant="h6">{infoCard.cate}</Typography>
                                { 
                                    infoCard.info 
                                        ? (<Typography variant="h6">
                                            <strong>
                                                {/* {infoCard.title.split(' ')[2]} */}
                                                

                                            </strong>
                                                <br />
                                                {infoCard.info}
                                            </Typography>) : null 
                                }
                                <Typography variant="h6">Try Saying: <br /> <i>{infoCard.text}</i></Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        )
    }


    return (
        <Grow in>

            <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                {articles.map((article, i) => (
                    <Grid key={i} item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                        <NewsCard article={article} activeArticle={activeArticle} i={i} />
                    </Grid>

                ))}
            </Grid>

        </Grow>
    )
}

export default NewsCards;
