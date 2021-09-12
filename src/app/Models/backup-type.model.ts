
export class BackupType {
  code: string = '';
  name: string = '';
  isOrigin: boolean = false;
  isDestination: boolean = false;
  parameters: any = {};

  public constructor(init?: Partial<BackupType>) {
    Object.assign(this, init);
  }
}
