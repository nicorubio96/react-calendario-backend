const {Router} = require('express')
const router=Router()
const { validarJWT } = require('../middlewares/validar-jwt')
const {getEvento,crearEvento,actualizarEvento,eliminarEvento} =require('../controllers/event')
const {check} = require('express-validator')
const isDATE = require('../helpers/date')
const {validarCampos} = require('../middlewares/validar-campos')

router.get('/',validarJWT,getEvento)
router.post('/',[
    check('title','el titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatoria').custom(isDATE),
    check('end','Fecha de inicio es obligatorio').custom(isDATE),
    validarJWT,
    validarCampos
],crearEvento)
router.put('/:id',validarJWT,actualizarEvento)
router.delete('/:id',validarJWT,eliminarEvento)

module.exports =router