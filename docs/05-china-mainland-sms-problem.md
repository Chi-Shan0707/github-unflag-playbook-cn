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

## 解决途径

> **注意**：以下内容来自社区经验，不保证适用于所有情况。

### 借用境外手机号接收验证码

中国大陆手机号（+86）无法用于 SMS 验证，需要准备一个 SMS 支持列表中的境外号码，常见选择包括：

- 香港手机号（+852）
- 澳门手机号（+853）
- 台湾手机号（+886）
- 其他 SMS 支持列表中的国家/地区号码

**这里的 SMS 验证码和你的 2FA（两步验证）是两回事。** 它仅仅是用来在提交工单前完成一次身份验证——收到验证码、输进去、走完流程，仅此而已。它不会替代或绑定你账号现有的 2FA 设置。

因此，你可以找一个已经在 GitHub 上绑定了自己手机号的朋友，借他们的号码来接收这条验证码。根据社区反馈，已绑定 GitHub 账号的手机号仍然可以正常接收用于申诉验证的 SMS 验证码。

> GitHub 的 SMS 支持列表会更新，请以[官方文档](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/countries-where-sms-authentication-is-supported)为准。

### 注意请求频率限制

> **"You've reached your request limit, please try again later."**

这个错误非常容易触发，而且门槛比你想的要低。根据社区反馈，甚至只是登录 support.github.com 后反复点击"新建工单"页面（即使还没有输入手机号），都可能被计入请求次数。

**建议按以下顺序操作，避免浪费机会：**

1. **先搞定手机号**——联系好愿意帮忙的朋友，确认号码可用
2. **再进入 Support 页面**——打开 support.github.com/contact，直接走完验证和工单提交流程
3. **不要反复尝试**——如果某一步卡住了，先停下来思考，不要盲目刷新或重复提交

**如果不慎触发了限制**，只能等待冷却。社区报告的等待时间约为 **24 小时**。与其白白浪费一次机会，不如把准备工作做充分再动手。


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
