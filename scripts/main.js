//DOM elements
const previousWaveBtn = document.querySelector("#previousWaveBtn");
const nextWaveBtn = document.querySelector("#nextWaveBtn");
const imageContainer = document.querySelector("#imageContainer")
const currentWave = document.querySelector("#wave");

//helper functions
async function getWaves()
{
    const response = await fetch("https://raw.githubusercontent.com/Tiamtum/inferno-wave-visualizer/main/scripts/waves.json");
    const waves = await response.json();
    return waves;
}

function clearImages()
{
    imageContainer.replaceChildren();
}
function updateWave(waveCount)
{
    currentWave.replaceChildren();
    currentWave.appendChild(document.createTextNode(waveCount.toString()));
}

function setImages(wave)
{
    wave.forEach(mob => {
        for(let i = 0; i<mob.num; i++)
        {
            let img = document.createElement("img");
            img.src = `images/mobs/${mob.mob}.webp`;
            img.alt = `${mob.mob}`;
            imageContainer.appendChild(img);
        }
    })
}

//'main' 
let waveCount = 1;
getWaves().then(waves =>{
    if(waveCount == 1)
    {
        updateWave(waveCount)
        setImages(waves[waveCount]);
    }
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
        if(waveCount < 69)
        {
            clearImages()
            waveCount++;
            updateWave(waveCount);
            setImages(waves[waveCount]);
        }
    })
})

