<style lang="scss">
  div.scanlines {
    &:before {
      background: linear-gradient(
          transparentize($background, 1) 50%,
          transparentize(darken($background, 10), 0.75) 50%
        ),
        linear-gradient(
          90deg,
          transparentize(#ff0000, 0.94),
          transparentize(#00ff00, 0.98),
          transparentize(#0000ff, 0.94)
        );
      background-size: 100% 3px, 4px 100%;
      content: " ";
      display: block;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      z-index: 999;
      pointer-events: none;
    }
  }
</style>

<div class="scanlines">
  <slot />
</div>
