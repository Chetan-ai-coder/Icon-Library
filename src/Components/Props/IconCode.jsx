import './IconCode.css';
import React, { useState } from 'react';

const IconCode = () => {

    const reactCode =
        `import { AArrowUp } from 'lucide-react';

    const App = () => {
  return (
    <AArrowUp />
  );
};

export default App; `

    const vanillaCode = `import { createIcons, icons } from 'lucide';

createIcons({ icons });

document.body.append('<i data-lucide="a-arrow-up"></i>');  `

const vueCode = `<script setup>
import { AArrowUp } from 'lucide-vue-next';
</script>

<template>
  <AArrowUp />
</template>`

const svelteCode = `<script>
import { AArrowUp } from 'lucide-svelte';
</script>

<AArrowUp />`

const preactCode = `import { AArrowUp } from 'lucide-preact';

const App = () => {
  return (
    <AArrowUp />
  );
};

export default App;`

const solidCode = `import { AArrowUp } from 'lucide-solid';

const App = () => {
  return (
    <AArrowUp />
  );
};

export default App;`

const angularCode = `// app.module.ts
import { LucideAngularModule, AArrowUp } from 'lucide-angular';

@NgModule({
  imports: [
    LucideAngularModule.pick({ AArrowUp })
  ],
})

// app.component.html
<lucide-icon name="a-arrow-up"></lucide-icon>`

const iconCode = `<style>
@import ('~lucide-static/font/Lucide.css');
</style>

<div class="icon-a-arrow-up"></div>`

    const [icode, setIcode] = useState(vanillaCode);


    return (
        <>

            {/* Icon Code Box Start */}
            <div className="icon_code_box">

                {/* Upper Column Start */}
                <div className="box_upper_column">
                    <ul>
                        <li onClick={() => setIcode(vanillaCode)}>Vanilla</li>
                        <li onClick={() => setIcode(reactCode)}>React</li>
                        <li onClick={() => setIcode(vueCode)}>Vue</li>
                        <li onClick={() => setIcode(svelteCode)}>Svelte</li>
                        <li onClick={() => setIcode(preactCode)}>Preact</li>
                        <li onClick={() => setIcode(solidCode)}>Solid</li>
                        <li onClick={() => setIcode(angularCode)}>Angular</li>
                        <li onClick={() => setIcode(iconCode)}>Icon Font</li>
                    </ul>
                </div>
                {/* Upper Column End */}

                {/* Lower Column Start */}
                <div className="box_lower_column">
                    <div className="lower_column_icon">
                        <i class="ri-clipboard-line"></i>
                    </div>
                    <pre>
                        <code>
                            {icode}
                        </code>
                    </pre>
                </div>
                {/* Lower Column End */}
            </div>
            {/* Icon Code Box Start */}

        </>
    )
}

export default IconCode;