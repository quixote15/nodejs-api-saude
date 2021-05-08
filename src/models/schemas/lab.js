import {Schema, model} from 'mongoose';
/**
 * - nome
  - endereço
  - status [ativo, inativo]
 */
const LabSchema = new Schema({
  nome: {
    type: String, 
    trim: true,
    required: true
  },
  endereco: {
    type: String, 
    required: true, 
    trim: true
  },
  status: {
    type: String,
    enum: ['ativo', 'inativo'],
    required: true,
    trim: true
  },
  
});

const Exame = model('Laboratorio', LabSchema)

export default Exame;