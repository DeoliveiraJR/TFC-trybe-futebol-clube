// import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../../app';
// import Example from '../../database/models/ExampleModel';

// import { Response } from 'superagent';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Teste de rota básica', () => {
  describe('Quando a requisição é feita com sucesso', () => {
    it('deve retornar um status 200', async () => {
      const httpRsponse = await chai.request(app).get('/')
      expect(httpRsponse.status).to.equal(200);
    });
  })

  /* it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  }); */
});