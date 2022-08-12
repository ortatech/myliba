import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Progress } from 'src/app/model/progress';

@Component({
  selector: 'app-progress-update',
  templateUrl: './progress-update.component.html',
  styleUrls: ['./progress-update.component.css']
})
export class ProgressUpdateComponent implements OnInit {

  @Input() progress: Progress | undefined
  progressToSave: any
  
  constructor(
    public dialogRef: MatDialogRef<ProgressUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.progressToSave = this.data?.progress
  }

  saveProgress () {
    const progress = this.progressToSave
    this.dialogRef.close(progress);
  }

}
