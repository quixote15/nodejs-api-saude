class SchemaValidator {
  errors = [];
  
  validateNome(schema) {
    const {nome} = schema;
    if(nome && nome.length > 4) {
      return this;
    }

    this.errors.push({message: 'nome deve conter pelo menos 4 caracteres.'})
  }

  validateStatus(schema) {
    const {status} = schema;
    const validStatus = ['ativo', 'inativo'];
    if(status && validStatus.includes(status)) {
      return this;
    }

    this.errors.push({message: 'status deve ser ativo ou inativo.'})
  }

  validate(schema) {
    this.validateNome(schema);
    this.validateStatus(schema);
    return this.errors;
  }
}

export default SchemaValidator