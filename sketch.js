document.querySelector('.cross').style.display = 'none'
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'


    }else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(()=>{
            document.querySelector('.cross').style.display = 'inline' 
        },300)
    }
})   


var typed = new Typed(".typing", {
    strings: ["Programmer","Student","Traveller"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Portfolio","Profile","Website"],
    typeSpeed: 200,
    backSpeed: 60,
    loop: true
});



