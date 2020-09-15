<script>
  import { goto } from "@sapper/app";
  import { Menu, Screen } from "@osarrouy/components";

  const _teachings = [["L1", "technologie, communication, société", "tcs"]];
</script>

<Screen>
  <Menu {goto} title="sélectionnez un cours" items={_teachings} />
</Screen>
