<script>
  import {
    Router,
    Link,
    Route
  } from "svelte-routing";
  import Top from "./pages/Top.svelte";
  import Gear from "./pages/Gear.svelte";
  // import Test from "./pages/Test.svelte";

</script>

<Router>
  <nav>
    <Link to="">index</Link>
    <Link to="gear">gear</Link>
    <Link to="test">test</Link>
  </nav>
  <main>
    <Route path="" component="{Top}"></Route>
    <Route path="gear" component="{Gear}"></Route>
<!--    <Route path="test" component="{Test}"></Route>-->
  </main>
</Router>

<style>
</style>
