<div align="center">
  <p>
    <a href="https://nodei.co/npm/fairu.site/"><img src="https://nodei.co/npm/fairu.site.png?downloads=true&downloadRank=true&stars=true"></a>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/fairu.site"><img src="https://img.shields.io/npm/dt/fairu.site"></a>
    <a href="https://www.npmjs.com/package/fairu.site"><img src="https://img.shields.io/npm/v/fairu.site"></a>
    <a href="https://www.npmjs.com/package/fairu.site"><img src="https://img.shields.io/npm/l/fairu.site"></a>
  </p>
</div>

# fairu.site
Why fairu.site?
- very fast file sharing with no limit!
- protected with AES 256
- unlimited bandwidth

## installing
`npm i fairu.site`

## simple example
#### Asynchronous
```node
const fairu = require('fairu.site')

fairu.post('./sample.jpg', (result, err) => {
    console.log(result) // link to cdn.fairu.site
})
```

#### Synchronous
```node
const fairu = require('fairu.site')

var result = fairu.postSync('./1.jpg')
console.log(result) // link to cdn.fairu.site
```

## Documents
> https://docs.fairu.site