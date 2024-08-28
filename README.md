# Project Name

AutoPerformTest: Automated Performance Testing Suite


## Description

This project serves as a boilerplate for automation and performance testing for common projects.

./*.yml: define artillery tests. 
You can run it with command artillery run [filename].yml


./tests/*.spec.ts: define pure playwright tests. 
You can run it or better use Visual Code with Playwright extension to run and manage them


./perf/*.ts: playwright scenarios tests specially for artillery

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation
git clone https://github.com/tant/artillery-playwright.git
cd artillery-playwright
npm install


## Usage
- Go to folder ./tests/ develope tests using playwright as usuall.
- If you want to incorporate this test in to performance, consider to reformat it as an async function and put it in a .ts file in ./perf
- Modify or create a new yml file according to your new scenario.
- Run it.

## Features
Just to save me some time to start working on a project


## Contributing
Fork this and do what ever you want

## License
Specify the license under which your project is distributed.

This project is licensed under the [MIT License](LICENSE).
