# 中国大陆常见障碍：SMS 验证

> 这是中国大陆用户在 GitHub 申诉流程中最常遇到的障碍之一。

---

## 问题描述

当你尝试通过 GitHub Support 或 Appeal 流程申诉时，系统可能要求你通过手机短信（SMS）验证身份。但 GitHub 官方的 SMS 认证支持国家列表中，**不包含中国大陆（+86）**。

> 参考：[Countries where SMS authentication is supported](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/countries-where-sms-authentication-is-supported)

这意味着：
- 如果你只有中国大陆手机号，**无法通过 SMS 验证**
- 如果你无法通过 SMS 验证，**可能无法提交 Support 工单**
- 如果你无法提交工单，**你的申诉流程就被卡死了**

---

## 这是一个系统性障碍，不是你的问题

这个问题的本质是：

1. GitHub 的 SMS 支持列表没有覆盖中国大陆
2. 但 GitHub 的风控系统会 flag 中国大陆用户的账号
3. 被 flag 后需要走 Support 流程
4. Support 流程又需要 SMS 验证
5. 而 SMS 验证不支持中国大陆号码

**这就形成了一个死循环。**

---

## 社区案例

多个中国大陆用户在 GitHub Community 中报告了这个问题：

> "Account is flagged, can't contact Support due to SMS verification region block (+86)"
>
> — [community/discussions/186267](https://github.com/orgs/community/discussions/186267)

> "Account flagged - Cannot contact support because SMS verification does not support China (+86)"
>
> — [community/discussions/188420](https://github.com/orgs/community/discussions/188420)

---

## 可能的解决方案

> **注意**：以下方案来自社区经验，不保证有效。

### 方案 1：使用境外手机号

如果你有以下资源：
- 香港手机号（+852）
- 澳门手机号（+853）
- 台湾手机号（+886）
- 其他 SMS 支持列表中的国家/地区的手机号

可以尝试：
1. 在 GitHub 账号设置中添加该号码
2. 用该号码进行 SMS 验证
3. 完成申诉流程

**注意**：GitHub 的 SMS 支持列表会更新，请以官方文档为准。

### 方案 2：使用其他 方式

目前没有


---

## 我们在呼吁什么

我们希望 GitHub 能够：

**将中国大陆（+86）加入 SMS 认证支持列表**


这不是在要求特殊待遇，而是在要求一个公平的申诉机会。

---

## 相关链接

- [GitHub SMS 支持国家列表（官方）](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/countries-where-sms-authentication-is-supported)
- [社区讨论 #186267](https://github.com/orgs/community/discussions/186267)
- [社区讨论 #188420](https://github.com/orgs/community/discussions/188420)

---

## 上一篇

[← 自救流程](04-support-and-appeal-playbook.md)

## 下一篇

[存在档案 →](06-existence-ledger.md)
