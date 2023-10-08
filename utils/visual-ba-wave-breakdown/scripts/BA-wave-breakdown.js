const attackerRoleBtn = document.querySelector("#attackerRole");
const defenderRoleBtn = document.querySelector("#defenderRole");
const healerRoleBtn = document.querySelector("#healerRole");

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
    if(attackerRoleBtn.checked)
    {
        attackerContainer.replaceChildren();
    } 
    if(defenderRoleBtn.checked)
    {
        defenderContainer.replaceChildren();
    } 
    if(healerRoleBtn.checked)
    {
        healerContainer.replaceChildren();
    }        
}
function updateWave(waveCount)
{
    currentWave.replaceChildren();
    currentWave.appendChild(document.createTextNode(waveCount.toString()));
    waveInput.value = waveCount.toString();
}

function imageCreate(name)
{
    let img = document.createElement("img");
    img.src = `images/mobs/${name}.webp`;
    img.alt = `${name}`;
    return img;
}

function setImages(wave)
{
    const initial = parseInt(wave.penance_healer.initial);
    const reserves = parseInt(wave.penance_healer.reserves);
    const total = initial+reserves;

    for(let i = 0 ; i<total; i++)
    {
        let img = imageCreate("penance_healer");
        healerContainer.appendChild(img);
        console.log(`healerInitial - ${initial} - images created and appended`)
    }
    
    for(let i = 0; i<reserves; i++)
    {
        healerContainer.children.item(healerContainer.children.length - 1 - i).classList.add("reserves");
    }
    
}


function roleHandler()
{
    console.log("role handler called")
    if(attackerRoleBtn.checked)
    {
        setImages(attackerWaves[waveCount]);
    } 
    if(defenderRoleBtn.checked)
    {
        setImages(defenderWaves[waveCount]);
    } 
    if(healerRoleBtn.checked)
    {
        console.log("healer checked")
        setImages(healerWaves[waveCount]);
    }     
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
        clearImages()
        waveCount = waveInput.value;
        updateWave(waveCount);
        roleHandler();
    }
})