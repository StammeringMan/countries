import { OceaniaModule } from './oceania.module';

describe('OceaniaModule', () => {
  let oceaniaModule: OceaniaModule;

  beforeEach(() => {
    oceaniaModule = new OceaniaModule();
  });

  it('should create an instance', () => {
    expect(oceaniaModule).toBeTruthy();
  });
});
