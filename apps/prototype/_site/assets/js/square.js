export const name = 'square';

export function draw(ctx, color) {
  ctx.fillStyle = color;
  ctx.fillRect(10, 10, 100, 100);
}