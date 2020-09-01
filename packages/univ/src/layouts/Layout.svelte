<script>
  import Screen from '../components/Screen.svelte'
  import TOC    from '../components/TOC.svelte'
</script>

<style lang="scss">
  section.chapter {
    width: 100%;
    margin: auto;
    line-height: 1.3em;
    position: relative;
    color: $color;
    :global(h1) {
      font-size: 4em;
    }

    :global(h2) {
      font-size: 3em;
    }
  }
</style>

<Screen>
  <section class="chapter">
    <slot />
  </section>
</Screen>
