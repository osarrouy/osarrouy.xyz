<script>
  export let opened = false
  export let segment

  const close = () => {
    opened = false
  }
</script>
<!-- cubic-bezier(0.77,0.2,0.05,1.0) -->
<style lang="scss">
  nav {
    background-color: transparentize($asphalt-light, 0.5);
    backdrop-filter: blur(8px);
    display:flex;
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
    transition: all 0.2s cubic-bezier(0.77, 0.2, 0.05, 1.0);
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



  a {
    color: $accent;
    text-decoration: none;
    padding: $GU / 2;
  }
</style>

<nav class={opened ? 'opened' : undefined}>
  <ul>
    <li><a aria-current={segment === undefined ? 'page' : undefined} href="."     on:click={close}>home</a></li>
    <li><a aria-current={segment === 'about' ? 'page' : undefined}   href="about" on:click={close}>about</a></li>
    <li><a aria-current={segment === 'tcs' ? 'page' : undefined}     href="tcs"   on:click={close}>L1 - technologie, communication, société</a></li>
  </ul>
</nav>
