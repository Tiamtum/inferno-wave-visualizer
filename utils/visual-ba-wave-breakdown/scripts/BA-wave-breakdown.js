const previousWaveBtn = document.querySelector("#previousWaveBtn");
const nextWaveBtn = document.querySelector("#nextWaveBtn");

const attackerContainer = document.querySelector("#attackerContainer")
const defenderContainer = document.querySelector("#defenderContainer")
const healerContainer = document.querySelector("#healerContainer")

const currentWave = document.querySelector("#wave");
const waveInput = document.querySelector("#waveNumInput")

let waveCount = 1;

const attackerWaves = 
{
"1": {"penance_fighter":{"initial":"2","reserves":"2"},"penance_ranger":{"initial":"2","reserves":"2"}},
"2": {"penance_fighter":{"initial":"2","reserves":"3"},"penance_ranger":{"initial":"3","reserves":"1"}},
"3": {"penance_fighter":{"initial":"5","reserves":"0"},"penance_ranger":{"initial":"3","reserves":"3"}},
"4": {"penance_fighter":{"initial":"5","reserves":"1"},"penance_ranger":{"initial":"3","reserves":"3"}},
"5": {"penance_fighter":{"initial":"3","reserves":"3"},"penance_ranger":{"initial":"5","reserves":"1"}},
"6": {"penance_fighter":{"initial":"5","reserves":"1"},"penance_ranger":{"initial":"5","reserves":"2"}},
"7": {"penance_fighter":{"initial":"5","reserves":"2"},"penance_ranger":{"initial":"6","reserves":"1"}},
"8": {"penance_fighter":{"initial":"7","reserves":"0"},"penance_ranger":{"initial":"5","reserves":"3"}},
"9": {"penance_fighter":{"initial":"6","reserves":"2"},"penance_ranger":{"initial":"7","reserves":"1"}},
"10": {"penance_fighter":{"initial":"6","reserves":"1"},"penance_ranger":{"initial":"5","reserves":"2"}}
}
const defenderWaves = 
{
"1": {"penance_runner":{"initial":"2",reserves:"0"}},
"2": {"penance_runner":{"initial":"2",reserves:"1"}},
"3": {"penance_runner":{"initial":"2",reserves:"2"}},
"4": {"penance_runner":{"initial":"3",reserves:"1"}},
"5": {"penance_runner":{"initial":"4",reserves:"1"}},
"6": {"penance_runner":{"initial":"4",reserves:"2"}},
"7": {"penance_runner":{"initial":"5",reserves:"1"}},
"8": {"penance_runner":{"initial":"5",reserves:"2"}},
"9": {"penance_runner":{"initial":"5",reserves:"4"}},
"10": {"penance_runner":{"initial":"5",reserves:"1"}}
}
const healerWaves = 
{
"1": {"penance_healer":{"initial":"2",reserves:"0"}},
"2": {"penance_healer":{"initial":"3",reserves:"0"}},
"3": {"penance_healer":{"initial":"2",reserves:"1"}},
"4": {"penance_healer":{"initial":"3",reserves:"1"}},
"5": {"penance_healer":{"initial":"4",reserves:"1"}},
"6": {"penance_healer":{"initial":"4",reserves:"2"}},
"7": {"penance_healer":{"initial":"4",reserves:"3"}},
"8": {"penance_healer":{"initial":"5",reserves:"2"}},
"9": {"penance_healer":{"initial":"6",reserves:"2"}},
"10": {"penance_healer":{"initial":"4",reserves:"3"}}
}

function clearImages()
{
    attackerContainer.replaceChildren();
    defenderContainer.replaceChildren();
    healerContainer.replaceChildren();
}

function updateWave(waveCount)
{
    currentWave.replaceChildren();
    currentWave.appendChild(document.createTextNode(waveCount.toString()));
    waveInput.value = waveCount.toString();
}

function imageCreate(mob)
{
    let img = document.createElement("img");
    img.src = `images/mobs/${mob}.webp`;
    img.alt = `${mob}`;
    return img;
}

function setImages(container,mob,initial,reserves)
{   
    const total = initial+reserves;

    for(let i = 0 ; i<total; i++)
    {
        let img = imageCreate(mob);
        switch (container) {
            case "defenderContainer":
                defenderContainer.appendChild(img);
                break;
            case "healerContainer":
                healerContainer.appendChild(img);
                break;
            default:
                break;
        }
    }
    
    for(let i = 0; i<reserves; i++)
    {
        switch (container) {
            case "defenderContainer":
                defenderContainer.children.item(defenderContainer.children.length - 1 - i).classList.add("reserves");
                break;
            case "healerContainer":
                healerContainer.children.item(healerContainer.children.length - 1 - i).classList.add("reserves");
                break;
            default:
                break;
        }
    }
    
}

function setAttackerImages(mobs,initialFighters,reserveFighters,initialRangers,reserveRangers)
{
    const totalFighters = initialFighters+reserveFighters;
    const totalRangers = initialRangers + reserveRangers;

    //there has to be a better way to do this but this works at the moment
    for(let i = 0 ; i<totalFighters; i++)
    {
        let img = imageCreate(mobs[0]);
        attackerContainer.appendChild(img);
    } 
    for(let i = 0 ; i<reserveFighters; i++)
    {
        attackerContainer.children.item(attackerContainer.children.length - 1 - i).classList.add("reserves");        
    }   
    for(let i = 0 ; i<totalRangers; i++)
    {
        let img = imageCreate(mobs[1]);
        attackerContainer.appendChild(img);
    } 
    for(let i = 0 ; i<reserveRangers; i++)
    {
        attackerContainer.children.item(attackerContainer.children.length - 1 - i).classList.add("reserves");        
    }   

}

function roleHandler()
{
    console.log("role handler called")
    setAttackerImages(
        ["penance_fighter","penance_ranger"],
        parseInt(attackerWaves[waveCount].penance_fighter.initial),
        parseInt(attackerWaves[waveCount].penance_fighter.reserves),
        parseInt(attackerWaves[waveCount].penance_ranger.initial),
        parseInt(attackerWaves[waveCount].penance_ranger.reserves),        
        );
    setImages(
        "defenderContainer",
        "penance_runner",
        parseInt(defenderWaves[waveCount].penance_runner.initial),
        parseInt(defenderWaves[waveCount].penance_runner.reserves)
        );
    setImages(
        "healerContainer",
        "penance_healer",
        parseInt(healerWaves[waveCount].penance_healer.initial),
        parseInt(healerWaves[waveCount].penance_healer.reserves)
        );
         
}
 
updateWave(waveCount)
roleHandler();

//'main'
previousWaveBtn.addEventListener("click",()=>{
    if(waveCount != 1)
    {
        clearImages()
        waveCount--;
        updateWave(waveCount);
        roleHandler();
    }
})
nextWaveBtn.addEventListener("click",()=>{
    console.log("next clicked")
    if(waveCount < 10)
    {
        clearImages()
        waveCount++;
        updateWave(waveCount);
        roleHandler();
    }
})
waveInput.addEventListener("input",()=>{
    if(waveInput.value && (waveInput.value >0 && waveInput.value <11))
    {
        console.log("waveInput",waveInput.value)
        clearImages();
        waveCount = waveInput.value;
        updateWave(waveCount);
        roleHandler();
    }
})
