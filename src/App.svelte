<style lang="postcss">
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  @custom-media --mobile (max-width: 640px);

  body {
    font-family: Roboto;
    transition: background-color 0.3s;
    background-color: var(--background);
    color: var(--text);

    input {
      background-color: var(--background);
      color: var(--text);
      caret-color: var(--text);

      &:focus {
        outline: 1px solid var(--primary);
      }
    }

    textarea {
      background-color: var(--background);
      color: var(--text);
      caret-color: var(--text);
      box-sizing: border-box;
      -ms-overflow-style: none;
      scrollbar-width: none;
      resize: none;

      &:focus {
        outline: 1px solid var(--primary);
      }
    }
  }

  main {
    padding: 1em;
    width: calc(100vw - 2em);
    height: calc(100vh - 2em);
    background-color: var(--background);
    text-align: center;
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
  import type {ThemeStore} from 'svelte-theme';
  import {getContext} from 'svelte';

  const {changeThemeType} = getContext<ThemeStore>('svelte-theme');

  const toggleTheme = () => {
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === '.') {
        changeThemeType();
      }
    });
  };

  toggleTheme();
</script>

<main>
  <nav>
    <a href="/">Intro</a> |
    <a href="/#/temp">Temp</a>
  </nav>
  <Router routes={routes} />
</main>
