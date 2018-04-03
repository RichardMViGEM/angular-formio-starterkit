import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-information',
  templateUrl: './change-information.component.html',
  styleUrls: ['./change-information.component.scss']
})

/**
 * use this component in any other component of the app
 * pass boolean values to indicate which information label is to be displayed. Order does not matter
 * parameters:
 *  - restartRecording    (default: false)
 *  - restartSystem       (default: false)
 * 
 * example use in a component template:
 * <app-change-information [restartSystem]='true' [restartRecording]='true'></app-change-information>
 */

export class ChangeInformationComponent implements OnInit {
  
  @Input() restartRecording:  boolean = false;
  @Input() restartSystem:     boolean = false;

  constructor() { }

  ngOnInit() { }

}
