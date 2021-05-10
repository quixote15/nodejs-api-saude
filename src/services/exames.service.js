import ValidationError from "../utils/ValidationError.js";

class ExamesService {
  constructor({examesRepository, labsRepository}) {
    this.examesRepository = examesRepository;
    this.labsRepository = labsRepository;
  }

  

  async associar({exame_id, lab_id}) {
    const errors = [];
    const labPromise = this.labsRepository.findOne(lab_id);
    const examePromise = this.examesRepository.findOne(exame_id);
    const [lab, exame] = await Promise.all([labPromise, examePromise]);
    const alreadyAssociated = exame.labs.find(currentLab => {
      return currentLab === lab_id
    });


    if(lab.status !== 'ativo') {
      throw new ValidationError('Laboratório está desativado.');
    }

    if(alreadyAssociated) {
      throw new ValidationError('Exame já está associado com esse laboratório.');
    }
    
    
    await this.examesRepository.update({_id: exame_id}, {$push: {labs: lab_id}});
    return 'Exame Associado.'
  }

  desassociar(){

  }
}

export default ExamesService;