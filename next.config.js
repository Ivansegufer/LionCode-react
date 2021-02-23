//Cuando se desee agregar más variables de entorno, se usará esta constante para comprobar el modo en que estamos.
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
    const env = {
        SITE_NAME: 'LionCode'
    }

    return {
        env
    } 
}