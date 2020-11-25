<script>
  export let opened = false;
  export let segment;

  const close = () => {
    opened = false;
  };
</script>

<style lang="scss">
  nav {
    background-color: transparentize($asphalt-light, 0.5);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 50vh;
    left: 50vw;
    transform: translateX(-50%) translateY(-50%);
    z-index: 2;
    width: 100vw;
    height: 0;
    visibility: hidden;
    transition: all 0.2s cubic-bezier(0.77, 0.2, 0.05, 1);
    overflow: hidden;

    &.opened {
      height: 100vh;
      visibility: visible;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    list-style-type: none;

    li {
      text-align: center;
      margin: $GU 0;
    }
  }

  /* clearfix */

  [aria-current] {
    font-weight: bold;
    background-color: $accent;
    color: $asphalt;
  }
</style>

<!-- cubic-bezier(0.77,0.2,0.05,1.0) -->
<nav class={opened ? 'opened' : undefined}>
  <ul>
    <li>
      <a
        aria-current={segment === undefined ? 'page' : undefined}
        href="."
        on:click={close}>
        home
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'tcs' ? 'page' : undefined}
        href="tcs"
        on:click={close}>
        L1 - technologie, communication, société
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'tcs_min' ? 'page' : undefined}
        href="tcs_min"
        on:click={close}>
        L1 | mineure - technologie, communication, société
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'icn' ? 'page' : undefined}
        href="icn"
        on:click={close}>
        L2 - introduction aux cultures numériques
      </a>
    </li>
  </ul>
</nav>
