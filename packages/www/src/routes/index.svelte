<script>
  import { goto } from "@sapper/app";
  import { Menu, Screen } from "@osarrouy/components";
  import Hero from "../components/Hero.svelte";

  const _teachings = [
    ["L1", "technologie, communication, société", "tcs"],
    ["L1 | mineure", "technologie, communication, société", "tcs_min"],
    ["L2", "introduction aux cultures numériques", "icn"]
  ];
</script>

<style lang="scss">
  main {
    display: grid;
    grid-template-columns: 50vw 50vw;
    grid-template-rows: 50vh 50vh;
    grid-template-areas:
      ". main"
      ". main";
    min-height: 100vh;
  }

  section {
    grid-area: main;
    justify-self: center;
    align-self: center;
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable `input` types in iOS */
    -webkit-appearance: none;

    /* Remove excess padding and border in Firefox 4+ */
    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }

    font-size: 1.5em;
    background-color: $green;
    color: $asphalt;
    padding: 0.5em 1em;
    cursor: pointer;
  }
</style>

<Hero />

<main>
  <section>
    <p>Welcome on my website</p>
    <p>pro [at] osarrouy [dot] xyz</p>
    <p>» CLI</p>
    <p>» university</p>

    <button>more</button>
  </section>

</main>
