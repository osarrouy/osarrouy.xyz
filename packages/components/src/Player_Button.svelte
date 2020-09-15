<script>
  export let paused = true;
  export let waiting = true;

  const toggle = () => {
    if (!waiting) {
      paused = !paused;
    }
  };
</script>

<style lang="scss">
  .button {
    @include arrow($foreground);
    cursor: pointer;
    position: relative;
    height: 5 * $GU;
    width: 5 * $GU;
    transition: all 1s $ease;

    &:hover:not(.waiting),
    &:not(.paused):not(.waiting) {
      @include animated-arrow($background);
      background: $foreground;
    }

    .loader {
      @keyframes loader {
        0% {
          top: $GU;
          height: 3 * $GU;
        }
        50%,
        100% {
          top: 1.5 * $GU;
          height: 2 * $GU;
        }
      }

      display: inline-block;
      position: relative;
      height: 5 * $GU;
      width: 5 * $GU;

      div {
        display: inline-block;
        position: absolute;
        left: $GU;
        width: $GU / 2;
        background: $foreground;
        transition: all 1s $ease;
        animation: loader 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

        &:nth-child(1) {
          left: $GU;
          animation-delay: -0.24s;
        }
        &:nth-child(2) {
          left: 2.25 * $GU;
          animation-delay: -0.12s;
        }
        &:nth-child(3) {
          left: 3.5 * $GU;
          animation-delay: 0;
        }
      }
    }
  }
</style>

<div
  on:click={toggle}
  class="button {paused ? 'paused' : ''}
  {waiting ? 'waiting' : ''}">
  {#if waiting}
    <div class="loader">
      <div />
      <div />
      <div />
    </div>
  {:else}
    <svg
      width="18px"
      height="17px"
      viewBox="-1 0 18 17"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">
      <g>
        <polygon
          class="arrow"
          points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671
          14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596" />
        <polygon
          class="arrow-fixed"
          points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671
          14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596" />
        <path
          d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159
          L9.708,8.33860465 L-1.64313008e-15,0.56157424
          L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869
          L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869
          L1.33333333,3.30246869 Z" />
      </g>
    </svg>
  {/if}
</div>
