const btn_onMessage = document.querySelector('#btn-onMessage-work')
const btn_terminate = document.querySelector('#btn-terminate-work')
const btn_close = document.querySelector('#btn-close-work')

//ASI CREAMOS NUESTRO WORKER
const miWorker = new Worker('./mi-worker.js')

//ASI PODEMOS RECIBIR UN MENSAJE CUANDO SE TERMINE EL TRABAJO DEL WORKER
miWorker.onmessage = (e) => {
  console.log(e.data)
}

/* ESCUCHAR EVENTOS DE LOS BOTONES */
/* ESCUCHAR EVENTOS DE LOS BOTONES */

btn_onMessage.addEventListener('click', () => {
  miWorker.postMessage('empezar') //EMPEZAR A EJECUTAR EL TRABAJO DEL WORKER
})

btn_terminate.addEventListener('click', () => {
  miWorker.terminate() //DETENER EL TRABAJO DEL WORKER DE FORMA INMEDIATA

  /*
    - LIBERA LOS EVENTOS ASOCIADOS
    - SI NECESITAS DETENER EL WORKER INMEDIATAMENTE SIN IMPORTAR EL ESTADO
      ACTUAL DE LAS TAREAS O RECURSOS
  */
})

btn_close.addEventListener('click', () => {
  miWorker.close() //DETENER EL TRABAJO PERO CONSIDERANDO QUE SE TERMINEN

  /*
    - DETENER EL TRABAJO DEL WORKER
    - SE RECOMIENDA USAR ESTE, YA QUE FINALIZAR TAREAS EN PROCESO
      Y LIBERA LOS RECURSOS DE MANERA ORDENADA.
  */
})

/*
 - DESPUES DE USAR TERMIANTE() O CLOSE(), YA NO PODEMOS VOLVER A USAR EL WORKER,
  PERO SI QUEREMOS VOLVER A USARLOE, DEBEMO CREAR UN NUEVO OBJETO WORKER
*/