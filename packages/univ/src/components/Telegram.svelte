<script>
  export let url;
</script>

<style lang="scss">
  a {
    margin-bottom: 2 * $GU;

    img {
      height: 5 * $GU;
    }
  }
</style>

<a href={url} target="_blank">
  <img src="telegram.svg" alt="telegram" />
</a>
