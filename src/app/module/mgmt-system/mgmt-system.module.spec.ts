import { MgmtSystemModule } from './mgmt-system.module';

describe('MgmtSystemModule', () => {
  let mgmtSystemModule: MgmtSystemModule;

  beforeEach(() => {
    mgmtSystemModule = new MgmtSystemModule();
  });

  it('should create an instance', () => {
    expect(mgmtSystemModule).toBeTruthy();
  });
});
