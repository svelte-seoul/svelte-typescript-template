<style>
  :global(body.light-mode) {
    --background: #fff;
    --paper: #f2f5f6;
    --disabled: #c4c4c4;
    --text: #000;
    --text-light: #1b1b1b;
    --textContrast: #fff;
    --placeholder: #6d6d6d;
    --main: var(--primary);
    --main-dark: var(--primary-light);
    --card: #fff;
  }
  :global(body.dark-mode) {
    --background: #000;
    --paper: #2a2a2a;
    --disabled: #515151;
    --placeholder: #6d6d6d;
    --text: #fff;
    --text-light: #d3d3d3;
    --textContrast: #000;
    --main: var(--primary-light);
    --main-dark: var(--primary);
    --card: #1c1c1c;
  }
  :global(body) {
    --brand: #28db98;
    --primary: #0db293;
    --primary-light: #75d0b8;
    --secondary: #00d9d5;
    --success: #33ff2f;
    --danger: #ff002e;
    --warning: #f2df0f;
    --info: #3a74e7;
    --light: #ededed;
    --red: #ff728d;
    --orange: #f6a623;
    --yellow: #eed100;
    --green: #24cd97;
    --blue: #679eff;
    --purple: #b669f9;

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
