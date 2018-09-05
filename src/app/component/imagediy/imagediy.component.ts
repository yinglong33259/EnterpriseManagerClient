import { Component, OnInit , ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-imagediy',
  templateUrl: './imagediy.component.html',
  styleUrls: ['./imagediy.component.css']
})
export class ImagediyComponent implements OnInit {

  @ViewChild('myCanvas') myCanvas: ElementRef;
  @ViewChild('des') des: ElementRef;
  private context: CanvasRenderingContext2D;

  constructor() { }

  drawStar (c: HTMLElement , color: string) {
    const dd = document.createElement('div');
    dd.style.background = color;
    dd.style.width = "4px";
    dd.style.height = "4px";
    dd.style.cssFloat = "left";
    dd.style.borderRadius = "2px";
    c.appendChild( dd );
  }

  drawBr (c: HTMLElement) {
    const dd = document.createElement('br');
    c.appendChild( dd );
  }

  ngAfterViewInit() {
    this.context = (this.myCanvas.nativeElement as HTMLCanvasElement).getContext('2d');
    const c =  (this.des.nativeElement as HTMLElement);

    const drawStar = this.drawStar;
    const drawBr = this.drawBr;
    const context = this.context;
    const image = new Image();
    image.src = 'assets/pic/123.jpg';
    image.crossOrigin = 'Anonymous';
    image.onload = function( ) {
      context.drawImage(image,0,0, image.width , image.height,0,0,100,100);
      let imageData = context.getImageData(0, 0, 100 , 100);
      for (let i = 0; i < imageData.data.length ; i += 4) {
        drawStar(c,"rgb("+imageData.data[i]+","+imageData.data[i+1]+","+imageData.data[i+2] +")" );
      }
    }
  }

  ngOnInit() {
  }

}
