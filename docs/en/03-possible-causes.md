# Possible Causes: Official Framework & Community Experience

English / [中文](../03-possible-causes.md)

> **Important Disclaimer**: GitHub has not publicly disclosed the "exact trigger thresholds for being flagged." The following is divided into "official level" and "community level." Please strictly distinguish between them.

---

## Official Level: GitHub's Publicly Stated Policy Framework

GitHub explicitly states that it takes enforcement action against content or behavior that violates the [Acceptable Use Policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-appeal-and-reinstatement), including:

- Restricting visibility
- Restricting access
- Suspending accounts
- Removing content

However, GitHub has **not** publicly disclosed specific trigger conditions, thresholds, or details of its detection algorithms.

---

## Community Level: Recurring Trigger Scenarios

> **Note**: The following is based on community experience and case studies — **these are not trigger conditions officially confirmed by GitHub**. Do not treat any single case as a definitive rule.

### 1. High-Frequency CLI / API / Automated Operations

**Description**: High-frequency operations via GitHub CLI, API, or automation tools are flagged by the risk-control system as abnormal behavior.

**Community cases**:
- Chinese developers have specifically suspected that rapid GitHub CLI / API calls triggered anti-abuse measures
- Community responses identify high-frequency GitHub CLI/API activity as a common false-positive scenario

> Reference: [community/discussions/188420](https://github.com/orgs/community/discussions/188420)

**Common scenarios**:
- CI/CD pipelines frequently triggering API calls
- Using automation scripts to batch-manage repositories / issues / PRs
- AI coding tools (such as Copilot CLI, AI agents) making high-frequency GitHub API calls
- Abnormally active bot accounts

---

### 2. Abnormal Activity After Account Compromise

**Description**: After an account is compromised, attackers use it to create suspicious repositories, push illegal content, or发起 abnormal activity, causing the account to be flagged.

**Community cases**:
- Users have reported that after their accounts were compromised, large numbers of suspicious repositories were created, and their accounts were subsequently flagged
- Even after successfully recovering the account, the flag status may persist

> Reference: [community/discussions/112098](https://github.com/orgs/community/discussions/112098)

---

### 3. Identified as Spam / Suspicious Activity

**Description**: The account's behavior pattern is determined by the system to be similar to spam or suspicious activity.

**Common scenarios**:
- Creating a large number of repositories or forks in a short period
- Sending large numbers of issues / PRs / comments
- Account behavior pattern similar to profiles flagged as spam
- New accounts with a large amount of activity in a short period

> Reference: [community/discussions/178443](https://github.com/orgs/community/discussions/178443)

---

### 4. Content Violating Community Guidelines

**Description**: Repository or account content is determined to violate GitHub Community Guidelines.

**May involve**:
- Intellectual property infringement
- Distributing malware
- Hate speech or other content violating guidelines
- Content in user profiles being flagged

---

### 5. Association Issues

**Description**: Being impacted due to association with other accounts or organizations.

**Possible scenarios**:
- Fork / collaboration networks of flagged accounts
- Multiple accounts under the same organization
- IP address or device association

---

## False Positives

The community indeed includes many suspected false-positive cases:

- Developers using APIs normally being flagged
- Accounts compromised and recovered but still flagged
- Accounts with no obvious violations suddenly being hidden
- High-activity accounts misidentified as spam

GitHub's risk-control system may produce false positives while reducing malicious behavior. This is why the appeal process is important.

---

## Prevention Recommendations

The following recommendations come from community experience — **they cannot guarantee you won't be flagged**, but may reduce risk:

1. **Avoid high-frequency API calls in a short period**, especially for new accounts
2. **Enable 2FA** to reduce the risk of account compromise
3. **Regularly check** your account's authorized applications and activity logs
4. **Avoid batch operation patterns** — spread them over a longer period
5. **Monitor CI/CD API call frequency** and configure rate limiting appropriately

---

## Previous

[← Common Symptoms of Being Flagged](02-symptoms.md)

## Next

[Recovery Playbook: Support / Appeal / How to Write →](04-support-and-appeal-playbook.md)
