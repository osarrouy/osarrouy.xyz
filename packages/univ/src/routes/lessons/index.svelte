<script>
  import { turnon, turnoff } from '../../lib/animations.js'

  const step = 0
</script>
<!-- @keyframes turn-on{
  0%{
    transform:scale(1,0.8) translate3d(0,0,0);
    -webkit-filter:brightness(30);
    filter:brightness(30);
    opacity:1;
  }
  3.5%{
    transform:scale(1,0.8) translate3d(0,100%,0);
  }
  
  3.6%{
    transform:scale(1,0.8) translate3d(0,-100%,0);
    opacity:1;
  } 
  
  9%{
    transform:scale(1.3,0.6) translate3d(0,100%,0);
    -webkit-filter:brightness(30);
    filter:brightness(30);
    opacity:0;
  }
  
  
  
  11%{
    transform:scale(1,1) translate3d(0,0,0);
    -webkit-filter:contrast(0) brightness(0) ;
    filter:contrast(0) brightness(0);
    opacity:0;
  }
  
  100%{
    transform:scale(1,1) translate3d(0,0,0);
    -webkit-filter:contrast(1) brightness(1.2) saturate(1.3);
    filter:contrast(1) brightness(1.2) saturate(1.3);
    opacity:1;
  }
} -->
<style lang="scss">
  section {
    background-color: $background;
    color: $accent;
    display: flex;
    align-items: center;
    margin: auto;
    width: 100vw;
    height: 100vh;
  }

  p {
    margin: 0;
  }

  p.quote {
    // font-style: italic;
    width: 100%;
  }

  a {
    color: $accent;
    text-decoration: underline;
    // padding: $GU / 2;
    // margin:  -$GU / 2;

    &:hover {
      background-color: $accent;
      color: $asphalt;
    }
  }

  pre {
    color: $cyan;
  }

  td {
    vertical-align: top;
  }
</style>

<svelte:head>
	<title>osarrouy.xyz » univ</title>
</svelte:head>



<section class="teste" in:turnon out:turnoff>
  <a href="/">back</a> ...
</section>
