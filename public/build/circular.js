registerLayout(
  "circular",
  class {
    static get inputProperties() {
      return ["--size"];
    }
    async intrinsicSizes() {}
    async layout(children, edges, constraints, styleMap) {
      // (1) Determine our (inner) available size.
      const inlineSize = constraints.fixedInlineSize - edges.inline;
      const blockSize = constraints.fixedBlockSize
        ? constraints.fixedBlockSize - edges.block
        : null;
      const size = parseInt(styleMap.get("--size").toString().slice(0, -2));
      let maxBlockSize = 0;
      let angle = ((360 / children.length) * Math.PI) / 180;
      let r = (size / 5) * children.length;
      r = Math.min(r, (inlineSize - size) / 2);

      const childFragments = [];
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        // (2) Perform layout upon the child.
        const fragment = await child.layoutNextFragment({
          inlineSize,
          blockSize,
        });

        const x = r * Math.cos(angle * i);
        const y = r * Math.sin(angle * i);
        // Position our child fragment.
        fragment.inlineOffset =
          edges.inlineStart + x + (inlineSize - fragment.inlineSize) / 2;
        fragment.blockOffset = edges.blockStart + y+r;
        // Determine the max fragment block size so far.
        maxBlockSize = Math.max(maxBlockSize, fragment.blockOffset);
        childFragments.push(fragment);
      }

      // (3) Determine our "auto" block size.
      const autoBlockSize = maxBlockSize + size;

      // (4) Return our fragment.
      return {
        autoBlockSize,
        childFragments,
      };
    }
  }
);
