<style>
  button {
    background-color: var(--button);
    color: var(--text);
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
    text-transform: uppercase;
  }
</style>

<script>
  function toggle() {
    window.document.body.classList.toggle('dark-mode');
  }
</script>

<button on:click={toggle}>
  <slot />
</button>
