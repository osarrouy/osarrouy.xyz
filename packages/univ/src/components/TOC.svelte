<script>
  export let opened = false;
</script>

<style lang="scss">
  // div.burger {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: flex-end;
  //   position: relative;
  //   top: calc(4em + #{2 * $GU} - 2px);
  //   left: -4 * $GU;
  //   width: fit-content;
  //   z-index: 9999;

  //   -webkit-user-select: none;
  //   user-select: none;
  // }

  // input {
  //   display: block;
  //   width: 20px;
  //   height: 9px;
  //   position: absolute;
  //   top: 50%;
  //   left: 50%;
  //   transform: translateX(-50%) translateY(-50%);

  //   cursor: pointer;

  //   opacity: 0; /* hide this */
  //   z-index: 2; /* and place it over the hamburger */

  //   -webkit-touch-callout: none;

  //   &:hover,
  //   &:checked {
  //     ~ span {
  //       background: $accent;
  //     }
  //   }
  // }

  // span {
  //   background: $asphalt-light;
  //   display: block;
  //   height: 2px;
  //   margin-top: 0;
  //   position: relative;
  //   z-index: 1;
  //   transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

  //   &:first-of-type {
  //     width: 20px;
  //     margin-bottom: 5px;
  //     transform-origin: 0 0;
  //   }

  //   &:last-of-type {
  //     width: 15px;
  //     transform-origin: 0% 100%;
  //   }
  // }
</style>

<!-- 
<div class="burger">
  <input type="checkbox" bind:checked={opened}>
  <span></span>
  <span></span>
</div> -->
