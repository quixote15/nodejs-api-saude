"use strict";var Exame;module.link("../../models/schemas/exame.js",{default(v){Exame=v}},0);var ExameRepository;module.link("../exame.repository.js",{default(v){ExameRepository=v}},1);


class ExameFactory {
  static createInstance() {
    return new ExameRepository({dbSchema: Exame, collectionName: 'exame'})
  }
}

module.exportDefault(ExameFactory);