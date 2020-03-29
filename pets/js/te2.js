const petsData = [
    {
        name: "陈近南",
        jobs: "帮主",
        faves: ["生死", "斗争", "谋反"],
        brith: 1967,
        photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    },
    {
        name: "韦小宝",
        jobs: "香主",
        faves: ["抽烟", "赌博", "说谎"],
        brith: 1984,
        photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
        name: "杨大剑",
        jobs: "医生",
        faves: ["抽烟", "喝酒", "烫头发"],
        brith: 1972,
        photo:"https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
];

function moban (getpet) {

    return `
    <div class="doct1"> 
    <img class="pet-photo" src="${getpet.photo}">
    <h2 class="pet-name">${getpet.name} <span class="species">(${getpet.jobs}) </span></h2> 
    <p><strong>年龄:</strong> ${age(getpet.brith)}</p>
    </div>
    <div class="doct2">
    ${getpet.faves ? foods(getpet.faves) : ""}
    </div>
    <div class="doct3">
    </div>
    `;
}

function age(brith){
    let calculatedAge = new Date().getFullYear() - brith;
    if (calculatedAge == 1) {
      return "1 岁了";
    } else if (calculatedAge == 0) {
      return "小宝贝";
    } else {
      return `已经${calculatedAge} 岁了`;
    }

}

function foods(foods){
    return `
    <h4>喜欢的事有：</h4>
    <ul class="foods-list">
    ${foods.map(foods => `<li>${foods}</li>`).join("")}
    </ul>
    `;

}

document.getElementById("room").innerHTML = `<h1 class="app-title" >共有宝塔镇河妖大人物  ${petsData.length} 位  
</h1>${petsData.map(moban).join("")}  
<p class="footer">These ${petsData.length} famasman were added recently. Check back soon for updates.</p>`;
