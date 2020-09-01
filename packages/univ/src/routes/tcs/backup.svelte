<script>
  import chapters from './_chapters.js'

  export let segment
  console.log('segment')
  console.log(segment)
</script>

<style lang="scss">
  nav {
    background: #100e23;
    min-height: 100vh;
    position: fixed;
    top: 50px;
    left: 0;
    padding: 2 * $GU;
  }
</style>

<nav>
  <ul>
    {#each chapters as chapter}
      <li>
        <a href="tcs/chapters/{chapter.number}">{chapter.title}</a>
      </li>
    {/each}
  </ul>
</nav>

<slot />

