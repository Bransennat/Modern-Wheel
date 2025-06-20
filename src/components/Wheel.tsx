// src/components/Wheel.tsx (Complete code with text truncation)

import { useRef, useEffect } from 'react';
import { useNameStore } from '../store/nameStore';

const segmentColors = [
  "#EF4444", "#F97316", "#EAB308", "#84CC16",
  "#22C55E", "#14B8A6", "#3B82F6", "#8B5CF6",
];

// Easing function for a smooth deceleration
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const Wheel = () => {
  const { names, isSpinning, setIsSpinning, setWinner } = useNameStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const animationRef = useRef({
    startTime: 0,
    startRotation: 0,
    totalRotation: 0,
    duration: 11000,
    animationFrameId: 0,
  });

  // This master function draws the entire wheel onto the canvas
  const drawWheel = (rotation = 0) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const numSegments = names.length;
    if (numSegments === 0) {
      ctx.clearRect(0,0, canvas.width, canvas.height);
      return;
    };

    const size = canvas.width;
    const center = size / 2;
    const radius = size / 2 * 0.92;
    const segmentAngle = (2 * Math.PI) / numSegments;

    ctx.clearRect(0, 0, size, size);
    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(rotation);
    ctx.translate(-center, -center);

    const finalSegmentColors: string[] = [];
    const numColors = segmentColors.length;
    if (numSegments > 0) {
      for (let i = 0; i < numSegments; i++) {
        let colorIndex = (i + Math.floor(i / numColors)) % numColors;
        if (i > 0 && finalSegmentColors[i-1] === segmentColors[colorIndex]) {
          colorIndex = (colorIndex + 1) % numColors;
        }
        finalSegmentColors.push(segmentColors[colorIndex]);
      }
      if (numSegments > 1 && finalSegmentColors[numSegments - 1] === finalSegmentColors[0]) {
        if (finalSegmentColors[numSegments - 1] === segmentColors[0] && segmentColors.length > 1) {
          finalSegmentColors[numSegments - 1] = segmentColors[1];
        }
      }
    }

    for (let i = 0; i < numSegments; i++) {
      const startAngle = i * segmentAngle;
      
      ctx.beginPath();
      ctx.moveTo(center, center);
      ctx.arc(center, center, radius, startAngle, startAngle + segmentAngle);
      ctx.closePath();
      ctx.fillStyle = finalSegmentColors[i];
      ctx.fill();

      ctx.save();
      ctx.translate(center, center);
      ctx.rotate(startAngle + segmentAngle / 2);
      ctx.textAlign = "right"; // <<< This aligns text inwards
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 16px Arial";
      ctx.shadowColor = "black";
      ctx.shadowBlur = 3;

      const maxTextWidth = radius * 0.5; // change this to setting margin text from center wheel
      let text = names[i].name;

      // Measure the text and shorten it if it's too wide
      if (ctx.measureText(text).width > maxTextWidth) {
        while (ctx.measureText(text + '...').width > maxTextWidth && text.length > 0) {
          text = text.slice(0, -1);
        }
        text += '...';
      }
      
      // <<< This starts the text far out from the center (90%)
      ctx.fillText(text, radius * 0.9, 0); 
      ctx.restore();
    }
    ctx.restore();

    // Draw Center Hub
    ctx.beginPath();
    ctx.arc(center, center, radius * 0.15, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = '#4A5568';
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#64748B';
    ctx.stroke();
  };
  
  const handleSpin = () => {
    if (isSpinning || names.length < 1) return;
    setIsSpinning(true);
    setWinner(null);

    const anim = animationRef.current;
    anim.startTime = performance.now();
    anim.startRotation = anim.totalRotation;
    
    const cruiseDuration = 2000;
    const slowdownDuration = 9000;
    const totalDuration = cruiseDuration + slowdownDuration;
    
    const cruiseRotations = 10 * 2 * Math.PI;
    const randomExtraRotations = (Math.random() * 4 + 3) * 2 * Math.PI;
    anim.totalRotation = anim.startRotation + cruiseRotations + randomExtraRotations;

    const animationLoop = (currentTime: number) => {
      const elapsedTime = currentTime - anim.startTime;

      if (elapsedTime >= totalDuration) {
        // --- END OF SPIN ---
        const finalRotation = anim.totalRotation;
        const pointerAngle = 1.5 * Math.PI;
        const detectionAngle = (pointerAngle - (finalRotation % (2 * Math.PI)) + (2 * Math.PI)) % (2 * Math.PI);
        const numSegments = names.length;
        const segmentAngle = (2 * Math.PI) / numSegments;
        const winnerIndex = Math.floor(detectionAngle / segmentAngle);

        if (names[winnerIndex]) {
          const winner = names[winnerIndex];
          setWinner(winner);
        }
        setIsSpinning(false);
        drawWheel(finalRotation);
        return;
      }

      let currentRotation = 0;
      if (elapsedTime < cruiseDuration) {
        const progress = elapsedTime / cruiseDuration;
        currentRotation = anim.startRotation + (cruiseRotations * progress);
      } else {
        const slowdownProgress = (elapsedTime - cruiseDuration) / slowdownDuration;
        const easedProgress = easeOutCubic(slowdownProgress);
        const slowdownDistance = anim.totalRotation - anim.startRotation - cruiseRotations;
        currentRotation = anim.startRotation + cruiseRotations + (slowdownDistance * easedProgress);
      }
      
      drawWheel(currentRotation);
      anim.animationFrameId = requestAnimationFrame(animationLoop);
    };
    requestAnimationFrame(animationLoop);
  };
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    animationRef.current.totalRotation = -0.5 * Math.PI;
    drawWheel(animationRef.current.totalRotation);
  }, [names]);

  if (names.length === 0) {
     return (
        <div className="relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center">
          <div className="w-[95%] aspect-square rounded-full border-8 border-slate-600 bg-slate-700 flex items-center justify-center text-center p-4">
            <p className="text-2xl text-slate-400">Please add a name.</p>
          </div>
        </div>
    );
  }

  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto">
      <canvas ref={canvasRef} width="500" height="500" className="w-full h-full"></canvas>
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-20">
        <div className="w-0 h-0 border-x-[10px] border-x-transparent border-t-[20px] border-t-white drop-shadow-lg"></div>
      </div>
      <button
        onClick={handleSpin}
        disabled={isSpinning}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22%] aspect-square bg-slate-100 hover:bg-slate-200 disabled:bg-slate-400 transition rounded-full border-4 border-slate-500 shadow-lg text-slate-800 text-2xl font-bold z-10"
      >
        SPIN
      </button>
    </div>
  );
};

export default Wheel;