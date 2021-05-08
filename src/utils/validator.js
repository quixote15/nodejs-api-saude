class SchemaValidator {
  errors = [];
  
  validateNome(schema) {
    const {nome} = schema;
    if(nome && nome.length > 4) {
      return this;
    }

    this.errors.push({message: 'nome is required.'})
  }

  validateStatus(schema) {
    const {status} = schema;
    const validStatus = ['ativo', 'inativo'];
    if(status && validStatus.includes(status)) {
      return this;
    }

    this.errors.push({message: 'status is invalid.'})
  }

  validate(schema) {
    this.validateNome(schema);
    this.validateStatus(schema);
    return this.errors;
  }
}

export default SchemaValidator