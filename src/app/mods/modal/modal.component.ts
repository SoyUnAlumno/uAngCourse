import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();
  div = this.renderer.createElement('div');

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Preferred way
    this.renderer.appendChild(this.el.nativeElement, this.div);
    // Last resort
    // document.body.appendChild(this.el.nativeElement);
  }

  onCloseClick() {
    this.close.emit();
  }

  // Removes the modal from the body
  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }
}
