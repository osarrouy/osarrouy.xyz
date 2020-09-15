<script>
  export let currentTime = 0;
  export let duration = 0;

  let element = null;

  const format = seconds => {
    if (isNaN(seconds)) return "...";
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    if (seconds < 10) seconds = "0" + seconds;
    return `${minutes}:${seconds}`;
  };

  const handleClick = event => {
    const bound = element.getBoundingClientRect();
    const width = bound.width;
    const clicked = event.clientX - bound.x;

    currentTime = (clicked / width) * duration;
  };
</script>

<style lang="scss">
  div {
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin-left: $GU;

    progress {
      background-color: $asphalt-light;
      color: $foreground;
      border: none;
      cursor: pointer;
      position: relative;
      height: $GU / 2;
      width: calc(100% - #{5 * $GU});
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      &::-webkit-progress-bar {
        background-color: $asphalt-light;
      }

      &::-webkit-progress-value {
        background-color: $foreground;
      }

      &::-moz-progress-bar {
        background-color: $foreground;
      }
    }

    pre {
      margin-left: 1em;
      font-size: 0.8rem;
    }
  }
</style>

<div>
  <progress
    bind:this={element}
    max={duration}
    value={currentTime}
    on:click={handleClick} />
  <pre>{format(currentTime)} / {format(duration)}</pre>
</div>
