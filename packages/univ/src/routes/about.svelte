<script>
  import Test from '../components/Content.svx'
</script>

<style lang="scss">
  $toto: #ffff00;
  p {
    .test {
      color: $red;
    }
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>
<h1>About this site</h1>

<p>
  This
  <span class="test">is</span>
  the 'about' page. There's not much here.
</p>
<Test />
