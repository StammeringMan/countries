import { AfricaModule } from './africa.module';

describe('AfricaModule', () => {
  let africaModule: AfricaModule;

  beforeEach(() => {
    africaModule = new AfricaModule();
  });

  it('should create an instance', () => {
    expect(africaModule).toBeTruthy();
  });
});
