<script>
  import { goto } from "@sapper/app";

  import chapters from "./_chapters.js";
  import Telegram from "../../components/Telegram.svelte";
  import { Menu, Screen } from "@osarrouy/components";

  const _chapters = chapters.map(chapter => {
    return [
      "seq. " + chapter.number,
      chapter.title.toLowerCase(),
      "icn/chapters/" + chapter.number
    ];
  });
</script>

<svelte:head>
  <title>introduction aux cultures numériques</title>
</svelte:head>

<Screen>
  <Telegram url="https://t.me/infocom_icn_2020" />
  <Menu {goto} title="sélectionnez une séquence" items={_chapters} />
</Screen>
