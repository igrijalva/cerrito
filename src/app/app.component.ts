import { Component, OnInit, VERSION } from '@angular/core';
import { DevicesService } from './devices.service';
import { Device } from './interfaces/device';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private devicesService: DevicesService) {}

  ngOnInit(): void {
    this.devices = this.devicesService.getDevices();
  }

  devices: Device[] = [];
  name = 'Angular ' + VERSION.major;
}
