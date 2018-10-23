## identity-obj-proxy-issue-9

This is where you include your WebPart documentation.

### Repro steps
```
npm install
npm test
```

As you can see the styles object from src/webparts/helloWorld/tests/HelloWorld.test.tsx should be replaced with obj-identity-proxy but it returns `undefined`.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
