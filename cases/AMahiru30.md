---
title: 案例：AMahiru30
---

# 案例：AMahiru30

## 基本信息

- **GitHub 用户名**：AMahiru30
- **地区/国家**：未提供
- **发现被 flag 的时间**：2026 年 9 月（具体处置时间未知）
- **提交案例的时间**：2026 年 9 月 26 日（Issue [#6](https://github.com/Chi-Shan0707/github-unflag-playbook-cn/issues/6)）

---

## 症状

- [ ] 主页 404（别人看不到）
- [ ] Contributions 消失
- [ ] 第三方授权失败（提示 flagged）
- [ ] GitHub Pages 不可访问
- [ ] 搜索不到
- [ ] 外部登录（Log in with GitHub）失败
- [ ] 收到 GitHub 警告邮件
- [X] 其他：账号被 suspended，`git push` 被拒绝并返回 403

**详细描述**：

本案例的症状不是"公开可见性消失"，而是**写入被拒绝**。当事人可以正常登录，主页与公开仓库仍能被搜索和查看，但任何推送操作都会失败：

```text
remote: Your account is suspended. Please visit https://support.github.com for more information.
fatal: unable to access 'https://github.com/AMahiru30/ANeko-Home.git/': The requested URL returned error: 403
```

> **收录时核对（2026-09-26）**：经 GitHub API 确认，`AMahiru30` 账号与其公开仓库在收录时仍处于可公开访问状态；这一点来自当事人自述与收录时的核对，GitHub 官方文档并未说明"suspended 后主页仍公开"这一行为。推送时出现的提示对应 GitHub 官方列举的处置方式之一——[Suspending a user account or organization](https://docs.github.com/en/site-policy/github-terms/github-community-guidelines)，属于 moderation actions（管理措施），而不是"隐藏账号/组织"。官方术语对照见[什么是 Flag]({{ '/docs/01-what-is-flag/' | relative_url }})。

---

## 自身情况

**你能正常登录吗？** 能，可以正常登录并浏览自己的主页。

**你注册了多长时间？** 未提供。

**你的主要用途？**（如：开源贡献、工作项目、学习、CI/CD 等）未提供。

**你是否开启了 2FA？** 未提供。

---

## 可能的触发原因

> 你自己猜测的原因，不一定是真正的触发因素。

**你觉得最可能的原因是什么？**

Issue 表单未收集该项，当事人未填写推测。GitHub 官方从不公开具体判定标准，常见触发方向可参考[可能原因]({{ '/docs/03-possible-causes/' | relative_url }})。

**在被 flag 之前，你最近做了什么？**

Issue 表单未收集该项，当事人未填写。

- [ ] 高频 API / CLI 调用
- [ ] 使用 AI 编程工具 / Agent
- [ ] 账号可能被盗
- [ ] 批量操作（大量 fork / 创建仓库等）
- [ ] 其他：

---

## 申诉过程

**你是否尝试了 Appeal？**

是，通过 help.github.com 提交工单。

**申诉时间线**：

- 2026 年 9 月：发现账号无法推送，推送时返回 suspended 提示与 403
- 2026 年 9 月 26 日：提交本案例 Issue（#6）
- 工单的提交与回复时间当事人未记录

**是否遇到 SMS 验证障碍？**

否。当事人明确说明本次提交工单**未触发手机号 / SMS 验证要求**。

**Support 是否回复？**

截至记录时尚未收到回复。

> **与其他案例的差异点**：同期本站收录的其他案例（如 [anonymous99-Rise]({{ '/cases/anonymous99-rise/' | relative_url }})、[FurYuenji]({{ '/cases/FurYuenji/' | relative_url }})）都遇到了 +86 短信验证障碍，而本案当事人无需手机号即可提交工单。这说明"中国大陆 +86 号码必然被 SMS 验证拦截"并不成立，是否触发验证仍取决于 GitHub 侧对具体账号的风控判断，详见[中国大陆常见障碍：SMS 验证]({{ '/docs/05-china-mainland-sms-problem/' | relative_url }})。

---

## 恢复情况

**当前状态**：

- [X] 未恢复
- [ ] 恢复中
- [ ] 已恢复

**恢复时间**：（从发现到恢复共多长时间）

尚未恢复。

**恢复后是否一切正常？**

N/A

---

## 你想对其他被 flag 的人说的话

> 这部分是自由的。你可以写建议、鼓励、或任何你想说的。

Issue 表单中当事人未填写。

---

## 证据链接 / 截图

- [GitHub 主页：AMahiru30](https://github.com/AMahiru30/)（收录时经 GitHub API 确认账号仍公开可见）
- [Issue #6：本案例的原始提交](https://github.com/Chi-Shan0707/github-unflag-playbook-cn/issues/6)
- [GitHub Support 账户访问入口](https://support.github.com/contact/account-access)

当事人未提供截图。Issue 描述中出现的推送目标仓库在收录时不公开，因此未作为链接收录。

> **外链安全说明**：以上链接在 2026 年 9 月 26 日收录时经过检查，但第三方页面内容可能变化，请自行判断。

---

## 同意声明

- [X] 我同意将以上信息在本仓库中公开
- [X] 我同意在案例总览表中列出我的基本信息
- [X] 我理解我可以随时要求删除或修改我的案例
