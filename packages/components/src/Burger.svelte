<script>
  export let opened = false;
</script>

<style lang="scss">
  div.burger {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 2 * $GU;
    z-index: 3;
    height: $header-height;
    user-select: none;
  }

  input {
    cursor: pointer;
    opacity: 0; /* hide this */
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    height: $header-height;
    width: 3 * $GU;
    -webkit-touch-callout: none;

    &:checked {
      ~ span {
        background: $accent;
        &:first-of-type {
          transform: rotate(-45deg);
        }
        &:last-of-type {
          transform: rotate(45deg);
          width: 3 * $GU;
          margin-top: 9.1px;
        }
      }
    }
  }

  span {
    background: $white;
    display: block;
    height: 2px;
    margin-top: 0;
    margin-bottom: 5px;
    position: relative;
    z-index: 1;
    transition: all 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

    &:first-of-type {
      width: 3 * $GU;
      transform-origin: 100% 50%;
    }

    &:last-of-type {
      width: 2 * $GU;
      transform-origin: 100% 50%;
    }
  }
</style>

<div class="burger">
  <input type="checkbox" bind:checked={opened} />
  <span />
  <span />
</div>
