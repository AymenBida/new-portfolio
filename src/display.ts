export class Display {
  private canvas: HTMLCanvasElement;
  private width = 800;
  private height = 600;
  // private context: CanvasRenderingContext2D;

  constructor(private parent: HTMLElement, width?: number, height?: number) {
    this.canvas = this.createCanvas(width, height);
    this.context = this.canvas.getContext("2d")!;
  }

  private createCanvas(width?: number, height?: number) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width ?? this.width;
    this.canvas.height = height ?? this.height;
    this.canvas.style.border = "1px solid black";
    this.parent.appendChild(this.canvas);
    return this.canvas;
  }
}
