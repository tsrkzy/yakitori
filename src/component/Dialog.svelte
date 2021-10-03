<script>
  export let dialog = false;

  /**
   * コンポーネント外から呼び出す
   */
  export function open() {
    dialog = true;
  }

  /**
   * コンポーネント外から呼び出す
   */
  export function close() {
    dialog = false;
  }

</script>
<div class="dialog-shroud" class:dialog__hide={!dialog} on:click={close}>
  <div class="dialog-background" on:click|stopPropagation>
    <slot><!-- on:exec on:cancel --></slot>
  </div>
</div>

<style>
    .dialog-shroud {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0vh;
        left: 0vw;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .dialog-background {
        position: absolute;
        width: 90vw;
        height: 90vh;
        top: 5vh;
        left: 5vw;
        background-color: rgba(255, 255, 255, 0.9);
    }

    .dialog__hide {
        display: none;
    }

</style>