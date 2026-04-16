# 自救流程：Support / Appeal

[English](en/04-support-and-appeal-playbook.md) / 中文

---

> 本文档基于 GitHub 官方文档和社区经验整理。不保证适用于所有情况。

---

## 第一步：确认你的状态

在开始申诉之前，先确认你确实被 flag 了：

1. **退出 GitHub**，用无痕窗口访问自己的主页 → 是否 404？
2. **检查邮箱**，看是否有 GitHub 发来的账号状态通知
3. **尝试授权第三方应用**，看是否提示 flagged

如果确认被 flag，继续以下步骤。

---

## 第二步：尝试官方 Appeal 流程

### 入口

GitHub 官方申诉页面：

> https://docs.github.com/en/site-policy/acceptable-use-policies/github-appeal-and-reinstatement

按照页面指引填写申诉表。

### 申诉表填写建议

#### 1. 态度要诚恳、清晰

不要：
- 情绪化、愤怒、威胁
- 夸大或虚构情况
- 指责 GitHub"乱封号"

要：
- 简洁说明你的情况
- 提供事实和时间线
- 表达你愿意配合调查

#### 2. 包含关键信息

申诉内容建议包含：

- **GitHub 用户名**
- **注册邮箱**
- **发现被 flag 的时间**
- **你怀疑的触发原因**（如果有的话）
- **你最近的重要活动**（如正常的 API 使用、CI/CD 配置等）
- **你已经采取的措施**（如修改密码、启用 2FA、检查授权应用）
- **你希望恢复什么**（公开可见性、第三方授权等）

#### 3. 申诉模板（英文）

```
Subject: Appeal for flagged account - [your username]

Dear GitHub Support,

My account (@[username]) appears to have been flagged/hidden.

Timeline:
- [Date]: I first noticed my profile was returning 404
- [Date]: I received [no / an] email notification about my account status

What I believe may have triggered this:
[Briefly describe - e.g., high-frequency API usage for CI/CD, account was previously compromised, etc.]

Actions I have already taken:
- [e.g., Changed password, enabled 2FA, reviewed authorized applications, revoked suspicious access]

My account is used for:
[Briefly describe your legitimate use case - e.g., open source contributions, work projects, personal learning]

I would appreciate it if you could review my account status and restore my public visibility.

Thank you,
[Your name]
[Your username]
[Your registered email]
```

---

## 第三步：通过 Support 联系 GitHub

如果 Appeal 流程没有效果，或者你无法完成 Appeal（比如卡在 SMS 验证），可以尝试直接联系 Support：

> https://support.github.com/contact

### 可能遇到的问题

#### SMS 验证障碍（中国大陆用户）

如果你是中国大陆用户，你可能会卡在 SMS 验证这一步。GitHub 官方的 SMS 支持国家列表中**没有中国大陆（+86）**。

详见 [中国大陆常见障碍：SMS 验证](05-china-mainland-sms-problem.md)

#### 已被 flag 账号无法提交 Support

这是一个恶性循环：被 flag → 无法授权第三方应用 → 可能也无法正常使用某些 Support 渠道。

**可能的解决方案**：
- 使用 Appeal 流程（如果还能访问）
- 换一个未受影响的账号代为联系（说明情况）
- 尝试邮箱直连 Support

---

## 第四步：等待与跟进

### 等待时间

根据社区案例，恢复时间差异很大：

| 情况 | 大约等待时间 |
|------|-------------|
| 误触发，申诉后快速处理 | 几天 |
| 需要人工审核 | 1-4 周 |
| 复杂情况（被盗后恢复等） | 1-3 个月 |
| 极端案例 | 更长 |

> 参考：[ropery/Waiting-for-GitHub-to-Unflag-Me](https://github.com/ropery/Waiting-for-GitHub-to-Unflag-Me) — 等待了约 3 个月

### 跟进建议

- **不要频繁重复提交**同一工单（可能被视为 spam）
- **每隔 3-5 天**可以礼貌地跟进一次
- 每次跟进提供新的有价值信息，而不是重复之前的请求
- 保留所有与 Support 的通信记录

---

## 第五步：恢复后

账号恢复后，建议：

1. **立即启用 2FA**（如果还没有）
2. **审查所有授权应用**，撤销不需要的
3. **检查仓库**是否完整
4. **检查 GitHub Pages** 是否恢复正常
5. **更新邮箱**确保能收到通知
6. 考虑把你的经历分享到本仓库的 [案例库](../cases/index.md)，帮助其他人

---

## 社区经验汇总

> 以下来自社区讨论，不是官方建议。

- 有人通过 Twitter/X @GitHubSupport 加速处理
- 有人报告通过 HackerOne 的 GitHub 项目提交报告也有效果
- 保持礼貌和耐心，比情绪化沟通更有效
- 提供越多的上下文信息，处理越快

---

## 上一篇

[← 可能原因](03-possible-causes.md)

## 下一篇

[中国大陆常见障碍：SMS 验证 →](05-china-mainland-sms-problem.md)
