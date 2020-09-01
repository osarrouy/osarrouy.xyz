<script>
  import { sequence } from "../../../stores";
  import { Screen } from "@osarrouy/components";
  import chapters from "../_chapters";

  export let segment;

  $: {
    sequence.set(chapters[segment]);
  }
</script>

<Screen>
  <slot />
</Screen>
