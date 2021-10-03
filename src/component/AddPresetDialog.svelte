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
    <h1>プリセット能力を追加</h1>
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
          <label><input type="radio" name="op_series" value="フィクサ・アタック"/>
            <span>フィクサ・アタック</span>
          </label>
          <label><input type="radio" name="op_series" value="フィクサ・フェタル"/>
            <span>フィクサ・フェタル</span>
          </label></div>
      </details>
    </fieldset>
    <ul>
      <li>
        <button on:click={ ()=>exec('外す')}>外す</button>
      </li>
      <li>
        <button on:click={ ()=>exec('フィクサ・アタック Lv1')}>フィクサ・アタック Lv1</button>
      </li>
      <li>
        <button on:click={ ()=>exec('フィクサ・アタック Lv2')}>フィクサ・アタック Lv2</button>
      </li>
      <li>
        <button on:click={ ()=>exec('フィクサ・アタック Lv3')}>フィクサ・アタック Lv3</button>
      </li>
      <li>
        <button on:click={ ()=>exec('フィクサ・アタック Lv4')}>フィクサ・アタック Lv4</button>
      </li>
      <li>
        <button on:click={ ()=>exec('フィクサ・アタック Lv5')}>フィクサ・アタック Lv5</button>
      </li>
      <li>
        <button on:click={ ()=>exec('フィクサ・フェタル Lv1')}>フィクサ・フェタル Lv1</button>
      </li>
      <li>
        <button on:click={ ()=>exec('フィクサ・フェタル Lv2')}>フィクサ・フェタル Lv2</button>
      </li>
      <li>
        <button on:click={ ()=>exec('フィクサ・フェタル Lv3')}>フィクサ・フェタル Lv3</button>
      </li>
      <li>
        <button on:click={ ()=>exec('フィクサ・フェタル Lv4')}>フィクサ・フェタル Lv4</button>
      </li>
      <li>
        <button on:click={ ()=>exec('フィクサ・フェタル Lv5')}>フィクサ・フェタル Lv5</button>
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