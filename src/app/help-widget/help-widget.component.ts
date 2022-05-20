import { Component, OnInit, ViewChild, ElementRef, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ContentChildren, ContentChild } from '@angular/core';

@Component({
  selector: 'app-help-widget',
  templateUrl: './help-widget.component.html',
  styleUrls: ['./help-widget.component.css']
})
export class HelpWidgetComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @ViewChild('one', {static: false}) one: any;
  @ContentChild('two', {static: true}) two: any;
  constructor() { }

  ngOnInit(): void {
    console.log('OnInit: ', this.one, this.two);
  }
  ngOnChanges(): void {
    console.log('OnChanges: ', this.one, this.two);
  }
  ngDoCheck(): void {
    console.log('DoCheck: ', this.one, this.two);
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit: ', this.one, this.two);
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked: ', this.one, this.two);
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit: ', this.one, this.two);
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked: ', this.one, this.two);
  }
  ngOnDestroy(): void {
    console.log('OnDestroy: ', this.one, this.two);
  }


}
