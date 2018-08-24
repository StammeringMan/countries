import { EuropeModule } from './europe.module';

describe('EuropeModule', () => {
  let europeModule: EuropeModule;

  beforeEach(() => {
    europeModule = new EuropeModule();
  });

  it('should create an instance', () => {
    expect(europeModule).toBeTruthy();
  });
});
