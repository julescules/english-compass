# English Compass

English Compass 是一个无需账号、后端或 API Key 的本地英语学习网站，面向实用英语、海外求职、面试、租房、公共服务、远程协作和跨文化沟通。

当前公开版内容包为 **v1.11.0**：

- 4250 条 A1–B2 词汇与实用词组
- 320 节语法微课
- 600 组中译英练习
- 600 段听力材料
- 470 个口语场景
- 240 篇双语阅读与 720 道理解题
- 10 套综合测试，每套 35 题

## 本地运行

需要 Node.js 20 或更高版本：

```powershell
git clone https://github.com/julescules/english-compass.git
Set-Location -LiteralPath '.\english-compass'
node .\server.mjs
```

然后打开 <http://127.0.0.1:4173>。

学习进度保存在当前浏览器的本地存储中。英文朗读使用系统语音；浏览器在线语音识别不可用时，口语页仍可手动输入并获得表达反馈。

## 主要功能

- 六项能力的每日学习路线、掌握度与间隔复习
- 单词语境复习、听写、词义测试和收藏
- 语法微课、翻译、听力、口语和四页式双语阅读
- 跨模块错题本、学习档案导入导出和 14 天学习足迹
- 一屏分页布局、键盘操作、移动端适配、深色模式和减少动画模式
- PWA 应用外壳离线缓存

## 公开版素材说明

源码保留本机完整工作版现有的二次元图片文件名、摆放位置和裁切规则，没有用重新生成的占位插画替换。由于其中一些素材只允许项目内使用、禁止原素材再分发，另一些缺少逐图公开许可，GitHub 仓库不包含这些栅格原图。维护者的 D 盘公开镜像会自动复制现有素材用于本机预览，但 `.gitignore` 会保证它们不进入提交。

从 GitHub clone 的版本仍可运行全部学习功能；需要视觉素材时，可把你拥有再分发权的独立素材包放入相同的 `assets/...` 路径。详情见 [assets/README.md](assets/README.md) 与 [ASSET_POLICY.md](ASSET_POLICY.md)。

## 验证

```powershell
node --check .\app.js
node --check .\content.js
node .\tests\public-smoke.mjs
```

## 许可证

代码、项目自编题库和项目图标采用 [MIT License](LICENSE)。该许可证不追溯覆盖任何未进入本仓库的本地第三方素材。
