<script>
  import { fade, fly } from "svelte/transition";
  import { emojis } from "./constants.js";

  if (!CSS.layoutWorklet) {
    document.body.innerHTML("LayoutWorklet not supported by this browser");
  }
  async function init() {
    await CSS.layoutWorklet.addModule("./build/circular.js");
  }
  init();

  let num = 36;
</script>

<main>
  <h1>CSS Circular</h1>
  <input class="slider" type="range" min="1" max="36" bind:value={num} />
  <div id="container" class="container">
    {#each Array(num) as _, i}
      <a
        href="/"
        in:fade={{ duration: 150 }}
        out:fade={{ duration: 150 }}
        class="item"
        style="--col:{i*10 + 'deg'}"
        >{emojis[Math.floor(Math.random() * emojis.length)]}</a
      >
    {/each}
  </div>
</main>

<style>
  :root {
    /* only px will work. for now.. */
    --box-size: 100px;
	--theme-col:#d67ab1;
	--theme-col-text:#cf63a4;
  }

  main {
    text-align: center;
    padding: 1rem 2rem;
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
  }

  .item:focus-visible{
	  outline: 2px solid #b95cb2;
  }

  .slider {
  -webkit-appearance: none;
  width: 15rem;
  height: 0.5rem;
  border-radius: 5px; 
  border: 1px solid var(--theme-col);
  margin-bottom: 2rem; 
  background: white;
}

.slider::-webkit-slider-thumb {
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%; 
  background: var(--theme-col-text);
  cursor: pointer;
}


</style>
