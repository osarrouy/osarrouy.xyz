<script>
  import { stores } from "@sapper/app";
  import chapters_tcs from "../routes/tcs/_chapters.js";
  import Burger from "./Burger.svelte";

  export let opened = false;

  let _class = "";
  let _sequence = "";
  let _chapters = [];

  const { preloading, page, session } = stores();

  page.subscribe(_page => {
    switch (_page.path.split("/")[1]) {
      case "tcs":
        _class = "technologie, communication, société";
        _chapters = chapters_tcs;
        break;
      default:
        _class = "";
    }

    _sequence = _chapters[_page.path.split("/")[3]];
  });
</script>

<style lang="scss">
  header {
    background-color: transparentize($asphalt-light, 0.5);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid $asphalt-light;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    height: $header-height;
    width: 100vw;
  }

  nav {
    height: $header-height;
    max-width: 980px;
    margin: auto;
  }

  ul {
    height: $header-height;
    list-style-type: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    li {
      display: inline;
      // margin-right: 0.5em;
      line-height: $header-height;

      &:after {
        content: "/";
        margin-left: 0.5em;
      }

      &:last-of-type {
        &:after {
          content: none;
          margin-left: 0;
        }
      }
    }
  }
</style>

<header>
  <nav>
    <ul>
      <li>
        <a href="/">home</a>
      </li>
      {#if _class}
        <li>
          <a href="/tcs">{_class}</a>
        </li>
        {#if _sequence}
          <li>{_sequence.number} - {_sequence.title.toLowerCase()}</li>
        {/if}
      {/if}
    </ul>
  </nav>
</header>
<Burger bind:opened />
