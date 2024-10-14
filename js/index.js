//function btn day
const toggleDay = document.querySelector(".checkbox")

const hamburguer  = document.querySelector(".abrir")

const header = document.querySelector("#container-header")

const section= document.querySelectorAll(".hidden")

const navSobre = document.querySelector("#sobre")

const menuSobre = document.querySelector('.ancora-sobre')

const navegacao = document.querySelectorAll("a")

const navSection = document.querySelectorAll('.section')

const links = document.querySelectorAll('.nav')

const  btn_close = document.getElementById("btn-close")

const headerMain=document.getElementById("header")

const topo = document.getElementById("topo")

topo.onclick=()=>{
    window.scrollTo(0,0)
}


window.onresize=()=>{
    console.log(window.innerWidth)
    if(window.innerWidth < 1600){
        headerMain.classList.remove("close")
        headerMain.classList.add("open")
        btn_close.style.display="none"
        
    }else{
  btn_close.style.display="block"
    }
}


btn_close.onclick=()=>{
    console.log(headerMain.className)


    if(headerMain.classList.contains("close")){
    headerMain.classList.remove("close")
    headerMain.classList.add("open")
    }else{
        headerMain.classList.add("close")
        headerMain.classList.remove("open")
    }
}

window.onscroll=()=>{
navSection.forEach(section =>{
    let top = window.scrollY
    let offset=section.offsetTop
    let heightSection = section.offsetHeight
    let idSection = section.getAttribute('id')


    if(top >= offset && top < offset+heightSection){
        links.forEach(link=>{
            link.classList.remove('nav-ativo')

            document.querySelector(`header a[href*=${idSection}]`).classList.add("nav-ativo")
        })


    }
})
}


navegacao.forEach(item=>{
    item.addEventListener("click", ()=>{
        if(header.classList.contains("menu-ativo")){
            header.classList.remove("menu-ativo")
            hamburguer.checked=false
        }
    } )
})


//observer animationn 

const observer=new IntersectionObserver( (e)=>{
    e.forEach(item=>{
        if(item.isIntersecting == true){
            if(item.target.classList.contains("hiddenOne")){
                item.target.classList.add("showOne")
            }else{
                item.target.classList.add("showTwo")
            }
        }else{
            item.target.classList.remove("showOne")
            item.target.classList.remove("showTwo")
        }
    })
})

section.forEach(e=>{

    observer.observe(e)

})


//menu hamburguer
hamburguer.onclick= ()=>{

         header.classList.toggle("menu-ativo")
   
   
}

//botao para mudar de dark para light

toggleDay.onclick = () =>{

    document.body.classList.toggle("day")
}