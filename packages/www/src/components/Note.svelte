<style lang="scss">
  div.note {
    // border: 1px dashed #2e2c41;
    background: #2e2c41;
    border-left: 2px solid $accent;
    margin-top: 2 * $GU;
    margin-bottom: 2 * $GU;
    margin-left: -$GU - 2px;
    margin-right: -$GU;
    padding: $GU;
    position: relative;

    &:before {
      content: "NOTE";
      color: $accent;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateX(calc(-100% - #{$GU})) translateY(-50%);
    }
  }
</style>

<div class="note">
  <slot />
</div>
