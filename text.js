let inizio=document.querySelector(".start")
let gioca=document.querySelector(".parti")
let scelta = document.querySelector(".vs")
let img=document.getElementById("sceltaGiocatore")
let carta=document.getElementById("btnCarta")
let sasso=document.getElementById("btnSasso")
let forbice=document.getElementById("btnForbice")
let pc = document.querySelector(".sceltaComputer")
let arr=["paper.png", "rock.png", "scissors.png"]
let num
let contGiocatore=document.querySelector(".player")
let contPc=document.querySelector(".pc")
let puntiGiocatore=0
let puntiPc=0
gioca.addEventListener("click",cominciaGioco)
carta.addEventListener("click",sceltaCarta)
sasso.addEventListener("click",sceltaSasso)
forbice.addEventListener("click",sceltaForbice)

// start
function cominciaGioco(){
    inizio.style.visibility="hidden"
    scelta.style.visibility="visible"
    
    console.log(contGiocatore)

    
}
// inizio gioco con scelte 
function sceltePC(){
    num= Math.floor( Math.random()*arr.length)
    pc.src=arr[num]
    pc.style.visibility="visible"
    
    return pc
}
function sceltaCarta(){
    sceltePC()
    img.src= "paper.png"
    img.style.visibility="visible"
    
    if(arr[num]==="paper.png"){
        puntiGiocatore++
        puntiPc++
        contGiocatore.innerHTML=puntiGiocatore
        contPc.innerHTML= puntiPc
        
    }
    else if(arr[num]==="rock.png"){
        puntiGiocatore++
        contGiocatore.innerHTML=puntiGiocatore
    }
    else{
        puntiPc++
        contPc.innerHTML=puntiPc
        console.log("perso")
    }
    console.log(arr[num])    
    return img
    

}
function sceltaSasso(){
    img.src="rock.png"
    img.style.visibility="visible"
    
    sceltePC()
   
    if(arr[num]==="rock.png"){
        puntiGiocatore++
        puntiPc++
        contGiocatore.innerHTML=puntiGiocatore
        contPc.innerHTML= puntiPc
        
    }
    else if(arr[num]==="paper.png"){
        puntiPc++
        contPc.innerHTML=puntiPc
    }
    else{
        puntiGiocatore++
        contGiocatore.innerHTML=puntiGiocatore
        console.log("perso")
    }   
    return img
}
function sceltaForbice(){
    img.src="scissors.png"
    img.style.visibility="visible"
    sceltePC()
   
    if(arr[num]==="scissors.png"){
        puntiGiocatore++
        puntiPc++
        contGiocatore.innerHTML=puntiGiocatore
        contPc.innerHTML= puntiPc
        
    }
    else if(arr[num]==="paper.png"){
        puntiGiocatore++
        contGiocatore.innerHTML=puntiGiocatore
    }
    else{
        puntiPc++
        contPc.innerHTML=puntiPc
        console.log("perso")
    }   
    return img
}
//contatore
