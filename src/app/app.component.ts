import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'
import { ProgressUpdateComponent } from './page/progress-update/progress-update.component'
import { Progress } from './model/progress'
import { KeyResultService } from './service/rest/key-result.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any

  constructor(
    public httpClient: HttpClient,
    private dialog: MatDialog,
    private keyResultService: KeyResultService,
    private snackBar: MatSnackBar
  ) {
    this.keyResultService.getData().subscribe(data => {
      this.data = data
    })
  }

  ngOnInit (): void {
  }

  editProgress (index: any, progress: Progress) {
    progress.index = index
    const dialogRef = this.dialog.open(ProgressUpdateComponent, {
      width: '400px',
      data: {
        progress: { ...progress }
      },
    })
    dialogRef
      .afterClosed()
      .subscribe((progress: Progress | undefined) => {
        if (!progress) {
          return
        }
        
        let index = parseInt(progress.index)
        this.data.KeyResults[0].KeyResultProgresses[index] = progress

        let id = this.data.CreatedUserId
        let data = this.data
        this.keyResultService.saveData(id, data).then((data: any) => {
          this.data = data
          this.snackBar.open('Progress is updated', 'OK')
        })
      })
  }
}
