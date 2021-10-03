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
  <h1>特殊能力を追加</h1>
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
        <label><input type="radio" name="op_series" value="パワー"/>
          <span>パワー</span>
        </label>
        <label><input type="radio" name="op_series" value="スタミナ"/>
          <span>スタミナ</span>
        </label>
        <label><input type="radio" name="op_series" value="ダシャ・ディアブル"/>
          <span>ダシャ・ディアブル</span>
        </label></div>
    </details>
  </fieldset>
  <ul>
    <li>
      <button on:click={ ()=> exec('パワーI')}>パワーI</button>
    </li>
    <li>
      <button on:click={ ()=> exec('パワーII')}>パワーII</button>
    </li>
    <li>
      <button on:click={ ()=> exec('パワーIII')}>パワーIII</button>
    </li>
    <li>
      <button on:click={ ()=> exec('スタミナI')}>スタミナI</button>
    </li>
    <li>
      <button on:click={ ()=> exec('スタミナII')}>スタミナII</button>
    </li>
    <li>
      <button on:click={ ()=> exec('スタミナIII')}>スタミナIII</button>
    </li>
    <li>
      <button on:click={ ()=> exec('ダシャ・ディアブルI')}>ダシャ・ディアブルI</button>
    </li>
    <li>
      <button on:click={ ()=> exec('ダシャ・ディアブルII')}>ダシャ・ディアブルII</button>
    </li>
  </ul>
</Dialog>

<style></style>