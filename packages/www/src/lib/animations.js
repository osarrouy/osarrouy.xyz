export const turnon = (node, { delay = 500, duration = 1000 }) => {
  return {
    delay,
    duration,
    css: (t, u) => `opacity: ${t};`
  }
}

export const turnoff = (node, { delay = 0, duration = 500 }) => {
  return {
    delay,
    duration,
    css: (t, u) => `transform: scale(${u < 0.5 ? 1 : 2 - 2 * u}, ${u < 0.5 ? 1.001 - 2 * u : 0.001}); filter: brightness(${15 * t});`
  }
}
