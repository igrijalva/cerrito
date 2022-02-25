import { Injectable } from '@angular/core';
import { Device } from './interfaces/device';

@Injectable()
export class DevicesService {
  constructor() {}

  getDevices(): Device[] {
    const devices = [
      { id: 1, name: 'Entrada', pin: 17 },
      { id: 2, name: 'Marquesina', pin: 18 },
      { id: 3, name: 'Pasillo', pin: 19 },
      { id: 4, name: 'Isra', pin: 20 },
      { id: 5, name: 'Arbol', pin: 21 },
    ];

    return devices;
  }
}
