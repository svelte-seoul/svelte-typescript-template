<script lang="ts">
  import {_} from 'svelte-i18n';
  import Button from '../uis/Button.svelte';
  import {userStore} from '../../stores/userStore';

  const {fullname, setName} = userStore;

  function handleClick() {
    window.document.body.classList.toggle('dark-mode');
  }

  function getUser() {
    setName('Hyo', 'Jang');
  }
</script>

<p>{$_('intro.title')}</p>
<Button on:click={handleClick}>Change Theme</Button>
<Button on:click={getUser}>Get User</Button>
<p>{$fullname}</p>
