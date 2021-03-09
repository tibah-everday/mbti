import React,{useState, useEffect} from 'react'
import {qnaList} from '../mbtiData';
function Main({handleStart}) {    
    function startTest(){        
        handleStart();        
    }
    return (
        <div className="page main">
            <h1>십이간지로 알아보는 연애유형</h1>
            <div className="fakeImage">fake image</div>
            <span>나만의 mbti 사이트입니다. <br/> 아래 시작하기 버튼을 눌러 시작하세용</span>
            <button className="startBtn" onClick={startTest}>시작하기</button>
        </div>
    )
}

export default Main
