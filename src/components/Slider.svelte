<script>
  export let id, name, min, max, step, value;
</script>

<label {id} class="control">
  <span>{name}</span>
  <span class="value">{value}{name === "Angle" ? "°" : ""} </span>
  <input
    aria-labelledby={id}
    class="slider"
    type="range"
    {min}
    {max}
    {step}
    bind:value
  />
</label>

<style>
  .control {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr minmax(4rem, auto) 1fr;
    align-items: center;
    justify-items: start;
  }

  .value{
      justify-self: center;
  }

  .slider {
    -webkit-appearance: none;
    width: 15rem;
    height: 0.5rem;
    border-radius: 5px;
    border: 1px solid var(--theme-col);
    background: white;
    padding: 0;
    margin: 0%;
  }

  .slider::-webkit-slider-thumb {
    appearance: none;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background: var(--theme-col-text);
    cursor: pointer;
  }
</style>
