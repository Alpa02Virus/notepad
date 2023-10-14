// var -> a hushagchid too bichich boldog dowshashadag
//let -> shi davashadagi
//addEventListenet --> browser deer hiidedeh uildeliig todorhoildog  onclick en deer ee onclick, scroll, input
const btn = document.getElementsByTagName('button')[0];
console.log(btn);
const ol = document.getElementsByTagName('ol')[0];
const input = document.getElementsByTagName('input')[0];
btn.addEventListener("click",function add(){
    if(input.value===""){
        alert("cannot be empty");
    }else{
    //createElemebt('p') -->shine tag uusgen func
    let li = document.createElement('li');
    console.log('li');
    //appendchild() --> uusgesen tag -aa uur tag docor oruulan func
    li.innerText = input.value;
    ol.appendChild(li);
   input.value="";
   const delBtn = document.createElement('button');
   delBtn.innerHTML = '<i class="bi bi-trash3-fill"></i>'
   // className --> tag-d class ner uguh func
   delBtn.className= 'delete';
   li.appendChild(delBtn);
   const checkbtn = document.createElement('button');
   checkbtn.innerHTML = '<i class="bi bi-bookmark-check-fill"></i>'
   checkbtn.className='checkbtn';
   li.appendChild(checkbtn);
   saveData();
}
})

// Listen for Enter key press
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addListItem();
    }
});

ol.addEventListener('click',function toDo(e) {
    console.log(e.target)
    let olEl = e.target;
    let liEl = olEl.parentElement;
    console.log(liEl)
    //parentElement --> tag-iin dotorh tag ruu handah 
    let dltEl = liEl.parentElement;
    console.log(dltEl)
    // className -> class-iin neriig shalgah
    if(olEl.className=='bi bi-trash3-fill'){
        dltEl.remove();
    }else if(olEl.className == 'bi bi-bookmark-check-fill'){
            //alert("done");
            // classList , className --> tag deer shineer class uusgej ugdug
            //classList --> toggle
            let check = liEl.parentElement;
            check.classList.toggle('checked');
        }
    }
);
// localstorage --> bidnii oruulsan datag web browser deer hadgaldag
//setitem -> datag hadaglana , getItem -> hadagalsan datag duudna ,
//clear , removeItem --> hadgalsan datag ustgana
function saveData(){
    localStorage.setItem("name","Ulzii");
    localStorage.setItem("age","12");
    localStorage.setItem('Notepad',ol.innerHTML);
}
function getData(){
    let data = localStorage.getItem('name');
    let age = localStorage.getItem('age');
    ol.innerHTML = localStorage.getItem('Notepad');
}
getData();
// setItem avan hadaglah getItem ogoh hadgalsan utgaa