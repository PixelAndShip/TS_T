# TS_T (TypeScript Terrain)

> This is an open source solo project, in which a custom graphics calculation model is developed. <br>
> The main goals for the project are to: <br>
> 1.Learn basic typescript. <br>
> 2.Learn basic graphics calculations.

## Project Structure

```
├── dist
│   ├── backend
│   │   ├── components
│   │   │   ├── color.js
│   │   │   ├── index.js
│   │   │   ├── line.js
│   │   │   ├── pixel.js
│   │   │   └── triangle.js
│   │   ├── index.js
│   │   └── services
│   │       ├── draw_line.js
│   │       ├── draw_pixel.js
│   │       ├── draw_triangle.js
│   │       └── index.js
│   ├── components
│   │   ├── person.js
│   │   └── student.js
│   └── main.js
├── node_modules
│   └── ...
├── public
│   └── ...
├── src
│   ├── backend
│   │   ├── components
│   │   │   ├── color.ts
│   │   │   ├── index.ts
│   │   │   ├── line.ts
│   │   │   ├── pixel.ts
│   │   │   └── triangle.ts
│   │   ├── gif.js.d.ts
│   │   ├── index.ts
│   │   └── services
│   │       ├── draw_line.ts
│   │       ├── draw_pixel.ts
│   │       ├── draw_triangle.ts
│   │       └── index.ts
│   ├── frontend
│   └── main.ts
└── tsconfig.json
├── index.html
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json

```

## How It Works

```
The structural model is as follows:
Pixel - holds x and y coordinate attributes and a Color instance.
Line - holds 2 pixel instances.
Triangle - holds 3 pixel instances.

Service functions:
drawPixel(x,y,Color) - draws a 1x1 rectangle in index.html canvas.
clearCanvas() - clears the index.html canvas.
drawLine(pixel1, pixel2) - calls drawPixel() starting from pixel1 coordinates and ending on given pixel2 coordinates. Applies a linear color gradient based on the 2 given Pixel colors.
drawTriangle(pixel1, pixel2, pixel3) - draws lines starting from pixel1 to each point along the line from pixel2 and pixel3.
```
## License

MIT License

Copyright (c) 2026 TS_T

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
