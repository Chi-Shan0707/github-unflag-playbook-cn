# 什么是 Flag

## 定义

在本仓库中，`flagged`（被标记）指一类**账号风控 / 审核状态**：

> 账号本人通常还能登录，但账号可能被限制公开可见性、无法正常被搜索、无法授权第三方应用，或被要求走 support / appeal 流程恢复。

GitHub 官方公开描述的是 **moderation actions**（管理措施）和 **Appeal / Reinstatement**（申诉与恢复）流程，而不是一份单独的"flagged account specification"。

参考：[GitHub Appeal and Reinstatement](https://docs.github.com/en/site-policy/acceptable-use-policies/github-appeal-and-reinstatement)

---

## Flag 与 Suspension 的区别

这两个概念经常被混淆，但它们是不同的：

| | Flag（标记/隐藏） | Suspension（暂停） |
|---|---|---|
| 能否登录 | 通常**可以** | 通常**不可以** |
| 公开可见性 | 可能被隐藏，别人看到 404 | 整个账号不可访问 |
| 仓库 | 可能仍存在但不可见 | 不可访问 |
| 第三方授权 | 经常失败 | 不适用 |
| 恢复路径 | Appeal / Support | Appeal / Support |

**注意**：以上是基于社区案例的归纳，不是 GitHub 官方的分类定义。GitHub 官方使用的是 "moderation actions" 这个笼统术语，涵盖了从限制可见性到暂停账号的多种措施。

---

## GitHub 官方公开的管理措施类型

根据 GitHub 官方文档，以下措施可能作用于账号或内容：

1. **隐藏账号或组织的公开可见性**（Hiding a user account or organization from public view）
2. **限制访问**（Restricting access）
3. **暂停账号**（Suspending accounts）
4. **删除内容**（Removing content）

参考：[GitHub Community Guidelines](https://docs.github.com/articles/github-community-guidelines)

---

## 常见误区

### "被 flag 就是账号被封了"

不一定。很多人被 flag 后仍然可以登录、操作私有仓库。问题主要出在**公开可见性**上。

### "被 flag 说明我做错了什么"

不一定。社区中有大量误触发案例，包括高频 API 调用、账号被盗后异常活动等。详见 [可能原因](03-possible-causes.md)。

### "被 flag 就永远恢复不了"

不是。很多人通过 appeal 流程成功恢复了账号，但耗时从几天到数月不等。

---

## 下一篇

[被 flag 的常见现象 →](02-symptoms.md)
