import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => {
        return <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon/>
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    }

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>

            {newsArticle('Ved Vyapak is the best', 'Top news - 5454544 readers')}
            {newsArticle('Corona virus bhos..', 'Gaali vaali news - 4545454 readers')}
            {newsArticle('Mai anda khaunga to khaunga Anda kisi ke baap ka nhi hai', 'Fact news - 445544 readers')}
        </div>
    )
}

export default Widgets
