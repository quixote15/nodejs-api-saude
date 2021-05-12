"use strict";var mongoose;module.link('mongoose',{default(v){mongoose=v}},0);
const {Schema, model} = mongoose;
const exameSchema = new Schema({
  nome: {
    type: String, 
    trim: true,
    required: true
  },
  tipo: {
    type: String, 
    enum: ['analise clinica', 'imagem'],
    required: true, 
    trim: true
  },
  status: {
    type: String,
    enum: ['ativo', 'inativo'],
    required: true,
    trim: true
  },
  labsAssociados: {type: [Schema.ObjectId], ref: 'Laboratorio'},
});

const Exame = model('Exame', exameSchema)

module.exportDefault(Exame);