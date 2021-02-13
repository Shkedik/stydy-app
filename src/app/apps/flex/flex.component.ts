import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss']
})
export class FlexComponent implements OnInit {

  flexForm: FormGroup;
  row: boolean;

  centerAI: boolean = false;
  startAI: boolean = false;
  endAI: boolean = false;
  stretch: boolean = false;

  startJC: boolean = false;
  endJC: boolean = false;
  centerJC: boolean = false;
  spaceAroundJC: boolean = false;
  spaceBetweenJC: boolean = false;
  spaseEvenlyJC: boolean = false;

  boxes:  any[] = [];

  buttonsAligmentHorizontal: any[] = [
    'center',
    'start',
    'end',
    'space-around',
    'space-between',
    'spase-evenly'
  ];

  buttonsAligmentVertical: any[] = [
    'center',
    'start',
    'end',
    'stretch'
  ];

  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    
    this.flexForm = this.formBuilder.group({
      direction: ['row'],
      horizontal: [''],
      vertical: ['']
    });    

    if (this.flexForm.controls['direction'].value === 'row') {
      this.row = true;
    }

    this.flexForm.controls['direction'].valueChanges
      .subscribe((data) => {
        if (data ===  'row') {
          this.row = true;
        } else {
          this.row = false;
        }        
      })

    this.flexForm.controls['horizontal'].valueChanges
      .subscribe((data) => {
        switch(data) {
          case 'center' : 
            this.centerJC = true;
            this.startJC = false;
            this.endJC = false;
            this.spaceAroundJC = false;
            this.spaceBetweenJC = false;
            this.spaseEvenlyJC = false;
          break
          case "start" : 
            this.centerJC = false;
            this.startJC = true;
            this.endJC = false;
            this.spaceAroundJC = false;
            this.spaceBetweenJC = false;
            this.spaseEvenlyJC = false;
          break
          case "end" : 
            this.centerJC = false;
            this.startJC = false;
            this.endJC = true;
            this.spaceAroundJC = false;
            this.spaceBetweenJC = false;
            this.spaseEvenlyJC = false;
          break
          case "space-around" : 
            this.centerJC = false;
            this.startJC = false;
            this.endJC = false;
            this.spaceAroundJC = true;
            this.spaceBetweenJC = false;
            this.spaseEvenlyJC = false;
          break
          case "space-between" : 
            this.centerJC = false;
            this.startJC = false;
            this.endJC = false;
            this.spaceAroundJC = false;
            this.spaceBetweenJC = true;
            this.spaseEvenlyJC = false;
          break
          case "spase-evenly" : 
            this.centerJC = false;
            this.startJC = false;
            this.endJC = false;
            this.spaceAroundJC = false;
            this.spaceBetweenJC = false;
            this.spaseEvenlyJC = true;
          break
        }
      })

    this.flexForm.controls['vertical'].valueChanges
      .subscribe((data) => {
        switch(data) {
          case 'center' : 
            this.centerAI = true;
            this.startAI = false;
            this.endAI = false;
            this.stretch = false;
          break
          case 'start' : 
            this.centerAI = false;
            this.startAI = true;
            this.endAI = false;
            this.stretch = false;
          break
          case 'end' : 
            this.centerAI = false;
            this.startAI = false;
            this.endAI = true;
            this.stretch = false;
          break
          case 'stretch' : 
            this.centerAI = false;
            this.startAI = false;
            this.endAI = true;
            this.stretch = false;
          break
        }
      })
  }

  add() {
    if (this.boxes.length === 0) {
      this.boxes.push({name: '1'})
    } else {
      let last = this.boxes[this.boxes.length - 1];
      this.boxes.push({name: Number(last.name) + 1})
    }
    console.log('reow', this.row);
    
  }

  remove(position) {
    if (position === "first") {
      this.boxes.shift();
    } else {
      this.boxes.pop();
    }
  }
}
