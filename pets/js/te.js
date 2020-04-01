const petsData = [
    {
        name: "汤姆",
        species: "猫",
        favFoods: ["吞拿鱼", "猫粮", "小鱼干"],
        bh: 2019,
        photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    },
    {
        name: "cherry",
        species: "猫",
        favFoods: ["吞拿鱼", "猫粮", "小鱼干"],
        bh: 2020,
        photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
        name: "阿肯",
        species: "狗",
        favFoods: ["骨头", "面条", "干饭"],
        bh: 2018,
        photo:"https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
];

function moban (e) {

    return `
    <div class="doct1"> 
    <img class="pet-photo" src="${e.photo}">
    <h2 class="pet-name">${e.name} <span class="species">(${e.species}) </span></h2> 
    </div>
    <div class="doct2">
    <p><strong>年龄:</strong> ${age(e.bh)}</p>
    </div>
    <div class="doct3">
    ${e.favFoods ? foods(e.favFoods) : ""}
    </div>
    `;
}

function age(bh){
    let calculatedAge = new Date().getFullYear() - bh;
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
    <h4>喜欢的食物：</h4>
    <ul class="foods-list">
    ${foods.map(food => `<li>${food}</li>`).join("")}
    </ul>
    `;

}

document.getElementById("room").innerHTML = `
<h1 class="app-title" >共有宝塔镇河妖大人物  ${petsData.length} 位  
</h1>${petsData.map(moban).join("")} 
 <p class="footer">These${petsData.length} famuosman were added recently. Check back soon for updates.
 </p>`;
