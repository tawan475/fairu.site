# fairu.site
This is module to post request to fairu.site

#### installing
> npm i `fairu.site`

#### simple example
```node
const fairu = require('fairu.site')

fairu.post('./sample.jpg', (result, err) => {
    console.log(result) // link to cdn.fairu.site
})
```

#### Documents
> https://docs.fairu.site