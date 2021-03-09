import React,{useRef, useState, useEffect} from 'react'
import {qnaList} from '../mbtiData'
import '../components/questions.css'
function Questions({handleResult, counter, handleCounter}) {
          
    const [count, setCount] =useState(0);
    const [barWidth, setBarWidth] =useState("8.33%");                
    function handleAnswerClick(e){        
        const answerIdx = Array.from(e.target.parentNode.children).indexOf(e.target);
        // 선택지 중에서 몇 번째 인덱스인지
        const answerType =  qnaList[count].a[answerIdx].type;        
        for(let i=0; i<counter.length;i++){            
            for(let j =0; j<answerType.length; j++){
                if(counter[i].name===answerType[j]){
                    counter[i].value++;                    
                }
            }
        }        
        handleCounter(counter);
        if(count===11){            
            handleResult();
            return;
        }
        setCount(count+1);                        
        setBarWidth((((count+2)/12)*100)+"%");                
    }
   
    const barStyle={
        width: `${barWidth}`
    }
    return (
        <div className="page">
            <div className="status">
                <div className="statusBar" style={barStyle}>상태바</div>
            </div>
            <div className="question">{qnaList[count].q}</div>
            <ul className="answerSet" >
                <li className="answer" onClick={handleAnswerClick}>{qnaList[count].a[0].answer}</li>
                <li className="answer" onClick={handleAnswerClick}>{qnaList[count].a[1].answer}</li>
                <li className="answer" onClick={handleAnswerClick}>{qnaList[count].a[2].answer}</li>
            </ul>
        </div>
    )
}

export default Questions
