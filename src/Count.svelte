<script>
  import { messageStore } from './stores';

  let count;

  messageStore.subscribe(value => count = value.length);
</script>

<div>
  There are {count} messages.
</div>
