const { logger } = require('./tu-modulo');

const info = logger('INFO:')
const warn = logger('WARN:')

function callAPI(response, error){
	if(!error){
		warn('algo pasó mal con el api', 'nuestros monos deberían trabajar para solucionar esto')
	}

	info('respuesta recibida')
	console.log(response)
}
callAPI('ble', null)