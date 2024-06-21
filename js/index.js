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