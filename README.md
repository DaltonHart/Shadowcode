๐ง UNDER CONSTRUCTION
# ๐ป Shadowcode
๐ Education based IDE for learning software development

## ๐ฉโ๐ป Get Started
There are a variety of commands to use during the development process. 
___

### ๐ฆ Install Dependencies 
For this application we are leveraging the following technologies:

- ๐งถ Yarn to bundle and run the js application. You can find the installation instructions [here](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).
- โ๏ธ Rust to bundle the native desktop app thanks to Tauri. You can find the installation instructions [here](https://www.rust-lang.org/tools/install)

> Once both of those are installed you can run the `yarn` command to install node dependencies. 

### Development Server

๐ฅ Desktop
```
yarn tauri dev
```

๐ Web
```
yarn dev
```

### Build Application

๐ฅ Desktop

``` 
yarn tauri build
```

๐ Web

``` 
yarn build
```

### Commit Work
To maintain consistent commit messages we will be using commitizen along with cz-emoji. 
A script has been added for convenience. 

```
yarn commit
```

![commit image](./assets/commit.png "commit")