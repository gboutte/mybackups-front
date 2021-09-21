import { autoserialize } from 'cerialize';

export class BackupType {
  @autoserialize code: string = '';
  @autoserialize name: string = '';
  @autoserialize isOrigin: boolean = false;
  @autoserialize isDestination: boolean = false;
  @autoserialize parameters: any = {};

  constructor(
    code: string,
    name: string,
    isOrigin: boolean,
    isDestination: boolean,
    parameters: any
  ) {
    this.code = code;
    this.name = name;
    this.isOrigin = isOrigin;
    this.isDestination = isDestination;
    this.parameters = parameters;
  }
}
