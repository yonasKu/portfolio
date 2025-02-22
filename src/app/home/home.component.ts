import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

const MATRIX_CHARACTERS = [
  'ሀ',
  'ሁ',
  'ሂ',
  'ሃ',
  'ሄ',
  'ህ',
  'ሆ',
  'ለ',
  'ሉ',
  'ሊ',
  'ላ',
  'ሌ',
  'ል',
  'ሎ',
  'ሐ',
  'ሑ',
  'ሒ',
  'ሓ',
  'ሔ',
  'ሕ',
  'ሖ',
  'መ',
  'ሙ',
  'ሚ',
  'ማ',
  'ሜ',
  'ም',
  'ሞ',
  'ሠ',
  'ሡ',
  'ሢ',
  'ሣ',
  'ሤ',
  'ሥ',
  'ሦ',
  'ረ',
  'ሩ',
  'ሪ',
  'ራ',
  'ሬ',
  'ር',
  'ሮ',
  'ሰ',
  'ሱ',
  'ሲ',
  'ሳ',
  'ሴ',
  'ስ',
  'ሶ',
  'ሸ',
  'ሹ',
  'ሺ',
  'ሻ',
  'ሼ',
  'ሽ',
  'ሾ',
  'ቀ',
  'ቁ',
  'ቂ',
  'ቃ',
  'ቄ',
  'ቅ',
  'ቆ',
  'በ',
  'ቡ',
  'ቢ',
  'ባ',
  'ቤ',
  'ብ',
  'ቦ',
  'ተ',
  'ቱ',
  'ቲ',
  'ታ',
  'ቴ',
  'ት',
  'ቶ',
  'ቸ',
  'ቹ',
  'ቺ',
  'ቻ',
  'ቼ',
  'ች',
  'ቾ',
  'ኀ',
  'ኁ',
  'ኂ',
  'ኃ',
  'ኄ',
  'ኅ',
  'ኆ',
  'ኈ',
  'ኊ',
  'ኋ',
  'ኌ',
  'ኍ',
  'ነ',
  'ኑ',
  'ኒ',
  'ና',
  'ኔ',
  'ን',
  'ኖ',
  'ኘ',
  'ኙ',
  'ኚ',
  'ኛ',
  'ኜ',
  'ኝ',
  'ኞ',
  'አ',
  'ኡ',
  'ኢ',
  'ኣ',
  'ኤ',
  'እ',
  'ኦ',
  'ከ',
  'ኩ',
  'ኪ',
  'ካ',
  'ኬ',
  'ክ',
  'ኮ',
  'ኰ',
  '኱',
  'ኲ',
  'ኳ',
  'ኴ',
  'ኵ',
  '኶',
  'ኸ',
  'ኹ',
  'ኺ',
  'ኻ',
  'ኼ',
  'ኽ',
  'ኾ',
  'ወ',
  'ዉ',
  'ዊ',
  'ዋ',
  'ዌ',
  'ው',
  'ዎ',
  'ዐ',
  'ዑ',
  'ዒ',
  'ዓ',
  'ዔ',
  'ዕ',
  'ዖ',
  'ዘ',
  'ዙ',
  'ዚ',
  'ዛ',
  'ዜ',
  'ዝ',
  'ዞ',
  'ዠ',
  'ዡ',
  'ዢ',
  'ዣ',
  'ዤ',
  'ዥ',
  'ዦ',
  'የ',
  'ዩ',
  'ዪ',
  'ያ',
  'ዬ',
  'ይ',
  'ዮ',
  'ደ',
  'ዱ',
  'ዲ',
  'ዳ',
  'ዴ',
  'ድ',
  'ዶ',
  'ጀ',
  'ጁ',
  'ጂ',
  'ጃ',
  'ጄ',
  'ጅ',
  'ጆ',
  'ገ',
  'ጉ',
  'ጊ',
  'ጋ',
  'ጌ',
  'ግ',
  'ጎ',
  'ጠ',
  'ጡ',
  'ጢ',
  'ጣ',
  'ጤ',
  'ጥ',
  'ጦ',
  'ጰ',
  'ጱ',
  'ጲ',
  'ጳ',
  'ጴ',
  'ጵ',
  'ጶ',
  'ጸ',
  'ጹ',
  'ጺ',
  'ጻ',
  'ጼ',
  'ጽ',
  'ጾ',
  'ፀ',
  'ፁ',
  'ፂ',
  'ፃ',
  'ፄ',
  'ፅ',
  'ፆ',
  'ፈ',
  'ፉ',
  'ፊ',
  'ፋ',
  'ፌ',
  'ፍ',
  'ፎ',
  'ፐ',
  'ፑ',
  'ፒ',
  'ፓ',
  'ፔ',
  'ፕ',
  'ፖ',
  '፠',
  '፡',
  '።',
  '፣',
  '፤',
  '፥',
  '፦',
  '፧',
  '፨',
  '፩',
  '፪',
  '፫',
  '፬',
  '፭',
  '፮',
  '፯',
  '፰',
  '፱',
  '፲',
  '፳',
  '፴',
  '፵',
  '፶',
  '፷',
  '፸',
  '፹',
  '፺',
  '፻',
  '፼',
] as const;

const MATRIX_HEIGHT = 440;

const CELL_WIDTH = 20;

const CELL_HEIGHT = 26;
const ROWS = MATRIX_HEIGHT / CELL_HEIGHT;

const RAINDROP_SPAWN_RATE = 0.8;

//const GREENS = ['#15803d', '#16a34a', '#22c55e', '#4ade80'] as const;

const GREENS = ['#441b45', '#4a1f4b', '#522255', '#59265c', '#612a62'] as const;
const WHITE = '#f0fdf4';

const FRAME_RATE = 1000 / 30;

type Greens = (typeof GREENS)[number];

type Color = typeof WHITE | Greens;

type Cell = {
  position: number;
  activeFor: number;
  char: string;
  retainChar: number;
  color: Color;
  retainColor: number;
};

type Column = {
  cells: Cell[];
  head?: Cell;
  trail: number;
  ticksLeft: number;
  speed: number;
};

type Matrix = Column[];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('matrixCanvas', { static: true })
  matrixCanvasRef!: ElementRef<HTMLCanvasElement>;
  matrix: Matrix | undefined;
  tickCount = 0;
  resizeObserver: ResizeObserver | undefined;

  ngOnInit() {
    if (this.matrixCanvasRef.nativeElement) {
      const canvas = this.matrixCanvasRef.nativeElement;
      const context = canvas.getContext('2d');

      if (context) {
        const handleResize = () => {
          const width = window.innerWidth;
          const height = window.innerHeight;

          canvas.width = width;
          canvas.height = height;

          const updatedCOLUMNS = Math.floor(width / CELL_WIDTH);
          const updatedROWS = Math.floor(height / CELL_HEIGHT);

          this.matrix = this.createMatrix(updatedCOLUMNS, updatedROWS);
          const fontSize = Math.min(CELL_WIDTH, CELL_HEIGHT) + 'px monospace';
          context.font = fontSize;

          this.renderMatrix(context, canvas);
        };

        // Use ResizeObserver for better performance
        this.resizeObserver = new ResizeObserver(handleResize);
        this.resizeObserver.observe(canvas);

        handleResize(); // Initial call to set up the canvas

        // Start the animation loop
        this.startAnimation(context, canvas);
      }
    }
  }

  createMatrix(columns: number, rows: number): Matrix {
    const columnsArr: Column[] = [];

    for (let i = 0; i < columns; i++) {
      const cells: Cell[] = [];

      for (let j = 0; j < rows; j++) {
        const cell: Cell = {
          position: j,
          activeFor: 0,
          char: '',
          retainChar: 0,
          color: WHITE,
          retainColor: 0,
        };

        cells.push(cell);
      }

      columnsArr.push({
        cells,
        head: undefined,
        trail: 0,
        ticksLeft: 0,
        speed: 2,
      });
    }

    return columnsArr;
  }
  renderMatrix(
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ): void {
    context.fillStyle = 'rgb(13, 11, 31)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    let x = 0;
    for (const column of this.matrix!) {
      let y = CELL_HEIGHT;
      for (const cell of column.cells) {
        context.fillStyle = cell.color;
        context.fillText(cell.char, x, y);

        y += CELL_HEIGHT;
      }

      x += CELL_WIDTH;
    }
  }
  updateMatrix(matrix: Matrix): void {
    for (const column of matrix) {
      if (this.tickCount % column.speed !== 0) {
        continue;
      }

      const animationComplete = column.ticksLeft <= 0;

      if (animationComplete && Math.random() > RAINDROP_SPAWN_RATE) {
        column.trail = this.getRandomNumberBetween(3, ROWS * 2);
        column.ticksLeft = ROWS + column.trail;
        column.speed = this.getRandomNumberBetween(1, 6);
        column.head = column.cells[0];
        column.head.char = this.getRandomChar();
        column.head.activeFor = column.trail;
      } else {
        if (column.head) {
          const nextCell = column.cells[column.head.position + 1];
          if (nextCell) {
            column.head = nextCell;
            nextCell.activeFor = column.trail;
          } else {
            column.head.char = '';
            column.head = undefined;
          }
        }
        column.ticksLeft -= 1;
      }

      for (const cell of column.cells) {
        if (cell.activeFor > 0) {
          if (column.head === cell) {
            cell.color = WHITE;
            cell.retainColor = 0;
            cell.char = this.getRandomChar();
            cell.retainChar = this.getRandomNumberBetween(1, 10);
          } else {
            if (cell.retainColor <= 0) {
              cell.color = this.getRandomGreen();
              cell.retainColor = this.getRandomNumberBetween(1, 10);
            } else {
              cell.retainColor -= 1;
            }
            if (cell.retainChar <= 0) {
              cell.char = this.getRandomChar();
              cell.retainChar = this.getRandomNumberBetween(1, 10);
            } else {
              cell.retainChar -= 1;
            }
          }
          cell.activeFor -= 1;
        } else {
          cell.char = '';
        }
      }
    }

    this.tickCount += 1;
  }
  getRandomChar(): string {
    return this.getRandomFromArray(MATRIX_CHARACTERS);
  }

  getRandomGreen(): Greens {
    return this.getRandomFromArray(GREENS);
  }

  getRandomFromArray<T>(array: readonly T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  getRandomNumberBetween(min: number, max: number): number {
    return Math.ceil(Math.random() * (max - min) + min);
  }

  startAnimation(
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ): void {
    const animate = () => {
      if (this.matrix) {
        this.updateMatrix(this.matrix);
        this.renderMatrix(context, canvas);
      }
      requestAnimationFrame(animate); // Use requestAnimationFrame for smoother animations
    };
    requestAnimationFrame(animate);
  }

  ngOnDestroy() {
    // Clean up the resize observer when the component is destroyed
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
