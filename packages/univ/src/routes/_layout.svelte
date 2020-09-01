<script>
  import Header from "../components/Header.svelte";
  import Nav from "../components/Nav.svelte";

  export let segment;
  let opened = false;
</script>

<Header bind:opened {segment} />
<Nav bind:opened {segment} />
<slot {segment} />
