<script>
  export let slug = ''
</script>
<style lang="scss">
  div.note {
    // border: 1px dashed #2e2c41;
    background: #2e2c41;
    border-left: 2px solid $accent;
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

<a href="https://fr.wikipedia.org/wiki/{slug}" target="_blank">
  <slot />
</a>
