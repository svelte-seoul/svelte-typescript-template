<style>
  :global(body.light-mode) {
    --background: #fff;
    --paper: #ededed;
    --disabled: #c4c4c4;
    --text: #000;
    --textContrast: #fff;
    --placeholder: #6d6d6d;
  }
  :global(body.dark-mode) {
    --background: #000;
    --paper: #414141;
    --disabled: #414141;
    --text: #fff;
    --textContrast: #000;
    --placeholder: #6d6d6d;
  }
  :global(body) {
    --primary: #0db293;
    --secondary: #00d9d5;
    --success: #33ff2f;
    --danger: #ff002e;
    --warning: #f2df0f;
    --info: #3a74e7;

    transition: background-color 0.3s;
    background-color: var(--background);
    color: var(--text);
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
