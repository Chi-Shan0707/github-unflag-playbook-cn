# 被 Flag 的常见现象

> **注意**：以下分为"高置信现象"（有 GitHub 官方文档支撑）和"社区反复报告现象"（来自大量用户报告但未经官方逐一确认）。请区分对待。

---

## 高置信现象

### 1. 公开主页被隐藏（404）

**表现**：别人访问你的 GitHub 主页时，看到的是 `404: User not found`。

**官方依据**：GitHub 官方文档明确把 "Hiding a user account or organization from public view" 列为一种 moderation action。

> 参考：[GitHub Community Guidelines](https://docs.github.com/articles/github-community-guidelines)

**注意**：你自己登录后访问自己的主页，可能看起来一切正常。这是因为**你看到的是已登录视图，而不是公开视图**。要确认是否被隐藏，需要退出登录或用无痕窗口访问自己的主页。

---

### 2. 账号或内容被限制后需要走 Appeal 流程

**表现**：收到 GitHub 的通知，告知账号被限制，并指引到申诉页面。

**官方依据**：GitHub 官方申诉页明确把"限制账号访问 / 限制可见性"列入适用范围。

> 参考：[GitHub Appeal and Reinstatement](https://docs.github.com/en/site-policy/acceptable-use-policies/github-appeal-and-reinstatement)

---

## 社区反复报告现象

### 3. 自己能登录，但别人看不到 Profile / Contributions

**表现**：
- 你登录后一切正常
- 但你的同事、朋友、或在无痕窗口中，你的主页显示 404
- 你的 contributions 不出现在其他仓库的贡献者列表中

**案例来源**：[community/discussions/112098](https://github.com/orgs/community/discussions/112098)

---

### 4. 第三方应用授权失败

**表现**：尝试授权第三方应用（如 CI/CD 工具、IDE 插件、bot）时，收到错误信息：

```
This account is flagged, and therefore cannot authorize a third party application.
```

**影响范围**：
- CI/CD 流水线可能中断
- GitHub App / OAuth App 无法连接
- CLA 签署流程可能受阻

**案例来源**：[community/discussions/186267](https://github.com/orgs/community/discussions/186267)

---

### 5. GitHub Pages 连带受影响

**表现**：
- 已部署的 GitHub Pages 站点突然无法访问
- 推送新内容后 Pages 不更新
- 自定义域名失效

**案例来源**：[community/discussions/186267](https://github.com/orgs/community/discussions/186267)

---

### 6. 搜索不到

**表现**：
- 在 GitHub 搜索中搜不到自己的用户名
- 搜不到自己的仓库
- Google 等搜索引擎的缓存逐渐过期后，搜索结果消失

---

### 7. 外部登录（Log in with GitHub）失败

**表现**：
- 使用 GitHub 账号登录第三方服务时失败
- 一些依赖 GitHub OAuth 的服务无法使用

---

### 8. 通知 / 邮件中收到警告

**表现**：
- 收到 GitHub 发送的关于账号状态的邮件
- 邮件中可能提到"unusual activity"、"violation of terms"等
- 有时邮件指引你到 Support 页面

---

## 自查清单

如果你怀疑自己被 flag，按以下步骤排查：

- [ ] 退出 GitHub，用无痕窗口访问自己的主页 → 是否 404？
- [ ] 让朋友访问你的主页 → 他们能看到吗？
- [ ] 尝试授权一个第三方应用 → 是否失败并提示 flagged？
- [ ] 在 GitHub 搜索中搜自己的用户名 → 能找到吗？
- [ ] 访问自己的 GitHub Pages → 正常吗？
- [ ] 检查注册邮箱 → 是否有 GitHub 发来的账号状态通知？

如果以上多项异常，你很可能被 flag 了。请查看 [自救流程](04-support-and-appeal-playbook.md)。

---

## 上一篇

[← 什么是 Flag](01-what-is-flag.md)

## 下一篇

[可能原因：官方框架与社区经验 →](03-possible-causes.md)
