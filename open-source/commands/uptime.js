/*---
cmd: uptime
desc: shows bot uptime
---*/

const _start = Date.now();

export default async function (ctx) {
  const ms = Date.now() - _start;
  const sec = Math.floor(ms / 1000) % 60;
  const min = Math.floor(ms / (1000 * 60)) % 60;
  const hr = Math.floor(ms / (1000 * 60 * 60));
  await ctx.reply(`Uptime: ${hr}h ${min}m ${sec}s`);
}
