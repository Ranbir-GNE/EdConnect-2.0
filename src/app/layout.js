import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ed-Connect",
  description: "Ed-Connect",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className} >{children}</body>
      </html>
    </>
  );
}

//backdround

// "use client"
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Inter } from "next/font/google";
// import { useEffect } from "react";

// const inter = Inter({ subsets: ["latin"] });


// export default function RootLayout({ children }) {
//   useEffect(() => {
//     class GeometricBackground {
//       constructor(containerId, colors) {
//         this.container = document.getElementById(containerId);
//         this.colors = colors;
//         this.canvas = document.createElement('canvas');
//         this.ctx = this.canvas.getContext('2d');
//         this.container.appendChild(this.canvas);
//         this.resizeCanvas();

//         window.addEventListener('resize', () => this.resizeCanvas());
//       }

//       resizeCanvas() {
//         this.canvas.width = window.innerWidth;
//         this.canvas.height = window.innerHeight;
//         this.drawPattern();
//       }

//       drawRect(x, y, w, h, color) {
//         this.ctx.fillStyle = color;
//         this.ctx.fillRect(x, y, w, h);
//       }

//       drawCircle(x, y, r, color) {
//         this.ctx.beginPath();
//         this.ctx.arc(x, y, r, 0, Math.PI * 2, false);
//         this.ctx.fillStyle = color;
//         this.ctx.fill();
//       }

//       drawTriangle(x1, y1, x2, y2, x3, y3, color) {
//         this.ctx.beginPath();
//         this.ctx.moveTo(x1, y1);
//         this.ctx.lineTo(x2, y2);
//         this.ctx.lineTo(x3, y3);
//         this.ctx.closePath();
//         this.ctx.fillStyle = color;
//         this.ctx.fill();
//       }

//       drawPattern() {
//         const w = this.canvas.width;
//         const h = this.canvas.height;

//         this.drawRect(0, 0, w / 2, h / 2, this.colors[0]);
//         this.drawRect(w / 2, 0, w / 2, h / 2, this.colors[1]);
//         this.drawRect(0, h / 2, w / 2, h / 2, this.colors[2]);
//         this.drawRect(w / 2, h / 2, w / 2, h / 2, this.colors[3]);

//         this.drawCircle(w / 4, h / 4, 50, this.colors[4]);
//         this.drawCircle(3 * w / 4, h / 4, 50, this.colors[4]);
//         this.drawCircle(w / 4, 3 * h / 4, 50, this.colors[4]);
//         this.drawCircle(3 * w / 4, 3 * h / 4, 50, this.colors[4]);

//         this.drawTriangle(w / 2, h / 2, w, h, w / 2, h, this.colors[0]);
//       }
//     }

//     const colors = ['#eeeeee', '#3e4574', '#00a9ff', '#ff0c3e', '#0e1752'];
//     const geometricBackground = new GeometricBackground('geometric-bg', colors);
//   }, []);

//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <div id="geometric-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
//         <div style={{ position: 'relative', zIndex: 1 }}>
//           {children}
//         </div>
//       </body>
//     </html>
//   );
// }