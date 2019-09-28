```
npm install --save-dev @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators
```
.babelrc file in the root directory with the following:
```
{
  "presets": [
    "next/babel"
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}

```

tsconfig.json file in src
```
{
  "compilerOptions": {
      "experimentalDecorators": true,
      "allowJs": true
  }
}

```
next.config.js in root
```
const withSass = require('@zeit/next-sass')
module.exports = withSass()

```