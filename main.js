const btn_onMessage = document.querySelector('#btn-onMessage-work')
const btn_terminate = document.querySelector('#btn-terminate-work')
const btn_close = document.querySelector('#btn-close-work')

//ASI CREAMOS NUESTRO WORKER
const miWorker = new Worker('./mi-worker.js')

//ASI PODEMOS RECIBIR UN MENSAJE DEL WORKER (EJM.CUANDO SE TERMINE EL TRABAJO)
miWorker.onmessage = (e) => {
  console.log(e.data)
}

btn_onMessage.addEventListener('click', () => {
  miWorker.postMessage('empezar') //EMPEZAR A EJECUTAR EL TRABAJO DEL WORKER
})

btn_terminate.addEventListener('click', () => {
  miWorker.terminate() //DETENER EL TRABAJO DEL WORKER DE FORMA INMEDIATA.
  // - SIN IMPORTAR EL ESTADO ACTUAL DE LAS TAREAS O RECURSOS
  // - LIBERA LOS EVENTOS ASOCIADOS
})

btn_close.addEventListener('click', () => {
  miWorker.close() //DETENER EL TRABAJO DEL WORKER PERO CONSIDERANDO QUE SE TERMINEN.
    // - SE RECOMIENDA USAR ESTE, YA QUE FINALIZAR TAREAS EN PROCESO
    //   Y LIBERA LOS RECURSOS DE MANERA ORDENADA.
})

//  - DESPUES DE USAR TERMIANTE() O CLOSE(), YA NO PODEMOS VOLVER A USAR EL WORKER,
//    PERO SI QUEREMOS VOLVER A USARLOE, DEBEMO CREAR UN NUEVO OBJETO WORKER.ss