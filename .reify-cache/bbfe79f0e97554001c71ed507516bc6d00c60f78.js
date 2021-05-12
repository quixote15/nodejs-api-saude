"use strict";var mongoose;module.link('mongoose',{default(v){mongoose=v}},0);
const {Schema, model} = mongoose;
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

module.exportDefault(Exame);