import { useState } from "react";

export default function App() {
  const [showStory,setShowStory] = useState(false);
  const [xItem,setXItem] = useState(["Willy the Goblin","Big Daddy","Father Christmas"]);
  const [yItem,setYItem] = useState(["the soup kitchen","Disneyland","the White House"]);
  const [zItem,setZItem] = useState(["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"]);
  const [ukus,setUkus] = useState(false);
  const [name,setName] = useState("");

  const [unit,setUnit] = useState(["ponds","stones"]);
  const [temperature,setTemperature] = useState(["fahrenheit","celsius"]);


  let nameText = document.getElementById("target");
  
  

  function radio(){
    var checked=document.getElementById("us").checked;
    if(checked){
      setUkus(false);
    }else{
      setUkus(true);
    }
  }
  

  function change(array,num){
    return array[num];
  }

  function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

  function changeName(value){
    const data="";
    if(value==data){ 
      return "Bob";
    }else{
      return value;
    }
  }

  function changeData(array){
    var checked=ukus;
    if(checked){
      return array[0];
    }else{
      return array[1];
    }
  }

  function changeData(){
    setShowStory(true);
    setXItem(randomValueFromArray(xItem));
    setYItem(randomValueFromArray(yItem));
    setZItem(randomValueFromArray(zItem));
    var value=document.getElementById("target").value;
    setName(changeName(value));
    setUnit(changeData(unit));
    setTemperature(changeData(temperature));
  }

  return (
    <>
      <div>
        <div>
          <label htmlFor="customname">Enter custom name:</label>
          <input id="target" type="text" name="name" />
        </div>
       <div>
          <label htmlFor="us">US</label>
          <input id="d" type="radio"  name="country" value="us" onchange="radio()" checked />
          <label htmlFor="uk">UK</label>
          <input id="f" type="radio"  name="country" value="uk"  onchange="radio()" />
        </div>
        <div>
          <button onClick={changeData}>Generate random story</button>
          
        </div>
      </div>

      {showStory && (
        <p>
          It was 94 {temperature} outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {name} saw the whole thing, but was not surprised — {xItem} weighs 300
          {unit}, and it was a hot day.
        </p>
      )}
    </>
  );
}