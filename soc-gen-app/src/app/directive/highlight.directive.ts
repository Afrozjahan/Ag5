import { Directive, ElementRef, Input, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input('myColor') myColor: string;
    @HostBinding('style.backgroundColor') bgColor: any;
    @HostListener('mouseenter') mouseenter() {
        this.bgColor = this.myColor;
        //this.elementRef.nativeElement.style.backgroundColor = this.myColor;
        this.elementRef.nativeElement.style.cursor = "pointer";
    }
    @HostListener('mouseleave') mouseleave() {
        /* Using HostBinding Decorator */
        this.bgColor = "transparent";

        /* Using NativeElementReference Class */
        //this.elementRef.nativeElement.style.backgroundColor = "transparent";
    }
    constructor(private elementRef: ElementRef) {
        this.elementRef.nativeElement.style.backgroundColor = "transparent";
    }
}