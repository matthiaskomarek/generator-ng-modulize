# generator-ng-modulize

![Dependencies](https://david-dm.org/matthiaskomarek/generator-ng-modulize.svg)

> Yeoman generator for quick creation of AngularJS modules with Webpack as module bundler and build system

## Usage

### Install

##### Install required tools `yo`, `webpack`, `bower`:

```
npm install -g yo webpack bower
```

##### Install `generator-ng-modulize`

```
npm install -g generator-ng-modulize
```

### Run

##### Create a new directory, and go into:

```
mkdir my-new-module && cd $_
```

##### Run `yo generator-ng-modulize`, and select desired technologies:

```
yo ng-modulize
```

## Questions the generator will ask

* Module name (Default: Folder name)
* Module description (Used in package.json)
* JS Preprocessor: Standart JS, ES6, Typescript
* Add bower support: Yes, No




