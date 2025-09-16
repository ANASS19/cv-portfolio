import { useEffect, useRef } from 'react';

const glyphs = '01AI<>$#@*[]{}+-=:';
const colorPool = ['#fcee09', '#ff005c', '#00f6ff', '#ffffff'];

function randomGlyph() {
  return glyphs.charAt(Math.floor(Math.random() * glyphs.length));
}

function randomColor() {
  return colorPool[Math.floor(Math.random() * colorPool.length)];
}

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    let animationFrame;
    let columns = 0;
    let drops = [];
    const fontSize = 14;

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      columns = Math.max(1, Math.floor(innerWidth / fontSize));
      drops = new Array(columns).fill(1);
    };

    const draw = () => {
      if (!context) {
        return;
      }

      context.fillStyle = 'rgba(2, 3, 10, 0.25)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = `${fontSize}px "Share Tech Mono", monospace`;

      for (let i = 0; i < drops.length; i += 1) {
        const text = randomGlyph();
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        context.fillStyle = randomColor();
        context.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 1;
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="matrix-background" aria-hidden>
      <canvas ref={canvasRef} className="matrix-canvas" />
      <div className="matrix-gradient" />
    </div>
  );
};

export default MatrixBackground;
