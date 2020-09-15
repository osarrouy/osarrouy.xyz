<script>
  import Button from "./Player_Button.svelte";
  import Progress from "./Player_Progress.svelte";

  export let src = null;
  let currentTime = 0;
  let duration = 0;
  let paused = true;
  let waiting = true;
</script>

<style lang="scss">
  div.player {
    @include transparent();
    display: flex;
    padding-right: $GU;
    position: fixed;
    bottom: 0;
    left: 50%;
    z-index: 2;
    transform: translateX(-50%);
    width: 100%;
  }
</style>

<div class="player">
  <Button bind:paused bind:waiting />
  <Progress bind:currentTime bind:duration />
  <audio
    bind:currentTime
    bind:duration
    bind:paused
    on:seeking={() => (waiting = true)}
    on:waiting={() => (waiting = true)}
    on:seeked={() => (waiting = false)}
    on:play={() => (waiting = false)}
    on:playing={() => (waiting = false)}
    on:canplaythrough={() => (waiting = false)}
    on:emptied={() => (paused = true)}
    on:loadedmetadata={() => {
      waiting = false;
      paused = true;
      currentTime = 0;
    }}
    on:ended={() => {
      paused = true;
      currentTime = 0;
    }}
    {src}
    preload="metadata" />
</div>
