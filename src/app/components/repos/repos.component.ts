import { Component, Input, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {
@Input() repoUrl: string = '';
repos: any = [];
  constructor(private github : GithubService, private ref : ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    if (this.repoUrl) {
      this.github.getRepos(this.repoUrl).subscribe((repos:any=[])=>{
        this.repos = repos;
        console.log(this.repos)
        this.ref.detectChanges()
      },
      (error)=>{
        console.log(error)
      }
      )
    }
  }
}
