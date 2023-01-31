import React, { useState } from "react";
import './index.css';

export default function Calculate(){
    const [result, setResult] = useState(0);
    var sub = 0;

    function Add(){
        setResult(result + sub);
    }
    function GetNumber(no){
        sub = no;
        if(result !== 0 ){
            setResult(result + sub);
            sub = 0;
        }
    }

    return(
        <>
        <div className="container">
            <div className="wrapper">
            <div className="result-box">
                {result}
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <button className="button-box" onClick={() => setResult(0)}>AC</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <button className="button-box">+/-</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <button className="button-box">%</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <button className="button-action">/</button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <button className="button-box" onClick={() => GetNumber(7)}>7</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <button className="button-box" onClick={() => GetNumber(8)}>8</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <button className="button-box" onClick={() => GetNumber(9)}>9</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <button className="button-action">X</button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <button className="button-box"  onClick={() => GetNumber(4)}>4</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <button className="button-box"  onClick={() => GetNumber(5)}>5</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <button className="button-box"  onClick={() => GetNumber(6)}>6</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <button className="button-action">-</button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <button className="button-box" onClick={() => GetNumber(1)}>1</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <button className="button-box" onClick={() => GetNumber(2)}>2</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <button className="button-box" onClick={() => GetNumber(3)}>3</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <button className="button-action" onClick={Add}>+</button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <button className="button-box" onClick={() => GetNumber(0)}>0</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <button className="button-box">.</button>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3">
                    <button className="button-action">=</button>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}
