//AQUI INDICAMOS LO QUE SE DEBE DE HACER, CUANDO SE ENVIE ENVIE UN MENSAJE.
self.onmessage = (e) => {
  console.log(e.data) // por el "e" podemos recibir valores para usar aqui.

  startWork() //aqui empezamos a ejecutar el trabajo costoso.
}

const startWork = () => {
  for (let index = 0; index < 50000; index++) {
    console.log(index)
  }

  postMessage('termine') //asi podemos enviar un mensaje cuando se termine el trabajo
}


onerror = (e) => { // ASI PODEMOS MANEJAR, EN CASO QUE OCURRA UN ERROR AQUI
  console.error('Se ha producido un error en el worker:', e)
  //AQUI DENTRO
}