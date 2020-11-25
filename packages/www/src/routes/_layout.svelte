<script>
  import Nav from "../components/Nav.svelte";
  import { Back, Burger, Scanlines } from "@osarrouy/components";

  export let segment;
  let opened = false;
</script>

<Scanlines>
  <Burger bind:opened />
  <Nav bind:opened {segment} />
  <slot {segment} />
</Scanlines>
