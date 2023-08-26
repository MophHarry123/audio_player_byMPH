// const audioElement1 = document.getElementById("audioElement1");
// const audioElement2 = document.getElementById("audioElement2");
// const audioElement3 = document.getElementById("audioElement3");
// const audioElement4 = document.getElementById("audioElement4");
// const audioElement5 = document.getElementById("audioElement5");


// window.addEventListener("keydown",(event)=>
// {
// const typedChar = event.key;
// if(typedChar==="a")
// {

//     audioElement1.play();
// }

// else if(typedChar==="s")
// {
//     audioElement2.play();
// }
// else if(typedChar==="d")
// {
//     audioElement3.play();
// }
// else if(typedChar==="f")
// {
//     audioElement4.play();
// }
// else if(typedChar==="g")
// {
//     audioElement5.play();
// }



// });

const songElement = document.getElementById("songElement");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const volumeUpBtn = document.getElementById("volumeUpBtn");
const volumeDownBtn = document.getElementById("volumeDownBtn")
const volumePercentage = document.getElementById("volumePercentage");
const currentPlayingTime = document.getElementById("currentPlayingTime");
const skipPlusBtn = document.getElementById("skipPlusBtn");
const skipMinusBtn = document.getElementById("skipMinusBtn");
const volumeSlider = document.getElementById("volumeSlider");
const durationSlider = document.getElementById("durationSlider");



playBtn.onclick = () =>
{

    songElement.play();  
}

pauseBtn.onclick = () =>
{
    songElement.pause();
}

// skipPlusBtn.onclick = ()=>
// {
//     const second = parseInt(songElement.currentTime);
//     const totalSecond = parseInt(songElement.duration);
//     if(second<totalSecond)
//     {
//         songElement.currentTime = second +5;
//     }
// }

// skipMinusBtn.onclick = () =>
// {
//     // const second = parseInt(songElement.currentTime);
//     // const totalSecond = parseInt(songElement.duration);
//     // if(second>totalSecond)
//     // {
//     //     songElement.currentTime = second -5;
//     // }

//     const second = parseInt(songElement.currentTime);
//     const totalSecond = parseInt(songElement.duration);
//     if(second<totalSecond)
//     {
//         songElement.currentTime = second -5;
//     }
// }



songElement.addEventListener("timeupdate", ()=>
{
    const second = parseInt(songElement.currentTime);
    const displayMintue = parseInt(second / 60);
    const displaySecond = parseInt(second % 60);
    currentPlayingTime.innerText = `${displayMintue} min : ${displaySecond} sec`;
})

volumeSlider.onchange = (event) =>
{
   const sliderVolumePercentage = event.target.value;
   songElement.volume = sliderVolumePercentage/100;
   volumePercentage.innerText = `${sliderVolumePercentage} %`;
}

window.onload = () =>
{
    durationSlider.max = songElement.duration
}

durationSlider.onchange = (event) =>
{
    const sliderDuration = event.target.value;
    songElement.currentTime = sliderDuration;
}



function link() {
    window.location.href = "opps.html";
}

