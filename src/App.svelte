<style>
  :global(body) {
    background-color: white;
    color: black;
    transition: background-color 0.3s;
  }
  :global(body.dark-mode) {
    background-color: black;
    color: white;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<script lang="ts">
  import './i18n';
  import Router from 'svelte-spa-router';
  import routes from './components/navigations/root';
</script>

<main>
  <nav>
    <a href="/">Intro</a> |
    <a href="/#/temp">Temp</a>
  </nav>
  <Router routes={routes} />
</main>
