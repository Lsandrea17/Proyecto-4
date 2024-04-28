function ShowModal(){
  let modal=document.getElementById("modal")
  let ModalMassege=document.getElementById("ModalMassege")
  let inputUsarname=document.getElementById("input-usarname")
  ModalMassege.textContent="Hola te damos la bienvenida a nuestro portal " + inputUsarname.value
  modal.classList.remove("hidden")

  let modalPanel=document.getElementById("modal-panel")
  

  setTimeout(()=>{
    modalPanel.classList.add("opacity-100")
  },150)


}

function hideModal(){
  let modal=document.getElementById("modal")
  modal.classList.add("hidden")

  let modalPanel=document.getElementById("modal-panel")
  

  setTimeout(()=>{
    modalPanel.classList.add("opacity-0")
  },150)

}
