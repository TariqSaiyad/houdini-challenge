registerLayout(
  "circular",
  class {
    static get inputProperties() { return ["--size", "--angle", "--rad"]; }

    async intrinsicSizes() { }

    async layout(children, edges, constraints, styleMap) {

      // (1) Determine our (inner) available size.
      const inlineSize = constraints.fixedInlineSize - edges.inline;
      const blockSize = constraints.fixedBlockSize ? constraints.fixedBlockSize - edges.block : null;

      // (2) Parse available parameters
      const size = parseInt(styleMap.get("--size").toString().slice(0, -2));
      const angleInput = parseInt(styleMap.get("--angle"));
      const radInput = parseFloat(styleMap.get("--rad"));
      const screenWidth = (inlineSize - size) / 2;

      // (3) Calculate angle at which to spread out items.
      let angle = ((360 / children.length) * Math.PI) / 180;

      // (4) Calculate radius of circle based on number of items and size.
      let r = children.length * (size * 0.2);

      // (5) Get the smaller value of either: radius or screen width.
      r = Math.min(r * radInput, screenWidth);

      const childFragments = [];
      let maxBlockSize = 0;
      for (let i = 0; i < children.length; i++) {
        // (6) Perform layout operation upon each child element.
        const child = children[i];
        const fragment = await child.layoutNextFragment({ inlineSize, blockSize });

        // Magic below
        // (7) Use polar coordinates to get x and y position of this element.
        const theta = angle * i + (angleInput * Math.PI / 180);
        const x = r * Math.cos(theta);
        const y = r * Math.sin(theta);

        // (8) Position our child fragment.
        fragment.inlineOffset = edges.inlineStart + x + (inlineSize - fragment.inlineSize) / 2;
        fragment.blockOffset = edges.blockStart + y + r;

        // (9) Determine the max fragment block size so far.
        maxBlockSize = Math.max(maxBlockSize, fragment.blockOffset);
        childFragments.push(fragment);
      }

      // (10) Determine our "auto" block size.
      const autoBlockSize = maxBlockSize + size;

      // (4) Return our fragment.
      return { autoBlockSize, childFragments };
    }
  }
);
