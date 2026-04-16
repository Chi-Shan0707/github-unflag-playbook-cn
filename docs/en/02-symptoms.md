# Common Symptoms of Being Flagged

English / [中文](../02-symptoms.md)

> **Note**: The following is divided into "high-confidence symptoms" (supported by official GitHub documentation) and "community-reported symptoms" (reported by many users but not individually confirmed by GitHub). Please treat them accordingly.

> **Important Reminder**: Many people only use GitHub in their regular browser, which stays logged in. After being flagged, **your own logged-in view often appears completely normal** — your profile is visible, your repos are there, your stars are intact. This means you could be flagged for a long time without realizing it, until one day you check your own profile in an incognito window and find it's a 404, or a friend tells you they can't find you. **Do not rely solely on your own browser to determine whether your account is normal.**

---

## High-Confidence Symptoms

### 1. Public Profile Hidden (404)

**Symptom**: When others visit your GitHub profile, they see `404: User not found`.

**Official basis**: GitHub's official documentation explicitly lists "Hiding a user account or organization from public view" as a type of moderation action.

> Reference: [GitHub Community Guidelines](https://docs.github.com/articles/github-community-guidelines)

**Note**: When you log in and visit your own profile, everything may look normal. This is because **you are seeing the logged-in view, not the public view**. To confirm whether you are hidden, you need to log out or visit your profile in an incognito window.

---

### 2. Account or Content Restricted, Requiring Appeal Process

**Symptom**: You receive a notification from GitHub stating your account has been restricted, directing you to the appeal page.

**Official basis**: GitHub's official appeal page explicitly includes "restricting account access / restricting visibility" in its scope.

> Reference: [GitHub Appeal and Reinstatement](https://docs.github.com/en/site-policy/acceptable-use-policies/github-appeal-and-reinstatement)

---

## Community-Reported Symptoms

### 3. You Can Log In, but Others Cannot See Your Profile / Contributions

**Symptom**:
- Everything looks normal when you're logged in
- But for your colleagues, friends, or in an incognito window, your profile shows 404
- Your contributions don't appear in other repositories' contributor lists

**Case source**: [community/discussions/112098](https://github.com/orgs/community/discussions/112098)

---

### 4. Third-Party App Authorization Fails

**Symptom**: When trying to authorize a third-party application (such as CI/CD tools, IDE plugins, or bots), you receive the error:

```
This account is flagged, and therefore cannot authorize a third party application.
```

**Impact**:
- CI/CD pipelines may be interrupted
- GitHub Apps / OAuth Apps cannot connect
- CLA signing processes may be blocked

**Case source**: [community/discussions/186267](https://github.com/orgs/community/discussions/186267)

---

### 5. GitHub Pages Affected

**Symptom**:
- Deployed GitHub Pages sites suddenly become inaccessible
- Pushing new content doesn't update Pages
- Custom domains stop working

**Case source**: [community/discussions/186267](https://github.com/orgs/community/discussions/186267)

---

### 6. Not Searchable

**Symptom**:
- Your username doesn't appear in GitHub search
- Your repositories can't be found
- After Google and other search engines' caches expire, search results disappear

---

### 7. External "Log in with GitHub" Fails

**Symptom**:
- Logging into third-party services with your GitHub account fails
- Some services that rely on GitHub OAuth become unavailable

---

### 8. Stars Not Counted

**Symptom**:
- A project you starred mysteriously loses a star
- You think someone unstarred it, but it turns out **your star wasn't counted**
- You re-star it and the count goes back up, but others can't see your star record

This means that although your star operation appears normal in your own view, it is **invisible to other users** — your presence is being systematically erased.

---

### 9. Disappearing from Organizations

**Symptom**:
- You were previously a member of an Organization
- You suddenly find yourself missing from the Organization's member list
- You can no longer see or access the Organization's repositories
- The Organization's admin confirms they did not manually remove you

You weren't kicked out — your account was hidden, and the Organization system no longer recognizes you as a visible member.

---

### 10. Profile Custom Section Fails to Load

**Symptom**:
- The custom content you set up on your GitHub profile page (github.com/username/username) suddenly doesn't display properly
- That section of the page appears blank or shows a loading error
- Re-editing and saving doesn't fix it

The custom profile data may still exist, but because your account's visibility is restricted, the public API that renders this data is also affected.

---

### 11. Warnings in Notifications / Email

**Symptom**:
- You receive an email from GitHub about your account status
- The email may mention "unusual activity," "violation of terms," etc.
- Sometimes the email directs you to the Support page

---

## Self-Check Checklist

If you suspect you've been flagged, work through these steps:

- [ ] Log out of GitHub, visit your own profile in an incognito window → Is it 404?
- [ ] Ask a friend to visit your profile → Can they see it?
- [ ] Try authorizing a third-party app → Does it fail with a flagged message?
- [ ] Search for your username on GitHub → Can you find it?
- [ ] Visit your GitHub Pages → Is it normal?
- [ ] Check projects you've starred → Is the star count lower? Is the missing one yours?
- [ ] Check your Organization membership → Are you still on the member list?
- [ ] Visit your profile page → Does the custom section display normally?
- [ ] Check your registered email → Did GitHub send any account status notifications?

If multiple items above are abnormal, you are likely flagged. See the [Recovery Playbook](04-support-and-appeal-playbook.md).

---

## Previous

[← What Is a Flag](01-what-is-flag.md)

## Next

[Possible Causes: Official Framework & Community Experience →](03-possible-causes.md)
