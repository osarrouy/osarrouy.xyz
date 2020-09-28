<script>
  import { goto } from "@sapper/app";
  import { Menu, Screen } from "@osarrouy/components";

  const _teachings = [
    ["L1", "technologie, communication, société", "tcs"],
    ["L1 | mineure", "technologie, communication, société", "tcs_min"],
    ["L2", "introduction aux cultures numériques", "icn"]
  ];
</script>

<Screen>
  <Menu {goto} title="sélectionnez un cours" items={_teachings} />
</Screen>
