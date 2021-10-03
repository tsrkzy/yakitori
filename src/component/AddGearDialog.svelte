<script>
  import { createEventDispatcher } from "svelte";

  export let dialog = false;

  const dispatcher = createEventDispatcher();

  export function open() {
    dialog = true;
  }

  export function close() {
    dialog = false;
  }

  function exec(result) {
    console.log("AddGearDialog.exec", result);
    dispatcher("exec", result);
    close();
  }

  function cancel() {
    console.log("AddGearDialog.exec");
    dispatcher("cancel");
    close();
  }
</script>
<div class="dialog-shroud" class:dialog__hide={!dialog} on:click={cancel}>
  <div class="dialog-background">
    <h1>アイテムを追加</h1>
    <fieldset>
      <legend>Filter</legend>
      <label>
        <span>search:</span>
        <input type="text"/>
      </label>
      <details open>
        <summary>絞り込み</summary>
        <div><label><input type="radio" name="op_category" value="ALL" checked/>
          <span>ALL</span>
        </label>
          <label><input type="radio" name="op_category" value="WEAPON"/>
            <span>WEAPON</span>
          </label>
          <label><input type="radio" name="op_category" value="UNIT"/>
            <span>UNIT</span>
          </label></div>
        <div><label><input type="radio" name="op_series" value="ALL" checked/>
          <span>ALL</span>
        </label>
          <label><input type="radio" name="op_series" value="プリム"/>
            <span>プリム</span>
          </label>
          <label><input type="radio" name="op_series" value="ツヴィア"/>
            <span>ツヴィア</span>
          </label>
          <label><input type="radio" name="op_series" value="トロワーデ"/>
            <span>トロワーデ</span>
          </label></div>
      </details>
    </fieldset>
    <ul>
      <li>
        <button on:click={()=> exec('プリムアーマ')}>プリムアーマ</button>
      </li>
      <li>
        <button on:click={()=> exec('プリムソード')}>プリムソード</button>
      </li>
    </ul>
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