import { Directive, ElementRef, OnInit, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appStatus]'
})
export class StatusDirective implements OnInit {
  @Input() taskDt;
  // taskDtform = new Date(this.taskDt);
  currentDt = new Date().toISOString().substring(0, 10);
  // dtArr = this.taskDt.split('-');
  // taskDtform = new Date(this.dtArr[0], this.dtArr[1] - 1, this.dtArr[2]).getTime();
  // currentDt = new Date().getTime();
  constructor(private render: Renderer2, private eleRef: ElementRef) { }

  @HostListener('mouseover') satusVw() {
    // console.log(typeof (this.taskDt));
    // console.log(this.currentDt);
    // console.log(this.taskDt);
    if (this.taskDt === this.currentDt) {
      this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'green');
    } else if (this.taskDt > this.currentDt) {
      this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'yellow');
    } else {
      this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'red');
    }

  }
  @HostListener('mouseleave') rm() {
    this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'white')
  }

  ngOnInit() {

  }
}
