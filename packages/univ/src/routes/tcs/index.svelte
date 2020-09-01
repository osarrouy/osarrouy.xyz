<script>
  import Screen   from '../../components/Screen.svelte'
  import chapters from './_chapters.js'
</script>

<svelte:head>
  <title>technologie, communication, société</title>
</svelte:head>

<Screen>
  <p>====== sélectionnez une séquence =====</p>
  <table>
    {#each chapters as chapter}
      <tr><td>seq. {chapter.number}</td><td><a rel="prefetch" href="tcs/chapters/{chapter.number}">{chapter.title.toLowerCase()}</a></td></tr>
    {/each}
  </table>
</Screen>


