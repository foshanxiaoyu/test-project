// var btn = document.getElementById("btn");
// btn.addEventListener("click", function()) {}
// let header = document.querySelector('header');
// let section = document.querySelector('section');

//保存一个json文件访问的URL作为一个变量
var pageCount =1
// let reqURL = "animals.json";
// var btn1 = document.getElementById('btn1');
var animalContaner = document.getElementById("aninmals-item");
var btn2 = document.getElementById('myButton');
var btnStar = document.getElementById('btn1');

var ourRqt = new XMLHttpRequest();


// 这个测试得到一个经验，就是加载在HTML头的js里面元素，在后面定义的HTML-ID会不能查找到，解决方法将JS到BODY底部加载或引入
btn2.addEventListener('click', showMesga, false); //鼠标单击的时候调用showMes这个函数  
function showMesga() {
    alert("事件2监听");
}
// 以上经验总结
// btn1.addEventListener('click', showMsg, false); //鼠标单击的时候调用showMes这个函数  
btnStar.addEventListener('click',function () //鼠标单击的时候调用showMes这个函数  
 {
    
    var reqURL = 'https://learnwebcode.github.io/json-example/animals-'+pageCount+'.json';
    console.log(pageCount+reqURL);
    ourRqt.open('GET',reqURL);
    ourRqt.onload = function(){
        // console.log(ourRqt.responseText);
        if (ourRqt.status == 200) {/*返回状态为200，即为数据获取成功*/
            var jData = JSON.parse(ourRqt.responseText);
        //     for(var i=0;i<jData.length;i++){
        //         console.log(jData[i]);
            }
        // }
    renderHTML(jData);        
    if (pageCount>3){
        console.log("进入pgif");
        btnStar.classList.add("hide-me");
        btn2.classList.add("hide-me");}
    };
ourRqt.send();
pageCount++;
});

function renderHTML(e) {
    var htmlString = "";
    for (i=0;i<e.length;i++){
        htmlString+="<p>"+e[i].name+"</p>"
    }
    animalContaner.insertAdjacentHTML('beforeEnd',htmlString);
};




    // btn.addEventListener("click",function() {
    // console.log(reqURL);    
    // var ourRqt = new XMLHttpRequest();
    // ourRqt.open('GET',reqURL);
    // ourRqt.onload = function(){
    //     console.log(ourRqt.responseText);
    //     if (ourRqt.status == 200) {/*返回状态为200，即为数据获取成功*/
    //         var jData = JSON.parse(ourRqt.responseText);
    //         for(var i=0;i<jData.length;i++){
    //             console.log(jData[i]);
    //         }
    //     }        
    // };
//   ourRqt.send();    
// });
