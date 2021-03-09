import React from 'react'
import {infoList} from '../mbtiData'
function Result({counter}) {    
    const sortedCounter = counter.map((item)=>item.value).sort((a,b)=>a-b);
    const maxValue= sortedCounter[sortedCounter.length-1];
    const resultValue = counter.find((item)=>item.value===maxValue);

    return (
        <div className="page">
            <h2>당신의 결과는?ㅋ</h2>
            <div className="fakeImage"></div>
            <div>{infoList[resultValue.key].name}</div>
            <span>{infoList[resultValue.key].desc}</span>
        </div>
    )
}

export default Result
