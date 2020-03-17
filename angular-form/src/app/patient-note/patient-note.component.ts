import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import * as $ from 'jquery';
// import { timer } from 'rxjs';

@Component({
  selector: 'app-patient-note',
  templateUrl: './patient-note.component.html',
  styleUrls: ['./patient-note.component.css']
})
export class PatientNoteComponent implements OnInit {
  phyExContent1
  historyContent1
  constructor(private fb: FormBuilder) { }

  postForm = this.fb.group({
    'history':this.fb.group({
      'historyContent':this.fb.control('')
    }),
    'phyExamine':this.fb.group({
      'phyExamineContent':this.fb.control('')
    }),
    'Diagnosis1':this.fb.group({
      'Diagnosis1t':this.fb.control(''),
      'his_fin_1_1':this.fb.control(''),
      'his_fin_1_2':this.fb.control(''),
      'his_fin_1_3':this.fb.control(''),
      'his_fin_1_4':this.fb.array([]),
      'phy_ex_1_1':this.fb.control(''),
      'phy_ex_1_2':this.fb.control(''),
      'phy_ex_1_3':this.fb.control(''),
      'phy_ex_1_4':this.fb.array([]),
    }),
  })
  ngOnInit() {
    
  }
  onSubmit(formdata){
console.log(formdata.value);
  }
  limitText(limitField, limitNum) {
    //    debugger
    if (limitField.length >= limitNum) {
        limitField = limitField.substring(0, limitNum);
        alert('Reached maximum number of character');
    }

    //line limit
    var text = limitField;

    var lines = (text.match(/\n/g) || '').length + 1
   // console.log(lines, text.length);
  //  this.postForm.history.get(this.historyContent) = text.length;
//    document.getElementById('text_count1').innerHTML = text.length;
    if (lines >= 15) {
     
        var n = text.lastIndexOf("\n");

        alert('Reached line limit');
        limitField = text.substring(0, n);
    }
    this.historyContent1  = lines;
    this.process(lines,text)
}
  limitText1(limitField, limitNum) {
      
    if (limitField.length >= limitNum) {
        limitField = limitField.substring(0, limitNum);
        alert('Reached maximum number of character');
    }

    //line limit
    var text = limitField;
    var lines = (text.match(/\n/g) || '').length + 1
   // console.log(lines, text.length); 
  //  this.phyExContent = text.length;
//    document.getElementById('text_count2').innerHTML = text.length;
    if (lines >= 15) {
     
        var n = text.lastIndexOf("\n");

        alert('Reached line limit');
        limitField = text.substring(0, n);
    }
    this.phyExContent1 = lines;
   
    this.process1(lines,text)
}


 process(tline, text) {
//   debugger;
    var maxLines = 15,
        maxChars = 950;
    var linebreaks = text.split('\n').length;
    text.split('\n').forEach(function(item) {
        linebreaks = linebreaks + (item.length / 93);
    });

    $("#txtComments_progressbar").animate({
      'width': linebreaks * (100 / 15) + '%'
  }, 1);

   
}


 process1(tline, text) {
//    debugger;
    var maxLines = 15,
        maxChars = 950;
    var linebreaks = text.split('\n').length;
    text.split('\n').forEach(function(item) {
        linebreaks = linebreaks + (item.length / 93);
    });

    $("#txtComments_progressbar1").animate({
      'width': linebreaks * (100 / 15) + '%'
  }, 1);

}

}
