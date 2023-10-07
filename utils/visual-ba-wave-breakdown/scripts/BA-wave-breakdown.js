const previousWaveBtn = document.querySelector("#previousWaveBtn");
const nextWaveBtn = document.querySelector("#nextWaveBtn");
const attackerContainer = document.querySelector("#attackerContainer")
const defenderContainer = document.querySelector("#defenderContainer")
const healerContainer = document.querySelector("#healerContainer")
const currentWave = document.querySelector("#wave");
const waveInput = document.querySelector("#waveNumInput")
const waves = 
{
    "1":
    [
        {
            "attacker":
            { 
                "penance_fighter":{"initial":"2","reserves":"2"},"penance_ranger":{"initial":"2","reserves":"2"}
            }
        },
        {
            "defender":
            {
                "penance_runner":{"initial":"2",reserves:"0"}
            }
        },
        {
            "healer": 
            {
                "penance_healer":{"intial":"2",reserves:"0"}
            }
        }
        
    ],
    "2":
    [
        {
            "attacker":
            { 
                "penance_fighter":{"initial":"2","reserves":"3"},"penance_ranger":{"initial":"3","reserves":"1"}
            }
        },
        {
            "defender":
            {
                "penance_runner":{"initial":"2",reserves:"1"}
            }
        },
        {
            "healer": 
            {
                "penance_healer":{"initial":"3",reserves:"0"}
            }
        }
        
    ],
    "3":
    [
        {
            "attacker":
            { 
                "penance_fighter":{"initial":"5","reserves":"0"},"penance_ranger":{"initial":"3","reserves":"3"}
            }
        },
        {
            "defender":
            {
                "penance_runner":{"initial":"2",reserves:"2"}
            }
        },
        {
            "healer": 
            {
                "penance_healer":{"initial":"2",reserves:"1"}
            }
        }
        
    ],
    "4":
    [
        {
            "attacker":
            { 
                "penance_fighter":{"initial":"5","reserves":"1"},"penance_ranger":{"initial":"3","reserves":"3"}
            }
        },
        {
            "defender":
            {
                "penance_runner":{"initial":"3",reserves:"1"}
            }
        },
        {
            "healer": 
            {
                "penance_healer":{"initial":"3",reserves:"1"}
            }
        }
        
    ],
    "5":
    [
        {
            "attacker":
            { 
                "penance_fighter":{"initial":"3","reserves":"3"},"penance_ranger":{"initial":"5","reserves":"1"}
            }
        },
        {
            "defender":
            {
                "penance_runner":{"initial":"4",reserves:"1"}
            }
        },
        {
            "healer": 
            {
                "penance_healer":{"initial":"4",reserves:"1"}
            }
        }
        
    ],
    "6":
    [
        {
            "attacker":
            { 
                "penance_fighter":{"initial":"5","reserves":"1"},"penance_ranger":{"initial":"5","reserves":"2"}
            }
        },
        {
            "defender":
            {
                "penance_runner":{"initial":"4",reserves:"2"}
            }
        },
        {
            "healer": 
            {
                "penance_healer":{"initial":"4",reserves:"2"}
            }
        }
        
    ],
    "7":
    [
        {
            "attacker":
            { 
                "penance_fighter":{"initial":"5","reserves":"2"},"penance_ranger":{"initial":"6","reserves":"1"}
            }
        },
        {
            "defender":
            {
                "penance_runner":{"initial":"5",reserves:"1"}
            }
        },
        {
            "healer": 
            {
                "penance_healer":{"initial":"4",reserves:"3"}
            }
        }
        
    ],
    "8":
    [
        {
            "attacker":
            { 
                "penance_fighter":{"initial":"7","reserves":"0"},"penance_ranger":{"initial":"5","reserves":"3"}
            }
        },
        {
            "defender":
            {
                "penance_runner":{"initial":"5",reserves:"2"}
            }
        },
        {
            "healer": 
            {
                "penance_healer":{"initial":"5",reserves:"2"}
            }
        }
        
    ],
    "9":
    [
        {
            "attacker":
            { 
                "penance_fighter":{"initial":"6","reserves":"2"},"penance_ranger":{"initial":"7","reserves":"1"}
            }
        },
        {
            "defender":
            {
                "penance_runner":{"initial":"5",reserves:"4"}
            }
        },
        {
            "healer": 
            {
                "penance_healer":{"initial":"6",reserves:"2"}
            }
        }
        
    ],
    "10":
    [
        {
            "attacker":
            { 
                "penance_fighter":{"initial":"6","reserves":"1"},"penance_ranger":{"initial":"5","reserves":"2"}
            }
        },
        {
            "defender":
            {
                "penance_runner":{"initial":"5",reserves:"1"}
            }
        },
        {
            "healer": 
            {
                "penance_healer":{"initial":"4",reserves:"3"}
            }
        }
        
    ]
}

function clearImages()
{
    imageContainer.replaceChildren();
}
function updateWave(waveCount)
{
    currentWave.replaceChildren();
    currentWave.appendChild(document.createTextNode(waveCount.toString()));
    waveInput.value = waveCount.toString();
}
function setImages(wave)
{
    // wave.forEach(mob => {
    //     for(let i = 0; i<mob.num; i++)
    //     {
    //         let img = document.createElement("img");
    //         img.src = `images/mobs/${mob.mob}.webp`;
    //         img.alt = `${mob.mob}`;
    //         imageContainer.appendChild(img);
    //     }
    // })
    wave.forEach(role => {
        console.log(role);
    })
}
 
//init
let waveCount = 1;
updateWave(waveCount)
setImages(waves[waveCount]);

//'main'
previousWaveBtn.addEventListener("click",()=>{
    if(waveCount != 1)
    {
        clearImages()
        waveCount--;
        updateWave(waveCount);
        setImages(waves[waveCount]);
    }
})
nextWaveBtn.addEventListener("click",()=>{
    if(waveCount < 10)
    {
        clearImages()
        waveCount++;
        updateWave(waveCount);
        setImages(waves[waveCount]);
    }
})
waveInput.addEventListener("input",()=>{
    if(waveInput.value && (waveInput.value >0 && waveInput.value <11))
    {
        console.log("waveInput",waveInput.value)
        clearImages()
        waveCount = waveInput.value;
        updateWave(waveCount);
        setImages(waves[waveCount]);
    }
})