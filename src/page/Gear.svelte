<script>
  import AddGearDialog from "../component/AddGearDialog.svelte";
  import AddOptionDialog from "../component/AddOptionDialog.svelte";
  import AddPresetDialog from "../component/AddPresetDialog.svelte";
  import { Weapon } from "../script/weapon";

  Weapon.GetData();

  let addGearDialog;

  function showGearDialogHandler() {
    addGearDialog.open();
  }

  let addOptionDialog;

  function showOptionDialogHandler() {
    addOptionDialog.open();
  }

  let addPresetDialog;

  function showPresetDialogHandler() {
    addPresetDialog.open();
  }
</script>

<main>
  <!-- MODAL: ADD GEAR -->
  <AddGearDialog bind:this={addGearDialog}></AddGearDialog>

  <!-- MODAL: CHOOSE OP -->
  <AddOptionDialog bind:this={addOptionDialog}></AddOptionDialog>

  <!-- MODAL: CHOOSE PREFIX -->
  <AddPresetDialog bind:this={addPresetDialog}></AddPresetDialog>
  <h1>Gear</h1>
  <div>
    <button on:click={showGearDialogHandler}>アイテムを追加</button>
  </div>
  <div class="flex-container" style="    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;">
    <div style="">
      <p><span>プリムソード</span><span>+35</span>
        <span>潜在能力: </span>
        <span>猛滅の型 Lv4</span></p>
      <p>威力+(21%/23%/26%/27%)／ダメージ耐性-(10%/10%/10%/8%)</p>
      <p><span>プリセット能力: </span>
        <button on:click={showPresetDialogHandler}>変更</button>
      </p>
      <ol>
        <li>攻撃力: 283</li>
        <li>属性: 雷</li>
      </ol>
      <ol>
        <li>
          <button on:click={showOptionDialogHandler}>変更</button>
          <span>パワー3</span></li>
        <li>
          <button on:click={showOptionDialogHandler}>変更</button>
          <span>エアル・ノート</span></li>
        <li>
          <button on:click={showOptionDialogHandler}>変更</button>
          <span>ダイダル・パワー</span></li>
        <li>
          <button on:click={showOptionDialogHandler}>変更</button>
          <span>-</span></li>
      </ol>
    </div>
    <div style="">
      <p><span>プリムアーマ</span><span>+40</span>
        <span>潜在能力: </span>
        <span>猛滅の型 Lv4</span></p>
      <p>威力+(21%/23%/26%/27%)／ダメージ耐性-(10%/10%/10%/8%)</p>
      <p><span>プリセット能力: </span>
        <button on:click={showPresetDialogHandler}>変更</button>
      </p>
      <ol>
        <li>防御力:48</li>
        <li>ダメージ耐性:1</li>
        <li>打撃武器上昇:1</li>
        <li>射撃武器上昇:1</li>
        <li>砲撃武器上昇:1</li>
        <li>状態異常耐性 炎:1</li>
        <li>状態異常耐性:氷1</li>
        <li>状態異常耐性:雷1</li>
        <li>状態異常耐性:風1</li>
        <li>状態異常耐性:光1</li>
        <li>状態異常耐性:闇1</li>
        <li>状態異常耐性:出血1</li>
        <li>HP:20</li>
        <li>PP:10</li>
      </ol>
      <ol>
        <li>
          <button>変更</button>
          <span>パワー3</span></li>
        <li>
          <button>変更</button>
          <span>エアル・ノート</span></li>
        <li>
          <button>変更</button>
          <span>ダイダル・パワー</span></li>
        <li>
          <button>変更</button>
          <span>-</span></li>
      </ol>
    </div>
    <div style="">
      <p><span>プリムアーマ</span><span>+40</span>
        <span>潜在能力: </span>
        <button>変更</button>
        <span>猛滅の型 Lv4</span></p>
      <p>威力+(21%/23%/26%/27%)／ダメージ耐性-(10%/10%/10%/8%)</p>
      <ol>
        <li>防御力:48</li>
        <li>ダメージ耐性:1</li>
        <li>打撃武器上昇:1</li>
        <li>射撃武器上昇:1</li>
        <li>砲撃武器上昇:1</li>
        <li>状態異常耐性 炎:1</li>
        <li>状態異常耐性:氷1</li>
        <li>状態異常耐性:雷1</li>
        <li>状態異常耐性:風1</li>
        <li>状態異常耐性:光1</li>
        <li>状態異常耐性:闇1</li>
        <li>状態異常耐性:出血1</li>
        <li>HP:20</li>
        <li>PP:10</li>
      </ol>
      <ol>
        <li>
          <button>変更</button>
          <span>パワー3</span></li>
        <li>
          <button>変更</button>
          <span>エアル・ノート</span></li>
        <li>
          <button>変更</button>
          <span>ダイダル・パワー</span></li>
        <li>
          <button>変更</button>
          <span>-</span></li>
      </ol>
    </div>
  </div>
</main>

<style>
</style>
