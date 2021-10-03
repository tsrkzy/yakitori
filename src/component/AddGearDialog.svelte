<script>
  import { createEventDispatcher } from "svelte";
  import Dialog from "./Dialog.svelte";

  let dialog;

  const dispatcher = createEventDispatcher();

  export function open() {
    dialog.open();
  }

  export function close() {
    dialog.close();
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
<Dialog bind:this={dialog}>
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
</Dialog>

<style>

</style>