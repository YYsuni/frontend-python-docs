# 前端 Python 3.12（frontend-python-docs）

面向**中高级前端**的 Python **精简教程站点**：内容改写自 [Python 3.12 官方教程](https://docs.python.org/zh-cn/3/tutorial/)，对齐 JavaScript / TypeScript 心智，便于快读、速查与本地练习。站点基于 **Next.js** 与 **[Fumadocs](https://fumadocs.dev)** 搭建。

Logo / favicon 使用仓库内 `[public/favicon.svg](public/favicon.svg)`。

## 本地运行

依赖：Node.js（建议与 CI 一致的最新 LTS 版本）。

```bash
npm install
npm run dev
```

开发服务器默认端口为 **7737**：在浏览器打开 [http://localhost:7737](http://localhost:7737)。文档路径：[http://localhost:7737/docs](http://localhost:7737/docs)。

其它常用命令：

```bash
npm run build    # 生产构建
npm run start    # 启动生产服务（需先 build）
npm run types:check   # MDX 生成 + Next 类型 + tsc
npm run format   # Prettier
```

## 内容在哪儿改


| 路径                                               | 说明                                               |
| ------------------------------------------------ | ------------------------------------------------ |
| `[content/docs/](content/docs/)`                 | 文档正文（MDX），含 `index.mdx` 与各章 `01-*.mdx`～`12*.mdx` |
| `[lib/shared.ts](lib/shared.ts)`                 | 站点名、`/docs` 路由、GitHub 坐标等共享配置                    |
| `[lib/layout.shared.tsx](lib/layout.shared.tsx)` | Fumadocs 导航、Logo 等布局选项                           |
| `[app/(home)/page.tsx](app/(home)`/page.tsx)     | 首页                                               |


MDX 与集合配置见项目根目录的 `source.config.ts`；内容源封装在 `[lib/source.ts](lib/source.ts)`。

## 技术栈

- Next.js、React、TypeScript  
- Tailwind CSS v4、Fumadocs UI / MDX  
- 官方 Python 文档版权归 Python Software Foundation；本站文字为基于教程的整理与扩展，详细规范请以官网为准。

## 延伸阅读

- [Fumadocs 文档](https://fumadocs.dev)  
- [Next.js 文档](https://nextjs.org/docs)  
- [Python 3.12 中文教程](https://docs.python.org/zh-cn/3/tutorial/)  
- [Python 标准库](https://docs.python.org/zh-cn/3/library/index.html)

