"use strict";var Lab;module.link("../../models/schemas/lab.js",{default(v){Lab=v}},0);var LabRepository;module.link("../lab.repository.js",{default(v){LabRepository=v}},1);


class LabsFactory {
  static createInstance() {
    return new LabRepository({dbSchema: Lab, collectionName: 'laboratório'})
  }
}

module.exportDefault(LabsFactory);