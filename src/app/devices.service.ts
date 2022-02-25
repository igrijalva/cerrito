import { Injectable } from '@angular/core';
import { Device } from './interfaces/device';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  constructor() {}

  devices: Device[] = [
    { id: 1, name: 'Entrada', pin: 17, status: 'off' },
    { id: 2, name: 'Marquesina', pin: 18, status: 'off' },
    { id: 3, name: 'Pasillo', pin: 19, status: 'off' },
    { id: 4, name: 'Isra', pin: 20, status: 'off' },
    { id: 5, name: 'Arbol', pin: 21, status: 'off' },
  ];

  getDevices(): Device[] {
    return this.devices;
  }

  setDeviceStatus(device: Device) {
    for (var i = 0; i < this.devices.length; i++) {
      if (device.id == this.devices[i].id) {
        this.devices[i].status = device.status;
      }
    }
  }
}
