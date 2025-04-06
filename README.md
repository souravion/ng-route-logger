# 📦 ng-route-logger

**ng-route-logger** is a simple and powerful Angular library that helps you **track page navigation times** inside your Angular application.

Whenever a user switches from one route (page) to another, this library records:
- 📍 The new page’s URL (like `/home`, `/about`)
- ⏱️ How many milliseconds it took to load that page

This is super useful if you're building a fast Angular app and want to know which routes take longer to load.

---

## 🎯 Why Should You Use It?

✅ Simple to set up  
✅ Works with Angular's built-in router  
✅ Uses **RxJS Observables**, so you can subscribe to live logs  
✅ Helpful for developers, testers, and learners

---

## 📦 Installation

Run this command in your Angular project folder:

```bash
npm install ng-route-logger
```
## 🧰 Having Trouble Installing?

If you're facing issues while installing (like cache or permission problems), you can force the install using:

```bash
npm install ng-route-logger --force
```
## 🛠️ How to Use

### 1. Import the Module

In your `app.module.ts`, import the logger module:

```ts
import { NgRouteLoggerModule } from 'ng-route-logger';

@NgModule({
  imports: [
    NgRouteLoggerModule,  // Add this line
    ...
  ],
})
export class AppModule {}
```
### 2. Use the Logger Service

You can inject the logger service into any component or service like this:

```ts
import { NgRouteLoggerService } from 'ng-route-logger';

constructor(private logger: NgRouteLoggerService) {
  this.logger.getLogs()
}
```
## 📚 Example Log Output

```ts
[
  { route: '/home', loadTime: 96.3 },
  { route: '/about', loadTime: 201.7 },
  { route: '/contact', loadTime: 87.2 }
]
```
## 📚 Example Use Cases
- Show a "page load time" chart for users

- Find out which pages take longest to load

- Log page transitions for debugging or performance testing


## 🔍 What’s Happening in the Background?

- ⏱️ Starts timer when route navigation begins (`NavigationStart`)
- 🛑 Stops timer when navigation ends (`NavigationEnd`)
- 🧾 Logs the route and time taken
- 📡 Streams the logs using **RxJS Observable**

## 📬 Contribute or Report Issues
Found a bug or have an idea? Create an issue or PR at:

👉 [https://github.com/souravion/ng-route-logger](https://github.com/souravion/ng-route-logger)

## 🚀 Planned Features (Coming Soon)

Here are some awesome features we plan to add in future updates:

| Feature                            | Description                                                                 |
|------------------------------------|-----------------------------------------------------------------------------|
| 📊 Route Load Time Charts          | Visualize navigation performance using simple charts (e.g., bar or line)   |
| 💾 Export Logs                     | Export route logs as JSON or CSV files for performance audits              |
| 🎛️ Configurable Logging Options    | Enable/disable specific logs or exclude certain routes                     |
| 🧹 Auto-Cleanup                    | Automatically limit stored logs to the last N entries                      |
| 🔥 DevTools Panel Integration      | Optional integration with browser devtools extension for real-time viewing |
| 🧪 Unit Test Utilities             | Helpers to test routing performance in unit/e2e test suites                |
| 🌐 Multi-Tab Session Awareness     | Detect and separate logs from different browser tabs                       |

> ✨ Have an idea or feature request? Feel free to [open an issue](https://github.com/souravion/ng-route-logger/issues) or [start a discussion](https://github.com/souravion/ng-route-logger/discussions)!



## ✨ Made with ❤️ by Souravion
For Angular developers who want to know how fast their app really is.
