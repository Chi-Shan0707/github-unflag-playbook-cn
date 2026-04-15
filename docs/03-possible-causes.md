# 可能原因：官方框架与社区经验

> **重要声明**：GitHub 官方没有公开"flagged 的精确触发阈值"。下面分为"官方层"和"社区层"两个层面，请严格区分。

---

## 官方层：GitHub 公开说明的政策框架

GitHub 官方明确表示，会对违反 [Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-appeal-and-reinstatement) 的内容或行为采取 enforcement action，包括：

- 限制可见性
- 限制访问
- 暂停账号
- 删除内容

但官方**没有**公开具体的触发条件、阈值、或检测算法细节。

---

## 社区层：反复出现的触发场景

> **注意**：下面列的是社区经验和案例归纳，**不是 GitHub 官方公开确认的精确触发条件**。请不要把任何单一案例当成确定规则。

### 1. 高频 CLI / API / 自动化操作

**描述**：通过 GitHub CLI、API、或自动化工具进行高频操作，被风控系统识别为异常行为。

**社区案例**：
- 有中国开发者明确怀疑 rapid GitHub CLI / API calls 触发了 anti-abuse
- 社区回答把 high-frequency GitHub CLI/API activity 视作常见误触发场景

> 参考：[community/discussions/188420](https://github.com/orgs/community/discussions/188420)

**常见场景**：
- CI/CD 流水线频繁触发 API 调用
- 使用自动化脚本批量管理仓库 / Issue / PR
- AI 编程工具（如 Copilot CLI、AI Agent）高频调用 GitHub API
- bot 账号异常活跃

---

### 2. 账号被盗后异常活动

**描述**：账号被盗后，攻击者利用账号创建可疑仓库、推送非法内容、或发起异常活动，导致账号被 flag。

**社区案例**：
- 有用户报告账号被盗后被创建大量可疑仓库，随后账号被 flag
- 即使成功找回账号，flag 状态可能仍然保留

> 参考：[community/discussions/112098](https://github.com/orgs/community/discussions/112098)

---

### 3. 被识别为 Spam / Suspicious Activity

**描述**：账号行为模式被系统判定为类似垃圾信息或可疑活动。

**常见场景**：
- 短时间内创建大量仓库或 fork
- 大量发送 Issue / PR / 评论
- 账号行为模式与被标记为 spam 的模式相似
- 新账号短期内出现大量活动

> 参考：[community/discussions/178443](https://github.com/orgs/community/discussions/178443)

---

### 4. 内容违反社区准则

**描述**：仓库或账号内容被判定违反 GitHub Community Guidelines。

**可能涉及**：
- 违反知识产权
- 分发恶意软件
- 涉及仇恨言论或其他违反准则的内容
- 用户 profile 中的内容被标记

---

### 5. 关联问题

**描述**：因为其他账号或组织的关联而被连带影响。

**可能场景**：
- 被标记账号的 fork / collaboration 网络
- 同一组织下的多个账号
- IP 地址或设备关联

---

## 误触发（False Positive）

社区中确实存在大量疑似误触发案例：

- 正常使用 API 的开发者被 flag
- 账号被盗后已找回但仍被 flag
- 没有明显违规行为的账号突然被隐藏
- 被误判为 spam 的高活跃度账号

GitHub 的风控系统可能在减少恶意行为的同时，也会产生误判。这就是为什么 Appeal 流程很重要。

---

## 预防建议

以下建议来自社区经验，**不能保证不被 flag**，但可能降低风险：

1. **避免短时间内高频 API 调用**，特别是新账号
2. **启用 2FA**，降低账号被盗风险
3. **定期检查**账号的授权应用和活动日志
4. **避免批量操作模式**，分散在较长时间内
5. **注意 CI/CD 的 API 调用频率**，合理配置 rate limiting

---

## 上一篇

[← 被 Flag 的常见现象](02-symptoms.md)

## 下一篇

[自救流程 →](04-support-and-appeal-playbook.md)
