<script>
  import { turnon, turnoff } from '../lib/animations.js'
</script>

<style lang="scss">
  div {
    background-color: $background;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    min-width: 100vw;
    overflow: scroll;
  }

  main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    width: 100%;
    max-width: 980px;
  }
</style>



<div in:turnon out:turnoff>
  <main>
    <slot />
  </main>
</div>
