// Picasso Brush Canvas Touch Handler
canvas.addEventListener('touchmove', (e) => {
  e.preventDefault();
  const rect = canvas.getBoundingClientRect();
  const touch = e.touches[0];
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;

  // Modulate Guitar Engine directly, NOT the mic input
  if (picassoGuitarEngine.active) {
    picassoGuitarEngine.updateBrushParams(x, y);
  }
});
