let btn=document.querySelector("button");
let paraEl=document.querySelector("#password");
function generateRandomPass(){
    const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase="abcdefghijklmnopqrstuvwxyz";
    const number="0123456789";
    const symbol="@#$%^&*()_+~|}{[]<>/-=";
    const allSym=upperCase+lowerCase+number+symbol;
    let pass="";
    const len=12;
    while(len>pass.length){
        pass+=allSym[Math.floor(Math.random()*allSym.length)];
    }
    return pass;
}
btn.addEventListener("click",()=>{
    paraEl.value=generateRandomPass();
})
function copyPass(){
    paraEl.select();
    document.execCommand("copy");
}
let copyB=document.querySelector(".display img");
copyB.addEventListener("click",()=>{
    copyPass();
})