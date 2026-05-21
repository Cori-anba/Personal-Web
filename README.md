# He LinJiang · Portfolio

何林江的个人作品集展示网站。采用"数字画廊"沉浸氛围风设计，Vite + TypeScript 构建。

## 技术栈

- **构建工具**：Vite 5 + TypeScript
- **样式**：CSS Custom Properties（零运行时开销）
- **动效**：Canvas 粒子背景 + 光标光晕 + Intersection Observer 滚动动画
- **表单**：Formspree（需后续配置 Form ID）
- **部署**：GitHub Pages

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
src/
├── main.ts                    # 应用入口
├── styles/
│   ├── reset.css              # CSS Reset
│   ├── tokens.css             # CSS Custom Properties
│   ├── global.css             # 全局样式
│   ├── animations.css         # @keyframes 动画定义
│   └── components.css         # 所有组件样式
├── components/
│   ├── navbar.ts              # 固定导航栏
│   ├── hero.ts                # Hero 首屏
│   ├── about-module1.ts       # 关于我 - 个人信息
│   ├── about-module2.ts       # 关于我 - 技能与荣誉
│   ├── projects-grid.ts       # 项目网格容器
│   ├── project-card.ts        # 项目卡片 (含3D悬浮)
│   ├── contact.ts             # 联系方式 + 表单
│   └── footer.ts              # 页脚
├── effects/
│   ├── particle-bg.ts         # Canvas 粒子背景
│   ├── cursor-glow.ts         # 光标跟随光晕
│   └── scroll-reveal.ts       # 滚动触发入场动画
└── utils/
    ├── data.ts                # 所有内容数据
    └── dom.ts                 # DOM 工具函数
```

## 部署到 GitHub Pages

1. 在 `src/components/contact.ts` 中将 `YOUR_FORM_ID` 替换为你的 Formspree Form ID
2. 构建：`npm run build`
3. 将 `dist/` 目录部署到 GitHub Pages

## 许可

MIT
