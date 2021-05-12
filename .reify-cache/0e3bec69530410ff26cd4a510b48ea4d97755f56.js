"use strict";var ValidationError;module.link("../utils/ValidationError.js",{default(v){ValidationError=v}},0);

class ExamesService {
  constructor({examesRepository, labsRepository}) {
    this.examesRepository = examesRepository;
    this.labsRepository = labsRepository;
  }

  

  async associar({exame_id, lab_id}) {

    const labPromise = this.labsRepository.findOne(lab_id);
    const examePromise = this.examesRepository.findOne(exame_id);
    const [lab, exame] = await Promise.all([labPromise, examePromise]);

    const alreadyAssociated = exame.labsAssociados.find(currentLab => {
      return currentLab === lab_id
    });


    if(lab.status !== 'ativo') {
      throw new ValidationError('Laboratório está desativado.');
    }

    if(exame.status !== 'ativo') {
      throw new ValidationError('Exame está desativado.');
    }

    if(alreadyAssociated) {
      throw new ValidationError('Exame já está associado com esse laboratório.');
    }
    
    await this.examesRepository.update({_id: exame_id}, {$push: {labsAssociados: lab_id}});
    return 'Exame associado.'
  }

  async desassociar({exame_id, lab_id}){
    await this.examesRepository.update({_id: exame_id}, {$pullAll: {labsAssociados: [lab_id]}});
    return 'Exame desassociado.'
  }
}

module.exportDefault(ExamesService);