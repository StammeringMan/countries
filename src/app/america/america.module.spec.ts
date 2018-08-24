import { AmericaModule } from './america.module';

describe('AmericaModule', () => {
  let americaModule: AmericaModule;

  beforeEach(() => {
    americaModule = new AmericaModule();
  });

  it('should create an instance', () => {
    expect(americaModule).toBeTruthy();
  });
});
