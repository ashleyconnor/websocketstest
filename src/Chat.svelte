<script>
  import { onMount } from 'svelte';
  import { sendMessage, messageStore } from './stores';

  let messageInput;
  let messageText;
  let messages;

  onMount(() => messageInput.focus());

  const submitMessage = () => {
    sendMessage(messageText);
    messageText = "";
    messageInput.focus();
  };

  const onKeyPress = e => {
    if (e.charCode === 13) submitMessage();
  };
</script>

<ul>
  {#each $messageStore as message}
    <li>{message}</li>
  {/each}
</ul>

<input bind:this={messageInput} bind:value={messageText} on:keypress={onKeyPress} type="text" />

<button on:click={submitMessage}>Send Message</button>
