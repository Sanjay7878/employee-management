import { Directive, ElementRef, EventEmitter, NgModule, Output } from '@angular/core';
import { fromEvent, debounceTime } from 'rxjs';

@Directive({
    selector: '[clickOutside]'
})
export class ControlClickOutsideDirective {

    @Output()
    clickOutside: EventEmitter<void> = new EventEmitter();

    constructor(private elementRef: ElementRef) { 
        if(typeof document !== 'undefined'){
            fromEvent(document, 'click').pipe(debounceTime(10)).subscribe((res: any)=>{
                this.onDocumentClick(res)
            })
        }
    }

    // @HostListener('document:click', ['$event'])
    onDocumentClick(event: PointerEvent) {
        const nativeElement: any = this.elementRef.nativeElement;
        const clickedInside: boolean = nativeElement.contains(event.target);
        if (!clickedInside) {
            this.clickOutside.emit();
        }
    }

}

@NgModule({
    declarations: [ControlClickOutsideDirective],
    exports: [ControlClickOutsideDirective]
})
export class ControlClickOutsideDirectiveModule {}