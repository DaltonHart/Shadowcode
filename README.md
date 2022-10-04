🚧 UNDER CONSTRUCTION
# 💻 Shadowcode
📚 Education based IDE for learning software development

## 👩‍💻 Get Started
There are a variety of commands to use during the development process. 
___

### 📦 Install Dependencies 
For this application we are leveraging the following technologies:

- 🧶 Yarn to bundle and run the js application. You can find the installation instructions [here](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).
- ⚙️ Rust to bundle the native desktop app thanks to Tauri. You can find the installation instructions [here](https://www.rust-lang.org/tools/install)

> Once both of those are installed you can run the `yarn` command to install node dependencies. 

### Development Server

🖥 Desktop
```
yarn tauri dev
```

🌐 Web
```
yarn dev
```

### Build Application

🖥 Desktop

``` 
yarn tauri build
```

🌐 Web

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