import { AsiaModule } from './asia.module';

describe('AsiaModule', () => {
  let asiaModule: AsiaModule;

  beforeEach(() => {
    asiaModule = new AsiaModule();
  });

  it('should create an instance', () => {
    expect(asiaModule).toBeTruthy();
  });
});
