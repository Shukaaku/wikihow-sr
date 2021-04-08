# wikihow-sr

> API Wrapper for https://wikihow.com/api.php

<div align="center">
	<p>
		<a href="https://www.npmjs.com/package/wikihow-sr"><img src="https://img.shields.io/npm/v/wikihow-sr.svg?maxAge=3600" alt="NPM version" /></a>
		<a href="https://www.npmjs.com/package/wikihow-sr"><img src="https://img.shields.io/npm/dt/wikihow-sr?maxAge=3600" alt="NPM downloads" /></a>
		<a href="https://david-dm.org/Shukaaku/wikihow-sr"><img src="https://david-dm.org/Shukaaku/wikihow-sr/status.svg?maxAge=3600" alt="Dependencies" /></a>
	</p>
	<p>
		<a href="https://nodei.co/npm/wikihow-sr/"><img src="https://nodei.co/npm/wikihow-sr.png?downloads=true&stars=true" alt="NPM info" /></a>
	</p>
</div>

## Features

- Actually maintained
- Uses async/await

## Install

```bash
yarn add wikihow-sr
```

## Usage

```js
const search = require('wikihow-sr');

// If no results are found, it returns null.

// async/await
(async () => {
	const data = await search('how to clean');
	console.log(data);
})();

// .then
search('how to clean').then(console.log);
```

> Example Output
```js
{
	id: 40273,
	title: 'Clean Your Room',
	language: 'en',
	url: 'https://www.wikihow.com/Clean-Your-Room'
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**wikihow-sr** © [Yoshida Tomio](https://github.com/1chiSensei), Released under the [Apache-2.0](https://github.com/Shukaaku/wikihow-sr/blob/main/LICENSE) License.<br>
Authored and maintained by 1chiSensei.

> GitHub [@1chiSensei](https://github.com/1chiSensei)