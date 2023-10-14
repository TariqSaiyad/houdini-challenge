<script>
  import { fade } from "svelte/transition";
  import Slider from "./components/Slider.svelte";
  import { emojis } from "./constants.js";

  let enabled = false;

  if ("layoutWorklet" in CSS) {
    async function init() {
      await CSS.layoutWorklet.addModule("./build/circular.js");
      enabled = true;
    }
    init();
    console.log("layout script installed!");
  }

  let num = 36;
  let angle = 0;
  let radius = 1;
</script>

<main>
  <h1>CSS Circular</h1>
  <form class="controls">
    <Slider
      id="itemInput"
      name="Items"
      min="1"
      max="36"
      step="1"
      bind:value={num}
    />
    <Slider
      id="angleInput"
      name="Angle"
      min="0"
      max="360"
      step="1"
      bind:value={angle}
    />
    <Slider
      id="radiusInput"
      name="Radius Scale"
      min="0.5"
      max="2"
      step="0.1"
      bind:value={radius}
    />
  </form>
  {#if !enabled}
    <strong>
      Layoutworklet not available. To enable, turn on the following:
      <code>“Experimental Web Platform features” on chrome://flags.</code>
    </strong>
  {/if}
  {#if enabled}
    <section
      id="container"
      class="container"
      style="--a:{angle}; --rad:{radius};"
    >
      {#each Array(num) as _, i}
        <a
          href="/"
          in:fade={{ duration: 150 }}
          out:fade={{ duration: 150 }}
          class="item"
          style="--col:{i * 10 + 'deg'}; --index:{i + 1};"
          >{emojis[Math.floor(Math.random() * emojis.length)]}</a
        >
      {/each}
    </section>
  {/if}
</main>

<style>
:root {
    /* only px will work. for now.. */
  --box-size: 75px !important; 
	--theme-col:#d67ab1;
	--theme-col-text:#cf63a4;
  }

  main {
    text-align: center;
    padding: 1rem 1rem 4rem 1rem;
	background-color: #FBEFF5;
	border: 1rem solid #d67ab1;
	border-radius: 2rem;
  }

  h1 {
    color: var(--theme-col-text);
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 100;
  }
  .container {
    display: layout(circular);
    --size: var(--box-size);
    --angle: var(--a)
    --rad: var(--rad)
    border-radius: 10px;
  }

  .item {
    background: hsl(var(--col), 100%, 70%);
    /* filter: hue-rotate(var(--col)); */
    color: #1e1e1e;
    font-weight: bolder;
    font-size: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: var(--box-size);
    height: var(--box-size);
    border-radius: 50%;
    box-shadow: rgba(60, 64, 67, 0.5) 0px 1px 2px 0px;
    overflow: overlay;
  }

  .item:focus-visible{
	  outline: 2px solid #b95cb2;
  }

  .controls{
    display: flex;
    flex-direction: column;
    font-size: 1.125rem;
    align-items: center;
    gap: 0.5rem;
    padding: 0rem 1rem 3rem;
  }


</style>
