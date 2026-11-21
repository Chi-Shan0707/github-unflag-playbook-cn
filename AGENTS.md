# Agent Maintenance Guide (`github-unflag-playbook-cn`)

This repository powers a bilingual (**Chinese + English**) GitHub Pages Jekyll site (`https://chi-shan0707.github.io/github-unflag-playbook-cn/`).

## Mandatory Checklist: Adding or Updating a Case

**CRITICAL — DO NOT OMIT ANY VIEW.** Individual case pages are canonical Chinese files under `cases/<username>.md`, but case entry points are duplicated across **both languages**, **both home pages**, **both case libraries**, and **both sidebar navigation sections**. Previously, agents frequently forgot the home pages (`index.md` / `en/index.md`).

Whenever you add a new case (or change a case's recovery status / summary), you **MUST** update **ALL 7 locations across 6 files**:

1. **`cases/<username>.md`** (canonical case page)
   - Must follow the 9-section structure in `cases/template.md`.
   - Must include YAML front matter with `title: 案例：<username>` (required so `_layouts/default.html` and `sitemap.xml` automatically include it in search and sitemap).
   - Use `- [X]` for checked boxes, `YYYY 年 M 月 D 日` for dates, and explicitly mark fields not collected by the Issue form as `Issue 表单未收集，当事人未填写` / `未提供` instead of guessing or fabricating facts.
   - Redact sensitive data (email addresses, ticket numbers, private links).
2. **`index.md`** — **Chinese Home Page** (`<div class="recent-list">`)
   - Add `<a class="recent-row" href="{{ '/cases/<username>/' | relative_url }}">...</a>`.
   - **Never skip this file.**
3. **`en/index.md`** — **English Home Page** (`<div class="recent-list">`)
   - Add `<a class="recent-row" href="{{ '/cases/<username>/' | relative_url }}">...</a>`.
   - **Never skip this file.**
4. **`cases/index.md`** — **Chinese Case Library** (`<div class="case-list">`)
   - Add `<a class="case-row" href="{{ '/cases/<username>/' | relative_url }}">...</a>`.
5. **`en/cases/index.md`** — **English Case Library** (`<div class="case-list">`)
   - Add `<a class="case-row" href="{{ '/cases/<username>/' | relative_url }}">...</a>`.
6. **`_data/nav.yml` → `languages.zh` → `案例` section**
   - Add `- label: <username>` and `url: /cases/<username>/`.
7. **`_data/nav.yml` → `languages.en` → `Cases` section**
   - Add `- label: <username> (中文)` and `url: /cases/<username>/`.

### Status Badge Convention
- Recovered: `<span class="status">已恢复</span>` (zh) / `<span class="status">Recovered</span>` (en)
- Unrecovered: `<span class="status status--pending">未恢复</span>` (zh) / `<span class="status status--pending">Unrecovered</span>` (en)

### Existence Ledger Inclusion Rule
- Only add an entry to `docs/06-existence-ledger.md` and `en/docs/06-existence-ledger.md` when the account's **public presence is currently erased** (profile 404, hidden repos/contributions) and unrecovered, or when explicitly requested via an `[存在档案]` Issue.
- Do **not** add recovered cases or accounts whose profiles remain publicly accessible to the Existence Ledger.

## Pre-Commit Verification

Before committing any case addition, verify all 7 spots are registered and `_data/nav.yml` / `_config.yml` are valid YAML:

```bash
USER="<username>"
grep -rn "/cases/$USER/" index.md en/index.md cases/index.md en/cases/index.md _data/nav.yml
ruby -ryaml -e 'YAML.load_file("_data/nav.yml"); YAML.load_file("_config.yml"); puts "YAML OK"'
```

Expected: `grep` returns **6 lines** (1 in `index.md`, 1 in `en/index.md`, 1 in `cases/index.md`, 1 in `en/cases/index.md`, and 2 in `_data/nav.yml`), plus the file `cases/$USER.md` exists with a `title:` front-matter line.

## Jekyll / GitHub Pages Guardrails

- GitHub Pages runs Jekyll 3.9 with `jekyll-optional-front-matter`. Any repo-only root Markdown file (such as `README.md`, `CONTRIBUTING.md`, `AGENTS.md`) **must** be listed under `exclude:` in `_config.yml`, otherwise it will be published as a site page and enter `sitemap.xml`.

## GitHub Issue Workflow Notes

- If `gh issue view <n>` fails with a deprecated classic Projects (`projectCards`) GraphQL error, use the REST API instead:
  `gh api repos/Chi-Shan0707/github-unflag-playbook-cn/issues/<n>`
- Optionally check account public visibility via `gh api users/<username>` when verifying status.
- After pushing the commit, leave a concise comment on the Issue with the published case URL (`https://chi-shan0707.github.io/github-unflag-playbook-cn/cases/<username>/`) and commit hash, noting that all views (case library, zh/en home pages, zh/en sidebar nav) were updated, and close the Issue.
