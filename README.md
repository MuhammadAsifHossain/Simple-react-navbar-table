# Simple-react-navbar-table

_This repository contains a simple React app that demonstrates a basic navigation bar design and a basic table._

**Features**

- JSX syntax implementation
- Bundled using Parcel Bundler
- Removed console.log using .babelrc

```javasript
import React from "react";
import ReactDOM from "react-dom/client";

const Container = () => {
  return (
    <div>
      <Navbar />
      <Table />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
```

---

**Folder structure**

| src/                                             |
| ------------------------------------------------ |
| index.html                                       |
| script.js                                        |
| package.json                                     |
| package-lock.json                                |
| .gitignore ->(node_modules , dist .parcel-cache) |
| .babelrc                                         |
| README.md                                        |

---

**Getting Started**

1. Clone the repository to your local machine
2. Install the required dependencies using npm commands

- note: install nodejs before running the npm commands
- if you face any issue while installing parcel then refer back to npm website and parcel docs
- or you may use anyother bundler such as webpack and so on.

3. Start the development server using npm start
4. To remove console.log (optional)

- create a .babelrc file
- visit babel website and check docs and follow the given instruction

---

### Sceenshot

![image](react-nav-table01.png)
