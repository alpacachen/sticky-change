sticky-change
========
[![NPM Package][npm]][npm-url]
[![Build Size][build-size]][build-size-url]

watching HTMLElement's sticky state, without ```scroll``` events.

#### Usage ####
pure
```html
<head>
    <script src="./dist/index.js"></script>
</head>
<div id="page-title" style="position: sticky; top: 30px">Page Title</div>
<script>
    new WatchSticky(
            document.getElementById('page-title'), 
            null, 
            () => {
                document.getElementById('page-title').classList.toggle('shadow', true)
            },
            () => {
                document.getElementById('page-title').classList.toggle('shadow', false)
            }
    )
</script>
```
npm

```npm i sticky-change```

```import {WatchSticky} from 'sticky-change'```

```new WatchSticky(ref, null, stickyCb, unstickyCb)```

[npm]: https://img.shields.io/npm/v/sticky-change
[npm-url]: https://www.npmjs.com/package/sticky-change
[build-size]: https://badgen.net/bundlephobia/minzip/sticky-change
[build-size-url]: https://bundlephobia.com/package/sticky-change
