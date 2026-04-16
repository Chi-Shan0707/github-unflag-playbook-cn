# Recovery Playbook: Support / Appeal

English / [中文](../04-support-and-appeal-playbook.md)

> This document is based on GitHub's official documentation and community experience. No guarantee of applicability to all situations.

---

## Step 1: Confirm Your Status

Before starting the appeal process, first confirm that you are indeed flagged:

1. **Log out of GitHub**, visit your own profile in an incognito window → Is it 404?
2. **Check your email** for any account status notifications from GitHub
3. **Try authorizing a third-party app** → Does it say flagged?

If confirmed, proceed with the following steps.

---

## Step 2: Try the Official Appeal Process

### Entry Point

GitHub's official appeal page:

> https://docs.github.com/en/site-policy/acceptable-use-policies/github-appeal-and-reinstatement

Follow the instructions on the page to fill out the appeal form.

### Tips for Filling Out the Appeal Form

#### 1. Be Sincere and Clear

Don't:
- Be emotional, angry, or threatening
- Exaggerate or fabricate information
- Accuse GitHub of "randomly banning accounts"

Do:
- Briefly explain your situation
- Provide facts and a timeline
- Express your willingness to cooperate with the investigation

#### 2. Include Key Information

Your appeal should include:

- **GitHub username**
- **Registered email**
- **Date you first noticed being flagged**
- **Your suspected trigger cause** (if any)
- **Your recent significant activity** (such as normal API usage, CI/CD configuration, etc.)
- **Actions you have already taken** (such as changing your password, enabling 2FA, reviewing authorized apps)
- **What you hope to restore** (public visibility, third-party authorization, etc.)

#### 3. Appeal Template (English)

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

## Step 3: Contact GitHub Support

If the appeal process doesn't work, or you can't complete it (e.g., stuck at SMS verification), try contacting Support directly:

> https://support.github.com/contact

### Potential Issues

#### SMS Verification Barrier (Mainland China Users)

If you are a Mainland China user, you may get stuck at the SMS verification step. GitHub's official SMS authentication supported countries list **does not include Mainland China (+86)**.

See [Common Barrier for Mainland China: SMS Verification](../05-china-mainland-sms-problem.md)

#### Flagged Accounts Cannot Submit Support Requests

This is a vicious cycle: flagged → unable to authorize third-party apps → may also be unable to use certain Support channels.

**Possible solutions**:
- Use the appeal process (if you can still access it)
- Have an unaffected account contact Support on your behalf (explain the situation)
- Try reaching Support via email directly

---

## Step 4: Wait and Follow Up

### Wait Times

Based on community cases, recovery times vary significantly:

| Situation | Approximate Wait Time |
|-----------|----------------------|
| False positive, quickly processed after appeal | A few days |
| Requires manual review | 1–4 weeks |
| Complex cases (post-compromise recovery, etc.) | 1–3 months |
| Extreme cases | Longer |

> Reference: [ropery/Waiting-for-GitHub-to-Unflag-Me](https://github.com/ropery/Waiting-for-GitHub-to-Unflag-Me) — waited approximately 3 months

### Follow-up Recommendations

- **Don't repeatedly submit the same ticket** (may be treated as spam)
- **Every 3–5 days**, you can politely follow up once
- Provide new, valuable information with each follow-up rather than repeating previous requests
- Keep records of all communication with Support

---

## Step 5: After Recovery

After your account is restored, we recommend:

1. **Enable 2FA immediately** (if you haven't already)
2. **Review all authorized apps** and revoke any you don't need
3. **Check your repositories** for completeness
4. **Check GitHub Pages** for normal operation
5. **Update your email** to ensure you can receive notifications
6. Consider sharing your experience in this repository's [Case Library](../../cases/index.md) to help others

---

## Community Experience Summary

> The following comes from community discussions, not official advice.

- Some people have accelerated processing by contacting Twitter/X @GitHubSupport
- Some report that submitting a report through HackerOne's GitHub program has also been effective
- Being polite and patient is more effective than emotional communication
- Providing more context information leads to faster resolution

---

## Previous

[← Possible Causes](03-possible-causes.md)

## Next

[Common Barrier for Mainland China: SMS Verification →](05-china-mainland-sms-problem.md)
