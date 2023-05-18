import IMode from './mode.interface';
export default interface IDevice {
  id?: number;
  name: string;
  type: 'deviceMatrix' | 'deviceStrip' | string;
  ledCount: number;
  mac: string;
  mode?: IMode;
  active: 0 | 1;
}
