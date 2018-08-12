import { CusTableModule } from './cus-table.module';

describe('CusTableModule', () => {
  let cusTableModule: CusTableModule;

  beforeEach(() => {
    cusTableModule = new CusTableModule();
  });

  it('should create an instance', () => {
    expect(cusTableModule).toBeTruthy();
  });
});
