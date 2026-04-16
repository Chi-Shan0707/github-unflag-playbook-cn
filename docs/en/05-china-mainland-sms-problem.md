# Common Barrier for Mainland China: SMS Verification

English / [中文](../05-china-mainland-sms-problem.md)

> This is one of the most common barriers encountered by Mainland China users during GitHub's appeal process. If you're reading this in English, chances are you're not a Mainland China user — so you probably won't run into this particular issue yourself. But it's worth understanding why so many people get stuck here.

---

## The Problem

When you try to appeal through GitHub Support or the Appeal process, the system may require you to verify your identity via SMS. However, GitHub's official SMS authentication supported countries list **does not include Mainland China (+86)**.

> Reference: [Countries where SMS authentication is supported](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/countries-where-sms-authentication-is-supported)

This means:
- If you only have a Mainland China phone number, **you cannot pass SMS verification**
- If you cannot pass SMS verification, **you may not be able to submit a Support ticket**
- If you cannot submit a ticket, **your appeal process is stuck**

---

## This Is a Systemic Barrier, Not Your Fault

The essence of this problem is:

1. GitHub's SMS support list doesn't cover Mainland China
2. But GitHub's risk-control system flags Mainland China users' accounts
3. After being flagged, you need to go through the Support process
4. The Support process requires SMS verification
5. But SMS verification doesn't support Mainland China numbers

**This creates a deadlock.**

---

## Community Cases

Multiple Mainland China users have reported this issue on GitHub Community:

> "Account is flagged, can't contact Support due to SMS verification region block (+86)"
>
> — [community/discussions/186267](https://github.com/orgs/community/discussions/186267)

> "Account flagged - Cannot contact support because SMS verification does not support China (+86)"
>
> — [community/discussions/188420](https://github.com/orgs/community/discussions/188420)

---

## Workarounds

> **Note**: The following content comes from community experience. No guarantee of applicability to all situations.

### Borrow an Overseas Phone Number for Verification

Mainland China phone numbers (+86) cannot be used for SMS verification. You need a phone number from a country/region on the SMS support list. Common options include:

- Hong Kong (+852)
- Macau (+853)
- Taiwan (+886)
- Other numbers from countries/regions on the SMS support list

**This SMS verification code is separate from your 2FA (two-factor authentication).** It is simply used to complete a one-time identity verification before submitting a ticket — receive the code, enter it, complete the process, nothing more. It will not replace or bind to your account's existing 2FA settings.

Therefore, you can ask a friend who already has their own phone number linked to GitHub to lend their number for receiving this verification code. According to community feedback, phone numbers already linked to GitHub accounts can still normally receive SMS verification codes used for appeal verification.

> GitHub's SMS support list is updated periodically. Please refer to the [official documentation](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/countries-where-sms-authentication-is-supported) for the latest information.

### Beware of Rate Limits

> **"You've reached your request limit, please try again later."**

This error is very easy to trigger, and the threshold is lower than you might think. According to community feedback, even just logging into support.github.com and repeatedly clicking the "new ticket" page (without even entering a phone number yet) may count toward the request limit.

**Recommended steps to avoid wasting attempts:**

1. **Secure a phone number first** — contact a friend willing to help, confirm the number is available
2. **Then visit the Support page** — open support.github.com/contact and complete the verification and ticket submission process in one go
3. **Don't retry blindly** — if you get stuck at any step, stop and think before refreshing or resubmitting

**If you accidentally trigger the rate limit**, you can only wait for the cooldown. Community reports suggest a wait time of approximately **24 hours**. Rather than wasting an attempt, make sure you're fully prepared before taking action.

---

## What We Are Advocating For

We hope GitHub will:

**Add Mainland China (+86) to the SMS authentication supported countries list**

This is not asking for special treatment — it is asking for a fair opportunity to appeal.

---

## Related Links

- [GitHub SMS supported countries list (Official)](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/countries-where-sms-authentication-is-supported)
- [Community discussion #186267](https://github.com/orgs/community/discussions/186267)
- [Community discussion #188420](https://github.com/orgs/community/discussions/188420)

---

## Previous

[← Recovery Playbook](04-support-and-appeal-playbook.md)

## Next

[Existence Ledger →](06-existence-ledger.md)
