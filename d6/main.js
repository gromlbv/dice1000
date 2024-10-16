import config from "./config.js"

import {Renderer} from "./renderer.js";

let {THREE, scene, camera, renderer, controls, ambientLight, directionalLight, events, gui, glbLoader, raycasting, postProcessing} = new Renderer(config);

if(postProcessing){
    if (config.bloomThreshold)
        postProcessing.params.bloomThreshold = config.bloomThreshold;
    if (config.bloomStrength)
        postProcessing.params.bloomStrength = config.bloomStrength;
    if (config.bloomRadius)
        postProcessing.params.bloomRadius = config.bloomRadius;
    if (config.bloomExposure)
        postProcessing.params.bloomExposure = config.bloomExposure;
}

gui.hide();

import {SimpleDice} from "./simple-dice.js"


let simpleDice = await SimpleDice({
    THREE,
    renderer,
    scene,
    camera,
    glbLoader,
    raycasting,
    events,
    config
})

let triggers={
    diceThrown : false,
    rollFinished : false,
    allHeld : false
}

let disposeTime = 0;
let popMsgs=[]
setInterval(()=>{
    if(performance.now()<(disposeTime+(popMsgs.length?100:2000)))
        return;
    
    if(popup.style.display != 'none'){
        popup.blur();            
        popup.style.display = 'none'
    }
    if(popMsgs.length){
        popup.innerText =  popMsgs.shift();    
        console.log(popup.innerText)
        popup.style.display = ''
        disposeTime = performance.now();
    }
},100)

let popMsg = (str)=>{
    popMsgs.push(str);
}

document.addEventListener('popmsg',(e)=>{
    popMsg(e.detail)
});
//new CustomEvent('popmsg',{detail:'got pointerdown'}))

let currentRound = 0;
//import {ThreeFace} from "./comnub/three-face.js"
import {broadcastData} from "./comnub/index.js"

document.body.addEventListener('local-data',(e)=>{
  let {data} = e.detail;
})

document.body.addEventListener('remote-data',(e)=>{
  let {data} = e.detail;
    
  popMsg("remote player data:"+JSON.stringify(data))
  if(data.type=='throw'){
      triggers.isLocalThrower = false;
      if (simpleDice.allDiceHeld()) {
        //Dice tray is full so...
        //Empty the tray..  and start a new round...
        simpleDice.diceTray.makeEmpty();
        currentRound=0;
      }
      config.desiredResult = data.values;
      simpleDice.cannonDice.throwMe(data.throwData.throwDirection,data.throwData.throwStrength);
  }else if(data.type=='hold'){
      simpleDice.toggleDiceHold(simpleDice.cannonDice.diceArray[data.id]);
  }
  config.refuelRenderer();
})


config.ondicethrown=(throwData)=>{
    //popMsg("ondicethrown.")
    triggers.diceThrown = true;
    triggers.isLocalThrower = true;
    if (simpleDice.allDiceHeld())
        currentRound=0;
}

let isLocalThrower = false;
config.onrollsimulated=()=>{
    //popMsg("onrollfinished.")
    triggers.rollSimulated = true;
    if(triggers.isLocalThrower){
        let values = simpleDice.cannonDice.diceArray.map(d=>d.value);
        config.desiredResult = values;
        console.log("sending values:",values)
        let {throwDirection,throwStrength} = simpleDice.cannonDice;
        broadcastData({type:'throw',values,throwData:{throwDirection,throwStrength}});//,simpleDice.hands[0]})
    }
}
    
config.ontogglehold=(die,id)=>{
    if(triggers.isLocalThrower){
        broadcastData({type:'hold',id});//,simpleDice.hands[0]})        
    }
}

config.onrollfinished=()=>{
    //popMsg("onrollfinished.")
    triggers.rollFinished = true;
}

config.onallheld=()=>{
    popMsg("onallheld.")
    triggers.allHeld = true;
}



function *GameLoopFn(){
    let handString = (hands)=>(!hands.length)?"":"Roll:"+currentRound+"\nHand:"+ hands[0].name + "\n" + hands[0].unicodeDisplay + "\nScore:" + hands[0].score
config.onhandschanged=(hands)=>{
    popMsg(handString(hands))
}
    popMsg("Click and drag to Roll!")
    while(true){
        yield;
        triggers.rollFinished = false;
        while(!triggers.rollFinished) yield;
        currentRound++;
        if((currentRound==3)||simpleDice.allDiceHeld()){
            simpleDice.cannonDice.allowRoll = false;
            /*
            triggers.allHeld = false;
            simpleDice.holdAll();
            while(!triggers.allHeld) yield;
            */ 
            simpleDice.cannonDice.diceArray.forEach((d,i)=>{
                if(!d.held)
                    config.ontogglehold && config.ontogglehold(d,i);//cannonDice.diceArray.indexOf(die));
                      
            })
            simpleDice.cannonDice.diceArray.forEach(d=>(!d.held)&&(simpleDice.toggleDiceHold(d)))
            //simpleDice.holdAll();
            currentRound = 0;
            simpleDice.cannonDice.allowRoll = true;
            popMsg("Round over!\n"+handString(simpleDice.diceTray.hands))
        }else popMsg("Roll: "+currentRound)
        try{
          //let json = await (await fetch('./nextStep')).json()
        }
        catch(e){
            console.log(e);
        }
    }
}



let gameLoop = GameLoopFn()
setInterval(()=>{
  let result = gameLoop.next();
},1000)


//await ThreeFace({THREE,scene,camera,glbLoader,broadcastData})
//scene.background = new THREE.Color(.7,.6,.8)
//window.rules.innerHTML=await (await fetch('bar-dice-rules.html')).text();

/**
try{
    //let json = await (await fetch('./nextStep')).json()
    //./endCycle - Sent after the user clicks the end throw cycle button.
    //./ReRoll - cocked dice...
    let json = await (await fetch('./dice.json')).json()
    let stage = await simpleDice.loadFromJSON(json);
    
}

catch (error){
    console.log(error)
}
*/