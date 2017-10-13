//en lms
//exports.log = (...args) => args.join(' '); //esta función puede recibir n parámetros

//exports.logger = (namespace) => exports.log.bind(null, namespace); // exports exporta un objeto
//tiene dos llaves: log y logger

const log = (...args) => args.join(' ');

const logger = (namespace) => {
	let message = namespace
	return log
}

module.exports = { //shorthand log:log, logger:logger
	log,
	logger,
}