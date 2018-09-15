import { MgmtRoutingModule } from './mgmt-routing.module';

describe('MgmtRoutingModule', () => {
  let mgmtRoutingModule: MgmtRoutingModule;

  beforeEach(() => {
    mgmtRoutingModule = new MgmtRoutingModule();
  });

  it('should create an instance', () => {
    expect(mgmtRoutingModule).toBeTruthy();
  });
});
