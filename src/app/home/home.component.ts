import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

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

const CELL_WIDTH = 16; // Reduced from 20
const CELL_HEIGHT = 20; // Reduced from 26
const ROWS = Math.ceil(window.innerHeight / CELL_HEIGHT);

const RAINDROP_SPAWN_RATE = 0.3; // Lower value means more columns active at once

const FONT_SIZES = [12, 14, 16, 18, 20, 22, 24, 26] as const;

// Keep the original purple colors
const GREENS = ['#441b45', '#4a1f4b', '#522255', '#59265c', '#612a62'] as const;
// Remove bright greens and use the original colors for all effects
// const BRIGHT_GREENS = ['#a44ba7', '#b453b8', '#c45bc8', '#d363d7'] as const;
const WHITE = '#f0fdf4';

const FRAME_RATE = 1000 / 15;

type Greens = (typeof GREENS)[number];
// type BrightGreens = (typeof BRIGHT_GREENS)[number];
type Color = typeof WHITE | Greens;
type FontSize = (typeof FONT_SIZES)[number];

type Cell = {
  position: number;
  activeFor: number;
  char: string;
  retainChar: number;
  color: Color;
  retainColor: number;
  fontSize: FontSize;
  glowing: boolean;
  opacity: number;
};

type Column = {
  cells: Cell[];
  head?: Cell;
  trail: number;
  ticksLeft: number;
  speed: number;
  maxLength: number;
  opacity: number;
  glitchChance: number;
};

type Matrix = Column[];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('matrixCanvas', { static: true })
  matrixCanvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('nameText', { static: false })
  nameTextRef!: ElementRef<HTMLElement>;
  @ViewChild('titleText', { static: false })
  titleTextRef!: ElementRef<HTMLElement>;
  
  matrix: Matrix | undefined;
  tickCount = 0;
  resizeObserver: ResizeObserver | undefined;
  
  // Text scramble properties - Initialize with random chars so text is visible
  displayIntro = this.getRandomString(10);
  displayFirstName = this.getRandomString(5);
  displayLastName = this.getRandomString(10);
  displayTitle = this.getRandomString(25);
  displayLocation = this.getRandomString(17);
  private readonly finalIntro = 'My name is';
  private readonly finalFirstName = 'YONAS';
  private readonly finalLastName = 'KUMELACHEW';
  private readonly finalTitle = 'Computer Science Engineer';
  private readonly finalLocation = 'based in Ethiopia';

  private getRandomString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }

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

    // Initialize with more active columns at start
    const initialActiveColumns = Math.floor(columns * 0.4); // 40% of columns active at start
    const activeColumnIndices = new Set<number>();
    
    while (activeColumnIndices.size < initialActiveColumns) {
      activeColumnIndices.add(Math.floor(Math.random() * columns));
    }

    for (let i = 0; i < columns; i++) {
      const cells: Cell[] = [];
      // Increase minimum column length (50% to 100% of total rows)
      const maxLength = Math.floor(rows * (0.5 + Math.random() * 0.5));

      for (let j = 0; j < rows; j++) {
        const cell: Cell = {
          position: j,
          activeFor: 0,
          char: '',
          retainChar: 0,
          color: WHITE,
          retainColor: 0,
          fontSize: this.getRandomFromArray(FONT_SIZES),
          glowing: false,
          opacity: 1,
        };

        cells.push(cell);
      }

      const column: Column = {
        cells,
        head: undefined,
        trail: 0,
        ticksLeft: 0,
        speed: this.getRandomNumberBetween(1, 4), // Even slower speeds for more visibility
        maxLength,
        opacity: 1,
        glitchChance: Math.random() * 0.2,
      };
      
      // Activate initial columns
      if (activeColumnIndices.has(i)) {
        column.trail = this.getRandomNumberBetween(5, 25);
        column.ticksLeft = column.maxLength + column.trail;
        column.head = column.cells[0];
        column.head.char = this.getRandomChar();
        column.head.activeFor = column.trail;
        column.head.fontSize = this.getRandomFromArray(FONT_SIZES);
        column.head.glowing = Math.random() < 0.2;
      }

      columnsArr.push(column);
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
      context.globalAlpha = column.opacity;

      let y = CELL_HEIGHT;
      for (const cell of column.cells) {
        if (cell.char) {
          context.font = `${cell.fontSize}px monospace`;

          if (cell.glowing) {
            context.shadowColor = cell.color;
            context.shadowBlur = 8;
            context.fillStyle = cell.color;
            context.globalAlpha = column.opacity * cell.opacity;
            context.fillText(cell.char, x, y);

            context.shadowBlur = 0;
          } else {
            context.shadowBlur = 0;
            context.fillStyle = cell.color;
            context.globalAlpha = column.opacity * cell.opacity;
            context.fillText(cell.char, x, y);
          }
        }
        y += CELL_HEIGHT;
      }

      x += CELL_WIDTH;
      context.globalAlpha = 1;
      context.shadowBlur = 0;
    }
  }

  updateMatrix(matrix: Matrix): void {
    // Try to spawn new columns more frequently
    const shouldSpawnNewColumns = this.tickCount % 3 === 0; // Every 3 ticks, try to spawn more columns
    
    if (shouldSpawnNewColumns) {
      // Try to activate more columns
      for (let i = 0; i < 5; i++) { // Try to activate up to 5 columns
        const randomColumnIndex = Math.floor(Math.random() * matrix.length);
        const column = matrix[randomColumnIndex];
        
        if (column.head === undefined && Math.random() > RAINDROP_SPAWN_RATE) {
          // Set a random trail length (more variation)
          column.trail = this.getRandomNumberBetween(5, 30); // Even longer trails
          
          // Set the total animation time based on the column's max length
          column.ticksLeft = column.maxLength + column.trail;
          
          // Randomize speed
          column.speed = this.getRandomNumberBetween(1, 4);
          
          // Start the column
          column.head = column.cells[0];
          column.head.char = this.getRandomChar();
          column.head.activeFor = column.trail;
          column.head.fontSize = this.getRandomFromArray(FONT_SIZES);
          column.head.glowing = Math.random() < 0.2; // 20% chance for head to glow
          
          // Reset opacity
          column.opacity = 1;
        }
      }
    }
    
    for (const column of matrix) {
      if (this.tickCount % column.speed !== 0) {
        continue;
      }

      if (Math.random() < column.glitchChance && column.head) {
        for (let i = 0; i < column.head.position; i++) {
          const cell = column.cells[i];
          if (cell.activeFor > 0) {
            cell.char = this.getRandomChar();
            cell.glowing = Math.random() < 0.3;
          }
        }
      }

      const animationComplete = column.ticksLeft <= 0;

      if (animationComplete && Math.random() > RAINDROP_SPAWN_RATE) {
        column.trail = this.getRandomNumberBetween(3, 20);
        column.ticksLeft = column.maxLength + column.trail;
        column.speed = this.getRandomNumberBetween(1, 8);
        column.head = column.cells[0];
        column.head.char = this.getRandomChar();
        column.head.activeFor = column.trail;
        column.head.fontSize = this.getRandomFromArray(FONT_SIZES);
        column.head.glowing = Math.random() < 0.2;
        column.opacity = 1;
      } else {
        if (column.head) {
          if (column.head.position >= column.maxLength - 1) {
            column.head.char = '';
            column.head = undefined;
            column.opacity = Math.max(0, column.opacity - 0.05);
          } else {
            const nextCell = column.cells[column.head.position + 1];
            if (nextCell) {
              column.head = nextCell;
              nextCell.activeFor = column.trail;
              nextCell.fontSize = this.getRandomFromArray(FONT_SIZES);
              nextCell.glowing = Math.random() < 0.2;
            } else {
              column.head.char = '';
              column.head = undefined;
            }
          }
        }
        column.ticksLeft -= 1;

        if (column.head === undefined && column.opacity > 0) {
          column.opacity = Math.max(0, column.opacity - 0.02);
        }
      }

      for (const cell of column.cells) {
        if (cell.activeFor > 0) {
          if (column.head === cell) {
            cell.color = WHITE;
            cell.retainColor = 0;
            cell.char = this.getRandomChar();
            cell.retainChar = this.getRandomNumberBetween(1, 10);
            cell.opacity = 1;
          } else {
            if (cell.retainColor <= 0) {
              // Use the original purple colors
              cell.color = this.getRandomGreen();
              cell.retainColor = this.getRandomNumberBetween(1, 10);

              if (Math.random() < 0.1) {
                cell.opacity = 0.5 + Math.random() * 0.5;
              } else {
                cell.opacity = 1;
              }
            } else {
              cell.retainColor -= 1;
            }
            if (cell.retainChar <= 0) {
              cell.char = this.getRandomChar();
              cell.retainChar = this.getRandomNumberBetween(1, 10);

              cell.glowing = Math.random() < 0.1;
            } else {
              cell.retainChar -= 1;
            }
          }
          cell.activeFor -= 1;
        } else {
          cell.char = '';
          cell.glowing = false;
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
  
  // Remove the bright green function since we're not using it
  // getRandomBrightGreen(): BrightGreens {
  //   return this.getRandomFromArray(BRIGHT_GREENS);
  // }

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
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }

  ngAfterViewInit() {
    // Start text scramble animation after view is initialized
    setTimeout(() => {
      this.scrambleText(this.finalIntro, 'intro', 35);
      setTimeout(() => {
        this.scrambleText(this.finalFirstName, 'firstName', 35);
      }, 500);
      setTimeout(() => {
        this.scrambleText(this.finalLastName, 'lastName', 35);
      }, 1000);
      setTimeout(() => {
        this.scrambleText(this.finalTitle, 'title', 25);
      }, 1800);
      setTimeout(() => {
        this.scrambleText(this.finalLocation, 'location', 25);
      }, 2600);
    }, 300);
  }

  scrambleText(finalText: string, type: 'intro' | 'firstName' | 'lastName' | 'title' | 'location', speed: number) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    const length = finalText.length;
    let iteration = 0;
    
    const interval = setInterval(() => {
      const scrambledText = finalText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration) {
            return finalText[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');
      
      switch(type) {
        case 'intro':
          this.displayIntro = scrambledText;
          break;
        case 'firstName':
          this.displayFirstName = scrambledText;
          break;
        case 'lastName':
          this.displayLastName = scrambledText;
          break;
        case 'title':
          this.displayTitle = scrambledText;
          break;
        case 'location':
          this.displayLocation = scrambledText;
          break;
      }
      
      iteration += 1 / 3;
      
      if (iteration >= length) {
        clearInterval(interval);
        switch(type) {
          case 'intro':
            this.displayIntro = finalText;
            break;
          case 'firstName':
            this.displayFirstName = finalText;
            break;
          case 'lastName':
            this.displayLastName = finalText;
            break;
          case 'title':
            this.displayTitle = finalText;
            break;
          case 'location':
            this.displayLocation = finalText;
            break;
        }
      }
    }, speed);
  }

  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
