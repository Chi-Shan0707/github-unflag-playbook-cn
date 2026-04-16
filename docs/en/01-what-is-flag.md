# What Is a Flag

English / [中文](../01-what-is-flag.md)

---

## Definition

In this repository, `flagged` refers to a type of **account risk-control / moderation status**:

> The account holder can typically still log in, but the account may have its public visibility restricted, may not appear in search results, may be unable to authorize third-party applications, or may be required to go through a support / appeal process for reinstatement.

GitHub officially describes this using the terms **moderation actions** and **Appeal / Reinstatement**, rather than a dedicated "flagged account specification."

Reference: [GitHub Appeal and Reinstatement](https://docs.github.com/en/site-policy/acceptable-use-policies/github-appeal-and-reinstatement)

---

## Flag vs. Suspension

These two concepts are often confused, but they are different:

| | Flag (Marked/Hidden) | Suspension |
|---|---|---|
| Can log in | Usually **yes** | Usually **no** |
| Public visibility | May be hidden; others see 404 | Entire account inaccessible |
| Repositories | May still exist but are invisible | Inaccessible |
| Third-party authorization | Frequently fails | N/A |
| Recovery path | Appeal / Support | Appeal / Support |

**Note**: The above is based on community case studies, not GitHub's official classification. GitHub uses the umbrella term "moderation actions," which covers a range of measures from restricting visibility to suspending accounts.

---

## GitHub's Official Moderation Action Types

According to GitHub's official documentation, the following actions may be applied to accounts or content:

1. **Hiding a user account or organization from public view**
2. **Restricting access**
3. **Suspending accounts**
4. **Removing content**

Reference: [GitHub Community Guidelines](https://docs.github.com/articles/github-community-guidelines)

---

## Common Misconceptions

### "Being flagged means my account is banned"

Not necessarily. Many people who are flagged can still log in and operate on private repositories. The issue primarily affects **public visibility**.

### "Being flagged means I did something wrong"

Not necessarily. The community includes many false-positive cases, including high-frequency API calls, abnormal activity after account compromise, etc. See [Possible Causes](03-possible-causes.md).

### "Being flagged means I can never recover"

No. Many people have successfully recovered their accounts through the appeal process, though recovery times range from days to months.

---

## Next

[Common Symptoms of Being Flagged →](02-symptoms.md)
