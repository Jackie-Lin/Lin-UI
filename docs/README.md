# 快速开始

#### 安装组件库

```bash
npm i lin-ui2
```

#### 引用组件库
>在 main.js 中引入组件库

```javascript
// 全部引入
import 'lin-ui2/dist/css/index.css';
import LUI from 'lin-ui2';
Vue.use(LUI);

// 按需引入
import 'lin-ui2/dist/css/demo.css';
import { Demo } from 'lin-ui2';
Vue.use(Demo);
```
