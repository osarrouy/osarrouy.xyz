<script>
  export let goto;
  export let title;
  export let items;

  const clicked = destination => {
    goto(destination);
  };
</script>

<style lang="scss">
  p.title {
    color: $accent;
    font-weight: $bold;
    margin-bottom: $GU;
  }

  table {
    border-collapse: collapse;
    cursor: pointer;

    tr {
      &:hover {
        background-color: $foreground;
        color: $background;
      }

      td {
        padding: $GU / 2 $GU;

        &:first-of-type {
          text-align: left;
        }

        &:last-of-type {
          text-align: right;
        }
      }
    }
  }
</style>

<p class="title">====== {title} =====</p>
<table>
  {#each items as item}
    <tr on:click={clicked(item[2])}>
      <td>{item[0]}</td>
      <td>{item[1]}</td>
    </tr>
  {/each}
</table>
