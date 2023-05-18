export class DeviceDto {
  id: number;
  mac: string;
  type: 'deviceMatrix' | 'deviceStrip';
  ledCount: number;
  name: string;
  active: 0 | 1;
}
