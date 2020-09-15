<script>
  import { goto } from "@sapper/app";

  import chapters from "./_chapters.js";
  import { Menu, Screen } from "@osarrouy/components";

  const _chapters = chapters.map(chapter => {
    return [
      "seq. " + chapter.number,
      chapter.title.toLowerCase(),
      "tcs/chapters/" + chapter.number
    ];
  });
</script>

<svelte:head>
  <title>technologie, communication, société</title>
</svelte:head>

<Screen>
  <Menu {goto} title="sélectionnez une séquence" items={_chapters} />
</Screen>
