module.exports = {
  extends: ['@osarrouy'],
  plugins: [
    'svelte3'
  ],
  overrides: [
    {
      files:     ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  settings: {
    'svelte3/ignore-styles': attributes => true
  }
}
