import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';
// const panelPortal = new ComponentPortal(WySearchPanelComponent, this.viewContainerRef);
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ArtcileSerachPanelComponent } from './artcile-serach-panel.component';
@Component({
  selector: 'app-artcile-serach',
  templateUrl: './artcile-serach.component.html',
  styles: ['artcile-serach.less']
})
export class ArtcileSerachComponent implements OnInit, AfterViewInit, OnChanges {

  constructor(
    private ViewContainerRef: ViewContainerRef,
    private overlay: Overlay
  ) { }


  @ViewChild('znInput', { static: true }) private znInput: ElementRef;
  @ViewChild('search', { static: true }) private defluaSearh: ElementRef;
  @Output() private onSerach = new EventEmitter<any>();
  @Input() private serachResult: String
  private overlayRef: OverlayRef;
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    fromEvent(this.znInput.nativeElement, 'input')
      .pipe(debounceTime(300), distinctUntilChanged(), pluck('target', 'value')).subscribe(
        res => {
          if (res) {
            this.onSerach.emit(res)
          }
        }
      )
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.serachResult && !changes.serachResult.firstChange) {
      if (!this.handResult(this.serachResult)) {
        this.showOverLayPanel()
      }
      // console.log("dsfgd", this.serachResult)
      // this.showOverLayPanel()
    }
  }
  private showOverLayPanel() {
    this.hideOverLayPanel()
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.defluaSearh)
      .withPositions(
        [
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          }
        ]
      )
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    })
    const panelPortal = new ComponentPortal(ArtcileSerachPanelComponent, this.ViewContainerRef);
    const panelRef = this.overlayRef.attach(panelPortal)
    panelRef.instance.serachResult = this.serachResult
  }
  private hideOverLayPanel() {

    if (this.overlayRef && this.overlayRef.hasAttached) {
      this.overlayRef.dispose();
      console.log("关闭")

    }

  }
  onBlur() {
    this.hideOverLayPanel()
  }
  handResult(str) {
    console.log("str", str)
    return JSON.stringify(str) === "{}"
  }
}
