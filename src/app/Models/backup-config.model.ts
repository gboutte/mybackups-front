import { autoserialize } from 'cerialize';

export class BackupConfig {
  @autoserialize id: string = '';
  @autoserialize name: string = '';
  @autoserialize enabled: boolean = true;
  @autoserialize to_keep: number = 0;
  @autoserialize frequency: string = '';
  @autoserialize from_type: string = '';
  @autoserialize to_type: string = '';
  @autoserialize from_parameters: any = '';
  @autoserialize to_parameters: any = '';

  constructor(
    name: string,
    enabled: boolean,
    to_keep: number,
    frequency: string,
    from_type: string,
    to_type: string,
    from_parameters: any,
    to_parameters: any
  ) {
    this.name = name;
    this.enabled = enabled;
    this.to_keep = to_keep;
    this.frequency = frequency;
    this.from_type = from_type;
    this.to_type = to_type;
    this.from_parameters = from_parameters;
    this.to_parameters = to_parameters;
  }
}
