import React from 'react';

const AnaliticsStatistic = () => {
    const budgetInfo = [
        {id:1,text:"lorem ipsum"},
        {id:2,text:"lorem ipsum"},
        {id:3,text:"lorem ipsum"},
        {id:4,text:"lorem ipsum"},
        {id:5,text:"lorem ipsum"},
    ]


    return (
            <div className="card 1">
                <div style={{margin: "-30px 0 0px 0"}} className="card_image">
                    <h2 className="title title-white">Calculate your budget</h2>
                    {budgetInfo.map((info) => {
                        return(
                            <h6 className="budgetInfoText" key={info.id}>{info.text}</h6>
                        )
                    })}
                </div>
                <div className="card_title title-white">
                    <p>Card Title</p>
                </div>
            </div>
    );
};

export default AnaliticsStatistic;