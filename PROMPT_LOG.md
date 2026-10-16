# OpenRaiz 2.0 — Prompt Log

## Milestone 1, Step 0 — Project background and planning only

- **Date:** 2026-10-15
- **Objective:** Give the coding agent the project background, rules, and milestones, and get an architectural plan (no code, files, or commands).

### Exact prompt
```
I'm beginning a new project called OpenRaiz 2.0 as part of my Next Chapter AI Engineering Week 5 assignment.
I want you to serve as my coding agent in VS Code. We'll build this application incrementally, using small, individually testable changes.
PROJECT BACKGROUND
OpenRaiz is an opportunity platform designed to connect young people, particularly system-impacted emerging leaders, with jobs, internships, fellowships, volunteer opportunities, and professional development resources.
The long-term platform will serve three groups:
1. Young people looking for employment and professional development opportunities.
2. Organizations, employers, nonprofits, government agencies, and philanthropy posting opportunities.
3. Workforce-development partners helping young people access career pathways.
Eventually, OpenRaiz will support organizational profiles, user accounts, verified employers, and opportunity submission workflows.
Our future approval system will allow trusted, verified organizations to publish directly, while new or unverified organizations will require administrative approval.
For now, all opportunities will be managed manually by an administrator.
EXISTING OPENRAIZ PROJECT
I already have an existing OpenRaiz website built using HTML, CSS, and JavaScript, with opportunity listings stored in a JSON file.
OpenRaiz 2.0 will eventually replace that website.
However, we will build OpenRaiz 2.0 in a completely separate project folder and GitHub repository to protect the original website.
The original repository may be used as a read-only reference for its design, logo, color scheme, typography, and opportunity data structure.
Do not modify the original OpenRaiz project.
WEEK 5 ASSIGNMENT
My goal is to build a functioning full-stack CRUD application.
The application must allow me to:
- Create: Add a new opportunity.
- Read: Display opportunities stored in the database.
- Update: Edit an existing opportunity.
- Delete: Remove an opportunity.
Opportunities must remain saved after refreshing the browser.
I also want to implement basic search and category filtering after CRUD is functioning.
This must be a real database-backed application, not an interface that only stores information in browser state or local storage.
REQUIRED TECHNOLOGY STACK
Use the technologies covered in my Next Chapter course:
- Next.js with the App Router
- React
- JavaScript or TypeScript, following the simplest maintainable approach recommended by Next.js
- CSS for styling
- Next.js Route Handlers for the API layer
- Prisma ORM
- Neon PostgreSQL
- Git and GitHub
Do not introduce additional frameworks, databases, authentication providers, or unnecessary dependencies without explaining why they're needed and asking for approval.
API ARCHITECTURE
OpenRaiz 2.0 should have an API layer built using Next.js Route Handlers.
We will eventually implement:
- GET /api/opportunities — Retrieve opportunities.
- GET /api/opportunities/[id] — Retrieve one opportunity.
- POST /api/opportunities — Create an opportunity.
- PATCH /api/opportunities/[id] — Update an opportunity.
- DELETE /api/opportunities/[id] — Remove an opportunity.
The frontend will interact with these endpoints, which will communicate with PostgreSQL through Prisma.
All database access, data validation, and future authorization checks should occur on the server.
For the Week 5 local demo, we will not build authentication. Do not publicly deploy unrestricted administrative write endpoints.
We will implement and test API functionality one endpoint at a time.
OPPORTUNITY DATA MODEL
Preserve the existing OpenRaiz opportunity data structure as closely as practical.
The application should eventually support information such as:
- Unique opportunity ID
- Title
- Organization
- Opportunity type (job, internship, fellowship, volunteer)
- Description
- Location and work arrangement
- Compensation
- Application deadline
- Application link
- Lived-experience relevance
- Status
- Creation date
If you can access the original OpenRaiz repository, inspect its existing data/opportunities.json file and identify the actual fields and data types before proposing the final Prisma schema.
Do not invent or silently discard existing fields.
For now, we only need one main database model: Opportunity.
We will introduce organizational profiles, user accounts, and relationships between tables in future development phases.
BRANDING AND DESIGN
OpenRaiz 2.0 should preserve the original OpenRaiz visual identity.
That includes:
- Original logo
- Original color palette
- Existing typography where practical
- General visual style
- Opportunity listing design
We will eventually rebuild the public website using React and Next.js.
However, we should prioritize database functionality and CRUD before recreating the entire original interface.
Use the existing branding where practical, but keep the initial design simple.
DEVELOPMENT PROCESS — VERY IMPORTANT
I'm a beginner learning full-stack development.
I do not want you to build the entire application at once.
We will work through very small development steps.
Our process will be:
Plan → Implement → Review → Test → Document → Commit
Follow these rules:
1. Work on only one clearly defined task at a time.
2. Before implementing a task, explain what you're going to do.
3. Do not make unrelated changes.
4. Show me the files you created or modified.
5. Explain whether the changes affect the frontend, backend, API, or database.
6. Explain important code in plain English.
7. Provide specific instructions to test each change.
8. Allow me to verify that the feature works before moving forward.
9. Do not automatically commit or push changes to GitHub without my approval.
10. Never modify the original OpenRaiz repository.
Do not skip steps or implement additional features without authorization.
PROMPT LOG AND DOCUMENTATION
My Next Chapter course requires me to maintain a prompt log demonstrating how I direct my coding agent.
We will create a PROMPT_LOG.md file in the new repository.
Each development step should document:
- Date
- Milestone and step number
- Objective
- Exact prompt I provided
- Files created or modified
- What the code does
- How I tested the feature
- Results of testing
- Errors or mistakes identified
- Corrections made
- Git commit message and commit reference
The log must accurately reflect what happened. Do not fabricate successful tests or mistakes.
I also need to demonstrate that I reviewed the code changes and understood how the frontend, backend, API, Prisma, and database communicate.
DEVELOPMENT MILESTONES
We will proceed through these milestones:
Milestone 1 — Project Setup
- Establish separate project folder.
- Initialize Next.js.
- Set up Git and GitHub.
- Establish the basic project structure.
- Preserve original OpenRaiz branding.
Milestone 2 — Database
- Create Neon PostgreSQL database.
- Configure Prisma.
- Define Opportunity model.
- Run database migration.
- Verify database connection.
Milestone 3 — API
- Implement and test GET endpoint.
- Implement and test POST endpoint.
Milestone 4 — Frontend
- Build opportunity form.
- Build opportunity cards.
- Display saved opportunities.
- Verify database persistence after refreshing.
Milestone 5 — Full CRUD
- Implement PATCH endpoint and editing interface.
- Implement DELETE endpoint and delete controls.
Milestone 6 — Additional Functionality
- Add search by opportunity title or organization.
- Add category filtering.
- Refine styling using existing OpenRaiz branding.
Milestone 7 — Demo Preparation
- Verify all CRUD operations.
- Verify persistence.
- Confirm database secrets are excluded from Git.
- Review prompt log and GitHub commits.
- Prepare a simple explanation of the application's data flow.
We will prioritize a working, explainable application over unnecessary complexity.
SECURITY REQUIREMENTS
- Store the database connection string in an appropriate environment variable.
- Ensure environment files containing secrets are ignored by Git.
- Never expose database credentials in browser code.
- Do not include credentials or other secrets in the prompt log.
- Never commit credentials to GitHub.
- Do not deploy administrative endpoints publicly without authentication and authorization.
YOUR FIRST TASK — PLANNING ONLY
Before creating or modifying any files:
1. Review the proposed technology stack.
2. Explain the recommended folder structure for OpenRaiz 2.0.
3. Identify where React components, Next.js API routes, Prisma files, and database configuration will live.
4. Explain the steps required to initialize the Next.js project.
5. Identify potential technical challenges or unnecessary complexity in the proposed plan.
6. Recommend the smallest possible first implementation step.
7. Explain how we will verify that the first step was completed successfully.
Do not write code, create files, install packages, run commands, or initialize the project yet.
Wait for my approval before beginning implementation.
```

### Result
The agent (read-only) inspected the original `openraiz` repo's `data/opportunities.json` and CSS, then produced a planning document covering stack, folder structure, init steps, challenges, first step, and verification. No files in the project were created in this step. The user reviewed and approved the plan with decisions listed in Step 1's prompt.

### Errors / mistakes identified
None recorded for this step.

### Git
n/a — no repository yet.

---

## Milestone 1, Step 1 — Initialize the Next.js project

- **Date:** 2026-10-15
- **Objective:** Create the new Next.js app (JavaScript, App Router, plain CSS, no Tailwind) at `Week5-Practice/openraiz-2`, verify it starts, and leave the original OpenRaiz repo untouched.

### Exact prompt
This prompt was sent after I interrupted the agent's first attempt to run `create-next-app` (the user rejected that command and wrote "wait, I have a revised prompt for you."). Nothing was created by that first attempt.
```
wait, I have a revised prompt for you.

I've reviewed and approved your architectural plan for OpenRaiz 2.0, with the following decisions:
- Use JavaScript rather than TypeScript.
- Use Next.js with the App Router.
- Use plain CSS without Tailwind.
- Create the project at Week5-Practice/openraiz-2.
- Use openraiz-2 as the future GitHub repository name.
- Preserve the existing OpenRaiz repository without modifying it.
Your task is limited to initializing the new Next.js project.
Please:
1. Confirm the exact directory where the project will be created.
2. Initialize a new Next.js application using the agreed configuration.
3. Verify that the application starts successfully.
4. Confirm the localhost address where I can view it.
5. Explain the main files and folders created in plain English.
6. Confirm that no changes were made to my existing OpenRaiz repository.
Do not install Prisma, connect a database, build components, copy branding assets, or implement API routes yet.
Prompt log requirements
Once the application is running, help me create PROMPT_LOG.md documenting this first implementation step.
Include the exact prompt, files created, commands executed, and verification results.
Do not report the browser test as successful until I personally confirm that I can see the application.
Git requirements
Do not create a GitHub repository, commit changes, or push code yet.
After completing the setup, stop and wait for my confirmation.
I want to review the results before moving to the next step.
```

### Follow-up prompts in this step (about the prompt log itself)
After the agent created the first version of `PROMPT_LOG.md` (which only contained the revised prompt), the user sent these two prompts, each exactly as written:

1. ```
   but include the first prompt that gave you background.
   ```
   → Agent added the "Step 0" section above with the full background/planning prompt.
2. ```
   include all prompts ive shared with you.
   ```
   → Agent added the interruption lead-in, these follow-up prompts, and this list. `PROMPT_LOG.md` is the only file edited by these two prompts.

**Mistake identified (agent):** the first version of the log omitted the background prompt and the user's other messages, so it did not show everything the user directed. The agent also added a needless "transcription note" about the DELETE line in the Step 0 prompt, which was incorrect to include and was removed.

### Commands executed
1. `git status --short`, `git rev-parse HEAD` in the original `openraiz` repo — baseline (clean, commit `0113d35`).
2. `npx create-next-app@latest openraiz-2 --js --eslint --no-tailwind --app --no-src-dir --import-alias "@/*" --use-npm --disable-git` (run in `Week5-Practice`)
3. `npm audit` — inspect warnings reported during install.
4. `npm run dev` — start the dev server; `curl http://localhost:3000` to check the response.
5. Re-ran the git status / commit check on the original `openraiz` repo.

### Files created (all by create-next-app, none hand-written)
`app/layout.js`, `app/page.js`, `app/page.module.css`, `app/globals.css`, `app/favicon.ico`, `public/*.svg` (5 default icons), `package.json`, `package-lock.json`, `next.config.mjs`, `jsconfig.json`, `eslint.config.mjs`, `.gitignore`, `README.md`, `AGENTS.md`, plus `node_modules/` and `.next/` (generated, git-ignored).
This step only affects the **frontend/tooling**. No API, Prisma, or database exists yet.

### What the code does
Nothing custom yet. The default Next.js starter page is served at `/` from `app/page.js`, wrapped by `app/layout.js`.

### Verification
- **Automated (by Claude):** dev server started ("Ready in 298ms", Next.js 16.4.1, Turbopack); `curl http://localhost:3000` returned HTTP 200 with page title "Create Next App". `package.json` dependencies are only `next`, `react`, `react-dom` (dev: `eslint`, `eslint-config-next`). `.gitignore` contains `.env*`. Original `openraiz` repo: 0 changed files, still at commit `0113d35`, file timestamps unchanged.
- **Browser test (by user):** ✅ The user confirmed they can see the Next.js starter page at http://localhost:3000 (2026-10-15). The user also reviewed this prompt log and approved it.
- **Follow-up prompt:** `page is visible, and the prompt log looks good.` → Agent recorded the browser result above.

### Errors / mistakes identified
- My first `create-next-app` command was rejected by the user before running, because they wanted to send a revised prompt. Nothing was created from it.
- `npm audit` reports 5 high-severity issues in dev tooling (`braces` → `eslint-config-next` chain). They're not in runtime dependencies. The suggested `--force` fix would downgrade `eslint-config-next` to v14, so it was **not** applied.
- `create-next-app` also created `AGENTS.md`, which wasn't requested. It's an auto-generated notes file for AI coding agents.

### Corrections made
None needed beyond not applying the forced audit fix.

### Git
- No git repository initialized (`--disable-git`), no GitHub repo, no commit, no push — per instructions.
- **Commit message / reference:** n/a yet.

---

## Milestone 1, Step 2 — Git setup and first commit

- **Date:** 2026-10-15
- **Objective:** Initialize a local git repo, connect the user's GitHub repo `openraiz-2` as `origin`, verify what would be committed, then make the first commit and push to `main` after the user's approval.

### Exact prompts
1. ```
   I will create the repo myself and give you the link to connect.
   ```
   → Agent explained how to create an empty repo (no README/.gitignore/license) and what it would do once given the link.
2. ```
   Here is the link: https://github.com/hcarvente/openraiz-2.git
   ```
   → Agent ran `git init -b main` and `git remote add origin <link>`, then showed `git status` and proposed a commit message. Nothing was staged, committed or pushed.
3. ```
   I approve creating our first commit and pushing it to the main branch, with a few requirements.
   Before committing:
   1. Confirm that the application runs successfully using npm run dev.
   2. Verify that the project files and folders have the expected names.
   3. Confirm that our development documentation file is named PROMPT_LOG.md, not AGELOG.md. If necessary, rename it.
   4. Update PROMPT_LOG.md to document our project initialization and Git setup. Include the exact prompts I've provided, the work completed, verification results, and any corrections made. Do not invent results or claim I performed tests I haven't confirmed.
   5. Run git status and verify that no environment files, credentials, or generated folders are included.
   6. Show me the final staged file list before committing.
   Once everything is verified, pause and ask me for final approval before creating the commit.
   Use this commit message:
   Initialize OpenRaiz 2.0 Next.js application
   After I approve, commit the changes and push them to origin/main.
   Once the push is complete, provide the commit hash and confirm that the files are visible on GitHub.
   Do not begin implementing Prisma, the database, API routes, or opportunity components yet.
   ```

### Commands executed
- `git init -b main`
- `git remote add origin https://github.com/hcarvente/openraiz-2.git`
- `git status --short -uall`, `git check-ignore -v node_modules .next .env.local`
- `npm run dev` (restarted fresh), `curl http://localhost:3000`, then stopped the server
- `ls -A`, `git status --short --ignored`
- `git add -A` (staging only), `git diff --cached --name-only`

### Files created or modified
- `.git/` created (local repo, remote `origin` set).
- `PROMPT_LOG.md` updated with this step.
- No application code changed.
This step affects only version control. No frontend, backend, API or database changes.

### Verification (by Claude, in the terminal)
- `npm run dev` started ("Ready in 284ms") and `curl http://localhost:3000` returned HTTP 200.
- Expected names present: `app/`, `public/`, `package.json`, `package-lock.json`, `next.config.mjs`, `jsconfig.json`, `eslint.config.mjs`, `.gitignore`, `README.md`, `AGENTS.md`, `PROMPT_LOG.md`.
- The documentation file is already named `PROMPT_LOG.md`. No `AGELOG.md` exists, so no rename was needed.
- `git status`: 19 untracked project files before this log entry. No `.env*` file exists. `node_modules/`, `.next/` and `.DS_Store` appear only as ignored (`!!`), so they are not committed.
- User-confirmed tests: none new in this step. The only user-confirmed test remains the browser check in Step 1.

### Errors / mistakes identified
- None found. (The prompt mentioned an `AGELOG.md`; no such file was ever created.)

### Corrections made
None.

### Git
- **Commit message:** `Initialize OpenRaiz 2.0 Next.js application`
- **Commit reference:** `be7a8f60c943954d1f1e33deb89b44a277e0df96` (short `be7a8f6`), 19 files, committed without a Co-Authored-By trailer at the user's request.
- **Push to `origin/main`:** done. `git ls-remote origin main` returned the same hash and the remote tree lists 19 files. Seeing the files on github.com: ⬜ PENDING user confirmation.
- **Follow-up prompts:** `Leave out the trailer and yes committhe 19 files and push to origin.` (also asked why localhost stopped rendering: the agent had stopped the dev server with `pkill` after its pre-commit check; restart with `npm run dev`), then `Update the log and commit it.`
- **Second commit:** `Record first commit in prompt log` (this log update; its hash is visible in `git log`).

---

## Milestone 1, Step 3 — Preserve original branding (logo-only header)

- **Date:** 2026-10-15
- **Objective:** Bring the original OpenRaiz visual identity (sprout logo, color palette, `system-ui` fonts, favicon) into the new app with a simple logo-only header. No nav links, About photo, footer, or opportunity cards.

### Exact prompts
1. ```
   Move on to that
   ```
   → "That" referred to the agent's proposed next step (copy branding assets, set colors). The agent first read the original repo (read-only) and proposed a plan, and asked two questions: the "OpenRaíz" vs "OpenRaiz" spelling, and whether to include nav pills.
2. ```
   Use OpenRaiz, logo-only header, go ahead
   ```
3. ```
   1'/Users/hernancarvente/Desktop/Screenshot 2026-10-15 at 2.47.20 PM (3).png'Here is a screenshot
   ```
   → User shared a screenshot of http://localhost:3000 in their browser.

### Commands executed
- Read-only inspection of the original repo: `grep` of `index.html`, `ls assets`, reading `css/styles.css`, `assets/favicon.svg`.
- `cp` of `favicon.svg`, `favicon-32.png`, `favicon-180.png`, `og-image.png` from the original `assets/` into `public/` (copy only; original untouched).
- `rm app/page.module.css app/favicon.ico`
- `npm run lint`, `npm run build`, `npm run dev`, `curl` of `/`, `/favicon.svg`, `/favicon-32.png`, `/favicon-180.png`
- `git status` in the original repo (read-only check).

### Files created or modified (frontend only — no API, Prisma, or database)
- **Created:** `public/favicon.svg`, `public/favicon-32.png`, `public/favicon-180.png`, `public/og-image.png` (copied), `components/SiteHeader.js`.
- **Modified:** `app/globals.css` (OpenRaiz color variables, fonts, header/logo styles), `app/layout.js` (removed Geist fonts; title "OpenRaiz"; favicon links), `app/page.js` (header plus placeholder "Opportunities" heading).
- **Deleted:** `app/favicon.ico` (default Next.js icon, would override ours), `app/page.module.css` (unused starter CSS).
- Not changed: the 5 unused starter SVGs in `public/` (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`), `AGENTS.md`.

### What the code does
- `app/layout.js` wraps every page and sets the tab title and icons.
- `components/SiteHeader.js` is a React component rendering the original sprout SVG (uses `currentColor`, colored green by CSS) plus the wordmark "OpenRaiz", linking to `/` via `next/link`.
- `app/page.js` renders the header and a placeholder "Opportunities" heading.
- `app/globals.css` defines the brand colors as CSS variables (`--color-bg`, `--color-primary`, etc.) for reuse by later components.
- Note: the original CSS labels these colors "PLACEHOLDER brand variables", so they may change later.

### How the user tested
Opened http://localhost:3000 in Chrome and shared a screenshot.

### Results of testing
- **Agent (terminal):** `npm run lint` passes (after the fix below), `npm run build` compiles, the dev-server HTML contains the title "OpenRaiz", the favicon links, the wordmark and the heading, and the three favicon URLs return HTTP 200. Original repo: 0 changed files, still at commit `0113d35`.
- **User (screenshot):** The screenshot shows the cream background, the centered green sprout logo with "OpenRaiz", a green "Opportunities" heading with grey placeholder text, and a browser tab titled "OpenRaiz" with the green sprout icon. The user did not separately state pass/fail beyond sharing the screenshot.

### Errors or mistakes identified
- The agent's first `SiteHeader.js` used a plain `<a href="/">`; `npm run lint` flagged `@next/next/no-html-link-for-pages` (Next.js wants `<Link>` for internal links).
- The editor then briefly showed "Expected corresponding JSX closing tag for 'Link'". That was stale: it appeared between the agent's two edits (opening tag changed first, closing tag second). The final file has matching tags and lint and build pass.
- The screenshot filename contains a special space character before "PM", so the first attempt to open it failed; the agent located and copied it using a wildcard.

### Corrections made
- Replaced `<a>` with `<Link>` (import from `next/link`) in `components/SiteHeader.js`.

### Git
- **Commit message:** `Add OpenRaiz branding and logo-only header` (no Co-Authored-By trailer)
- **Commit reference:** `12d30923417c7f9c60bda591a9a9b9592f7256b6` (short `12d3092`), 11 files changed; pushed to `origin/main`. `git ls-remote origin main` returned the same hash.
- **Follow-up prompts:** `Yes, commit and push it` (approval of the message above), then `Yes, update the log and commit it`.
- **Second commit:** `Record branding commit in prompt log` (this log update; its hash is visible in `git log`).

---

## Milestone 2, Step 2.0 — Database plan (planning only)

- **Date:** 2026-10-15
- **Objective:** Plan Milestone 2 (Neon + Prisma) before touching anything. No files, packages or commands changed the project.

### Exact prompts
1. ```
   Yes, write the Milestone 2 plan
   ```
   → The agent checked current Prisma/Neon docs (read-only) and wrote the plan in chat.

### Result
Key findings, which led to the decisions in the next step:
- `npm install prisma` would install **8.0.0-rc.23**, a release candidate with a different workflow (`contract.prisma`, `db:init`, no `migrate dev`). Prisma 7.10.0 is the latest stable release and is still fully supported.
- Prisma 7 needs a driver adapter and a `prisma.config.ts`.
- Neon provides a pooled connection string (`-pooler` in the host) for the app and a direct one for migrations.
- Planned steps: 2.1 Neon + `.env`, 2.2 install Prisma, 2.3 configure Prisma, 2.4 verify the connection, 2.5 define the Opportunity model, 2.6 migrate, 2.7 optional seed.

### Git
No commit for this planning step.

---

## Milestone 2, Step 2.1 — Create and configure the Neon database

- **Date:** 2026-10-15
- **Objective:** Create the Neon project, put the pooled and direct connection strings in a git-ignored `.env`, add a placeholder `.env.example`, and verify the setup is secure. No Prisma, schema, tables, migrations or application code.

### Exact prompts
1. ```
   Create the Neon Database
   Copy and paste the following into Claude:
   I've reviewed your Milestone 2 database plan and approve the overall approach.
   Architectural decisions:
   1. Use Prisma ORM 7.10.0 rather than the Prisma 8 release candidate.
   2. Use @prisma/adapter-pg with PostgreSQL.
   3. Use Neon PostgreSQL for database hosting.
   4. Preserve the original OpenRaiz opportunity fields when we create the database model.
   5. Use DATABASE_URL for the pooled database connection and DIRECT_URL for the direct connection used by Prisma migrations.
   Your task is limited to Milestone 2, Step 2.1: Creating and configuring the Neon database.
   I have not yet confirmed whether I have an existing Neon account.
   Please guide me through:
   1. Creating or accessing my Neon account.
   2. Creating a new Neon project named openraiz-2.
   3. Selecting an appropriate database region.
   4. Locating the pooled and direct PostgreSQL connection strings.
   5. Securely configuring these values in my local .env file.
   Do not ask me to paste connection strings, passwords, or credentials into chat.
   Security requirements:
   - Confirm .env is excluded from Git.
   - Create an .env.example containing placeholder values only.
   - Verify the environment variables exist without displaying their contents.
   - Do not include credentials in PROMPT_LOG.md.
   - Do not commit or push anything without my approval.
   Documentation requirements:
   Update PROMPT_LOG.md with:
   - Milestone 2, Step 2.1
   - My exact prompt
   - Files created or modified
   - Commands executed
   - Verification results
   - Any problems encountered
   Important:
   Do not install Prisma, configure the Prisma schema, create database tables, run migrations, or write application code yet.
   Complete Step 2.1, verify the configuration is secure, and stop.
   Explain the results in plain English and wait for my approval before proceeding to Step 2.2.
   ```
2. ```
   I was given this link: npx neon skills -y
   ```
   → It is an `npx` command, not a link. The agent looked up the `neon` npm package (read-only; Neon's own CLI) and advised **not** running it: unverified, outside this step's scope, `-y` skips confirmation prompts, and the web console already provides the connection strings.
3. ```
   It was in the set up screen before showing me the connect option.
   ```
   → The agent kept its advice (skip it, not needed) and told the user how to reach the Connect dialog.
4. ```
   The connect dialog, currently says "production"
   ```
   → "production" is Neon's default branch name; use it as is.
5. ```
   Done
   ```
   → The user finished putting both strings in `.env`; the agent ran the checks below.

### Work done by the user (in the Neon web console and VS Code)
Created/opened a Neon account, created the project `openraiz-2`, copied the pooled and direct connection strings, and pasted them into `.env`. The user did not paste any credentials into chat. (The chosen region is not recorded here.)

### Commands executed
- `git check-ignore -v .env .env.local` and `git check-ignore -v .env.example`
- `cp .env.example .env` (created `.env` from the placeholder template for the user to edit)
- A small value-hiding checker script (kept outside the project, in the agent's scratchpad) that reports only whether each variable is set and whether the host looks right; it never prints values
- `git status --short`, `git ls-files | grep "^\.env"`, `git log --all --oneline -- .env`
- `npm view neon …` / `npm view neonctl …` (read-only registry lookups for the `npx neon skills` question)

### Files created or modified
- **Created:** `.env.example` (placeholders only, to be committed).
- **Created, not committed:** `.env` (real connection strings, ignored by Git).
- **Modified:** `.gitignore` — added `!.env.example` below `.env*`.
- **Modified:** `PROMPT_LOG.md` (this entry).
This step affects configuration only: no frontend, backend, API or database tables.

### Verification results
- `.env` is excluded from Git: `git check-ignore -v .env` matches `.gitignore:34 .env*`.
- `.env.example` is not ignored (after the fix below), so it will be committed. `git status` shows `.env.example` and the `.gitignore` change, and does not show `.env`.
- `.env` was never tracked or committed: `git ls-files` lists no `.env*` file and `git log --all -- .env` returns 0 commits.
- Checker output (values not displayed): `DATABASE_URL` is set, starts with `postgresql://`, host ends with `neon.tech`, has `-pooler`, has `sslmode=require`. `DIRECT_URL` is set, starts with `postgresql://`, host ends with `neon.tech`, has no `-pooler`, has `sslmode=require`.
- **Not tested yet:** an actual connection to the database. That is Step 2.4. The checks above verify only the shape of the strings.
- No credentials appear in this log.

### Errors or mistakes identified
- The existing `.gitignore` rule `.env*` also matched `.env.example`, so the placeholder file could never have been committed.
- The agent wrongly said the Neon branch would be called `main`. Neon's default branch is named "production" (the user spotted this in the Connect dialog).
- The user's Neon setup screen suggested running `npx neon skills -y`. It was not run.

### Corrections made
- Added `!.env.example` to `.gitignore` so the template is tracked while real `.env` files stay ignored.
- Corrected the branch-name statement to "production" (the default).

### Git
- **Commit message:** `Configure Neon database environment and document setup` (no Co-Authored-By trailer)
- **Pre-commit checks (agent, before committing):** `git status` showed only `.env.example`, `.gitignore` and `PROMPT_LOG.md` staged; `.env` ignored and unstaged; `.env.example` contained placeholders only; the log documented both corrections; a scan of the staged diff found no part of the real credentials (password, user name or host).
- **Commit reference:** `b0862be43aa8b9e5fac4769005653ab0268033ea` (short `b0862be`), 3 files changed; pushed to `origin/main`. `git ls-remote origin main` returned the same hash, and `git status` was clean after the push.
- **Follow-up prompt:** the user's "Commit Neon Configuration" prompt approving this commit and message (it also asked for this reference to be recorded here and for Step 2.2 not to begin yet).
- **Second commit:** `ead3d3f` `Record Neon configuration commit in prompt log` (log-only; pushed). Approved by the user's prompt `Yes, commit the log update`.

---

## Milestone 2, Step 2.2 — Install Prisma 7.10.0

- **Date:** 2026-10-15
- **Objective:** Install Prisma 7.10.0 and its supporting packages, pinned to exact versions. No schema, `prisma.config.ts`, database connection, tables, migrations or application code.

### Exact prompts
1. ```
   Yes, begin Step 2.2
   ```
   → Approval of the agent's Step 2.2 description (previous message): install `prisma`, `@prisma/client`, `@prisma/adapter-pg`, `pg`, `dotenv`, all pinned; change only `package.json` and `package-lock.json`; report any `npm audit` changes without applying forced fixes.

### Commands executed
- `npm view <package> version engines.node` for each package (read-only version check)
- `npm audit` (baseline before installing)
- `npm install --save-exact @prisma/client@7.10.0 @prisma/adapter-pg@7.10.0 pg@8.23.1 dotenv@18.0.8`
- `npm install --save-dev --save-exact prisma@7.10.0`
- `npx prisma --version`, `npm audit --json` (summarized by package), `npm run lint`, `npm run build`
- `diff` of `package.json` before and after, `git status --short`
- The value-hiding `.env` checker (same as Step 2.1)

### Files modified (no files created)
- `package.json`, `package-lock.json`.
This step affects project tooling only: no frontend, backend, API or database changes.

### What the packages do
- `prisma` (dev): the command-line tool for validating the schema, creating migrations and generating the client.
- `@prisma/client`: the library the app will use to run queries.
- `@prisma/adapter-pg` and `pg`: Prisma 7 requires a driver adapter; these connect it to PostgreSQL (Neon).
- `dotenv`: lets the Prisma command-line tool read `.env`.

### Verification results
- Versions pinned exactly: `@prisma/adapter-pg` 7.10.0, `@prisma/client` 7.10.0, `dotenv` 18.0.8, `pg` 8.23.1 (dependencies); `prisma` 7.10.0 (devDependencies). `package.json` diff shows only those five additions.
- `npx prisma --version` reports `prisma 7.10.0` and `@prisma/client 7.10.0` on Node v24.21.0, with the schema engine present.
- `npm run lint` passes; `npm run build` compiles successfully.
- `git status` shows only `package.json` and `package-lock.json` modified. No `prisma/` folder or `prisma.config.ts` exists yet. `.env` unchanged (checker: both variables still set).
- **User test:** ✅ The user ran `npx prisma --version` and reported that Prisma is the correct version (7.10.0). The exact output was not pasted into the log.

### Problems encountered
- **`npm audit` went from 5 to 9 high-severity findings.** The original 5 are the dev-lint chain (`braces` → … → `eslint-config-next`) noted in Step 1. The 4 new ones come from the Prisma command-line tool's own dependencies: `prisma` and `@prisma/config` (via `deepmerge-ts`: stack exhaustion when merging recursive objects) and `mysql2` (an auth-plugin issue in a MySQL driver; this project uses PostgreSQL). None of this code is imported by the app: the app uses only `@prisma/client` and the adapter. npm's `--omit=dev` audit still reports the 4 Prisma findings, because `@prisma/client` lists `prisma` as a peer dependency, so npm installs it alongside; that is an installation detail, not code the app runs. The 5 older findings are `eslint-config-next` lint tooling only. `npm audit` flags packages that exist in the tree, not code that is reachable. The agent recommended accepting these for the local-only Week 5 demo, not running `npm audit fix --force` (it would downgrade `eslint-config-next` to v14, a breaking change), and revisiting before any public deployment. Expect GitHub Dependabot alerts for the same packages. No forced fix was applied.
- **npm 11 warning:** install scripts for `prisma` (preinstall) and `@prisma/engines` (postinstall) were not allowed (`allowScripts`). `npx prisma --version` still works, so nothing was changed. If a later command fails because of this, that is the first thing to revisit.

### Follow-up prompts
2. ```
   Pause for a moment. Why is the audit showing so many things? Where are we going wrong?
   ```
   → The agent traced each finding with `npm audit --omit=dev --json`, `npm ls mysql2` and `npm ls braces`, and explained that nothing was done wrong (see Problems encountered).
3. ```
   Fix the log wording and continue
   ```
   → The agent corrected the log wording above.
4. ```
   Test: prisma is in the correct version. Commit and push
   ```
   → The agent recorded the user's test result, ran the pre-commit checks and committed.

### Errors or mistakes identified
- The agent first told the user the new findings were "in dev tooling, not in runtime app code" without checking npm's own runtime classification. When the user asked why the audit showed so much, `npm audit --omit=dev` showed 4 findings, which are the Prisma ones (via the `@prisma/client` → `prisma` peer dependency).

### Corrections made
- Rewrote the audit explanation in "Problems encountered" to say this precisely.

### Git
- **Commit message:** `Install Prisma 7.10.0 and PostgreSQL adapter` (no Co-Authored-By trailer)
- **Pre-commit checks (agent):** staged files were only `package.json`, `package-lock.json` and `PROMPT_LOG.md`; `.env` ignored and unstaged; the `package.json` diff showed exactly the five pinned packages; a scan of the staged diff found no part of the real credentials.
- **Commit reference:** `9507f8a837987fce147c5b5f50a07d73a4331e75` (short `9507f8a`), 3 files changed; pushed to `origin/main`. `git ls-remote origin main` returned the same hash, and `git status` was clean after the push.
- **Follow-up prompts:** `Test: prisma is in the correct version. Commit and push` (logged above), then `Yes, update the log and commit it`.
- **Second commit:** `Record Prisma install commit in prompt log` (log-only; its hash is visible in `git log`).

---

## Milestone 2, Step 2.3 — Configure Prisma without models

- **Date:** 2026-10-15
- **Objective:** Add the Prisma schema file (generator and PostgreSQL datasource only) and the Prisma 7 config file that points the command-line tool at `DIRECT_URL`, with an explicit output folder for the generated client, which Git ignores. No models, migrations, tables, Neon connection test, frontend or API changes.

### Exact prompts
1. ```
   Configure Prisma Without Models
   Copy and paste:
   I approve Milestone 2, Step 2.3: Configuring Prisma without creating database models.
   Please proceed with the configuration you proposed.
   Scope of work:
   1. Create prisma/schema.prisma containing the Prisma client generator and PostgreSQL datasource.
   2. Create prisma.config.ts following the installed Prisma 7 version's requirements.
   3. Configure Prisma's CLI to use DIRECT_URL from my existing .env file.
   4. Configure an explicit output directory for the generated Prisma client.
   5. Update .gitignore to exclude the generated client directory.
   Use the existing installed Prisma version. Do not upgrade packages or introduce new dependencies.
   Verification requirements:
   1. Run npx prisma validate.
   2. Confirm the configuration validates successfully.
   3. Verify that no database credentials appear in the source files.
   4. Confirm that .env remains excluded from Git.
   5. Explain in plain English what schema.prisma and prisma.config.ts each do.
   6. Identify the files created or modified.
   Important constraints:
   - Do not create the Opportunity model yet.
   - Do not run database migrations.
   - Do not create database tables.
   - Do not test the Neon connection yet.
   - Do not modify frontend components or API routes.
   - Do not modify the original OpenRaiz repository.
   Prompt log:
   Update PROMPT_LOG.md with the exact prompt, changes made, commands executed, verification results, and any mistakes or corrections.
   Do not include credentials or sensitive configuration values in the log.
   Git:
   Once verification passes, provide a summary of the changes and propose a Git commit message.
   Do not commit or push until I approve.
   Stop after Step 2.3 and wait for my next instruction.
   ```
   (Before this prompt, the user had been asked "Do you approve Step 2.3?" after the agent described it.)
2. ```
   Yes, commit and push it
   ```
   → Approval of the agent's summary and proposed commit message `Configure Prisma 7 schema and CLI config`. The user did not separately report running any test in this step.

### Commands executed
- `WebFetch` of the Prisma 7 PostgreSQL quickstart (read-only documentation lookup)
- Inspection of the installed package: `ls node_modules/@prisma/config/dist`, `grep` of its type definitions for the `env` helper
- `npx prisma validate`
- `git check-ignore -v generated/prisma/client.ts .env`
- A credential scan (script that prints only yes/no) over `prisma/schema.prisma`, `prisma.config.ts`, `.gitignore` and `PROMPT_LOG.md`
- `DIRECT_URL= npx prisma validate` (extra negative test with the variable blanked for one run)
- `npm run lint`, `npm run build`, `git status --short`

### Files created or modified
- **Created:** `prisma/schema.prisma`, `prisma.config.ts`.
- **Modified:** `.gitignore` (added `/generated/prisma`), `PROMPT_LOG.md` (this entry).
- No packages were added or upgraded. The original OpenRaiz repo was not touched.
This step affects database tooling configuration only: no frontend, backend, API or database changes.

### What the code does
- **`prisma/schema.prisma`:** the Prisma "blueprint" file. For now it only says which generator to use (`prisma-client`) and where to write the generated client (`generated/prisma`, outside `node_modules`), and that the database is PostgreSQL. It contains no models and no connection URL. The Opportunity model will go here later.
- **`prisma.config.ts`:** settings for the Prisma command-line tool (validate, migrate, generate). It loads `.env`, says where the schema and migrations folders are, and gives the tool the direct connection string from `DIRECT_URL`. It uses Prisma's `env()` helper, which raises a clear error if the variable is missing instead of silently using nothing. The running app does not read this file; the app will pass `DATABASE_URL` (pooled) to the client itself in a later step.
- **`.gitignore`:** ignores `/generated/prisma`, because the generated client is rebuilt by `npx prisma generate` and should not be committed.

### Verification results
- `npx prisma validate` printed "Loaded Prisma config from prisma.config.ts." and "The schema at prisma/schema.prisma is valid". `validate` loads the config and checks the schema; it did not connect to Neon, no tables or migrations exist, and no connection test was run.
- Negative test: with `DIRECT_URL` blanked, validate failed with `PrismaConfigEnvError: Cannot resolve environment variable: DIRECT_URL`, confirming the config really reads that variable.
- Credential scan: no part of the real password, user name or host appears in `prisma/schema.prisma`, `prisma.config.ts`, `.gitignore` or `PROMPT_LOG.md`.
- `.env` is still ignored (`.gitignore:34 .env*`); `generated/prisma/` is ignored (`.gitignore:39`). `git status` shows only `.gitignore` modified and `prisma.config.ts` and `prisma/` new.
- `npm run lint` passes and `npm run build` compiles, so the new TypeScript config file did not disturb the JavaScript app.
- **Not yet confirmed by the user:** the user has not yet reviewed these files or the results.

### Open question for a later step (Step 2.4)
The `prisma-client` generator writes TypeScript files, and this is a JavaScript project. The app's `lib/prisma.js` will import that generated client, and it is not yet tested that Next.js handles that. This will be checked when the client is generated and the connection is verified, and the fix (if one is needed) will be shown then.

### Errors or mistakes identified
None in this step.

### Corrections made
None.

### Git
- **Commit message:** `Configure Prisma 7 schema and CLI config` (no Co-Authored-By trailer)
- **Pre-commit checks (agent):** staged files were only `.gitignore`, `PROMPT_LOG.md`, `prisma.config.ts` and `prisma/schema.prisma`; no `.env` or generated files staged; a scan of the staged diff found no part of the real credentials.
- **Commit reference:** `c198f8e2ed18ba8841a7f3cb896aa4ed7290aa7e` (short `c198f8e`), 4 files changed; pushed to `origin/main`. `git ls-remote origin main` returned the same hash, and `git status` was clean after the push.
- **Follow-up prompt:** `Yes, update the log and commit it`.
- **Second commit:** `Record Prisma configuration commit in prompt log` (log-only; its hash is visible in `git log`).

---

## Milestone 2, Step 2.4 — Verify the Prisma ↔ Neon connection

- **Date:** 2026-10-15
- **Objective:** Generate the Prisma client, create the shared server-side client (`lib/prisma.js`) using the pg adapter and the pooled `DATABASE_URL`, and confirm with a temporary `SELECT 1` that the app's database configuration can talk to Neon. No models, tables, migrations, API routes or frontend components.

### Exact prompts
1. ```
   I approve Milestone 2, Step 2.4: Verifying the connection between Prisma and Neon PostgreSQL.
   Objective
   Confirm that our Next.js application's server-side database configuration can successfully communicate with Neon PostgreSQL.
   Scope of work
   1. Run npx prisma generate using our existing Prisma 7 configuration.
   2. Create lib/prisma.js using the installed @prisma/adapter-pg driver.
   3. Configure the Prisma Client to use DATABASE_URL, which contains our pooled Neon connection string.
   4. Ensure the Prisma Client is reusable across server-side requests and avoids unnecessary connection instances during Next.js development.
   5. Run a temporary database connection test using Prisma Client and a read-only SQL query: SELECT 1.
   Verification requirements
   - Confirm Prisma Client generates successfully.
   - Confirm the application can connect to Neon.
   - Confirm the query returns 1.
   - Confirm no database models or tables were created.
   - Confirm no migrations were executed.
   - Confirm the generated Prisma Client is excluded from Git.
   - Confirm the database credentials are not exposed in source files, terminal output, or documentation.
   - Run npm run build to verify the existing Next.js application still builds.
   If prisma generate fails because the schema contains no models, stop and explain the issue rather than adding models without my approval.
   If the connection fails, explain the exact error and propose the smallest possible correction. Do not change the architecture without my approval.
   Documentation
   Update PROMPT_LOG.md with:
   - Milestone 2, Step 2.4
   - My exact prompt
   - Files created or modified
   - Commands executed
   - Verification results
   - Errors or corrections
   - An explanation of what SELECT 1 demonstrated
   Git requirements
   After the tests pass:
   1. Review the changes.
   2. Show me the files that would be committed.
   3. Propose a commit message.
   4. Wait for my approval before committing or pushing.
   Important constraints
   Do not create the Opportunity model yet.
   Do not create database tables or run migrations.
   Do not implement API routes or frontend components.
   Do not modify the original OpenRaiz repository.
   Complete Step 2.4 and stop.
   ```
   (Before this prompt, the user had been asked "Do you want me to begin Step 2.4?" after the agent described it.)
2. ```
   Yes, commit and push it
   ```
   → Approval of the agent's summary and proposed commit message `Add shared Prisma client and verify Neon connection`. The user did not separately report running any test in this step.

### Commands executed
- `npx prisma generate` (output filtered so any URL would be hidden)
- Temporary test scripts kept **outside the project** in the agent's scratchpad (not committed): a small resolver so plain Node understands the `@/` import shortcut Next.js uses, a `SELECT 1` script, and a read-only table-listing script. Run with `node --env-file=.env --import <resolver> <script>`, with output filtered to hide URLs. The test imports the real `lib/prisma.js`.
- `ls prisma`, `git check-ignore -v generated/prisma/client.ts`, `git status --short`
- A credential scan (prints only yes/no) over `lib/prisma.js`, `prisma/schema.prisma`, `prisma.config.ts`, `PROMPT_LOG.md` and `.env.example`
- `npm run lint`, `npm run build`
- `git status --short` in the original `openraiz` repo (read-only check)

### Files created or modified
- **Created:** `lib/prisma.js`.
- **Generated, ignored by Git (not committed):** `generated/prisma/` (the Prisma client).
- **Modified:** `eslint.config.mjs` (added `generated/**` to the ignore list), `PROMPT_LOG.md` (this entry).
This step affects the **backend** only (server-side database access). No frontend, API routes or database tables.

### What the code does
- **`lib/prisma.js`:** creates one Prisma Client that talks to Neon through the `pg` adapter, using the pooled `DATABASE_URL`. It throws a clear error if the variable is missing. It is stored on `globalThis` in development so Next.js code reloads reuse the same client instead of opening a new set of database connections each time. It is for server code only: Route Handlers and Server Components, never client components, so the connection string never reaches the browser.
- **`SELECT 1`:** a query that asks the database to return the number 1 and touches no tables. It is read-only.

### Verification results
- `npx prisma generate` succeeded ("Generated Prisma Client (7.10.0) to ./generated/prisma") even though the schema has no models, so the "stop and explain" case did not occur.
- **Connection and query:** the test through the real `lib/prisma.js` returned `[{"result":1}]` in about 1.5 seconds. No timeout or `P1001` error occurred, so the Neon wake-up delay did not appear this time.
- **What `SELECT 1` demonstrated:** the generated client, the pg adapter, the pooled `DATABASE_URL`, the network path, TLS and the Neon credentials all work together end to end, and Neon accepted the connection and answered. It does **not** show that any tables or data exist, because none do yet.
- **No tables or migrations:** a read-only query of `information_schema.tables` found 0 user tables, and `prisma/migrations/` does not exist (`prisma/` contains only `schema.prisma`). No models exist and no migration command was run.
- **Git:** `generated/prisma/client.ts` is ignored (`.gitignore:39 /generated/prisma`). `git status` shows only `eslint.config.mjs` modified and `lib/` new.
- **Credentials:** the scan found no part of the real password, user name or host in the source files, the log or `.env.example`. Terminal output was filtered, and none of it contained a URL or password.
- `npm run lint` passes after the correction below, and `npm run build` compiles successfully.
- The original `openraiz` repo has 0 changed files.
- **Not yet confirmed by the user:** the user has not yet reviewed these results.

### Limitation of this test
The test ran in plain Node using a small resolver, not inside Next.js. Next's build does not compile `lib/prisma.js` yet, because nothing imports it, so the build passing does not prove it. Whether Next.js's bundler handles importing the generated TypeScript client from this JavaScript project will first be tested for real when the first API route uses `lib/prisma.js` (Milestone 3, GET endpoint). This follows the open question noted in Step 2.3.

### Warnings seen in the test output (not errors)
- **pg SSL-mode notice:** the `pg` driver says the `sslmode=require` in the connection string is currently treated like `verify-full` (the secure behavior) and that a future major version will change this. Nothing to do now. If it becomes a problem later, the connection string can say `sslmode=verify-full` explicitly.
- **`MODULE_TYPELESS_PACKAGE_JSON`:** plain Node noticed `lib/prisma.js` uses `import` syntax in a package without `"type": "module"`. This comes from running the file in plain Node for the test; Next.js is not affected. No change was made to `package.json`.
- **Prisma update notice** suggesting 8.0.0-rc.23 was ignored, per the decision to stay on 7.10.0.

### Errors or mistakes identified
- After `prisma generate`, `npm run lint` reported 8 warnings (all "unused eslint-disable directive") in the generated client files. Linting was clean before this step, because that folder did not exist yet.

### Corrections made
- Added `generated/**` to the ignore list in `eslint.config.mjs`, so generated code is not linted. Lint then passed with no warnings. This is a small change beyond the files named in the prompt, made only to fix the warnings above.

### Git
- **Commit message:** `Add shared Prisma client and verify Neon connection` (no Co-Authored-By trailer)
- **Pre-commit checks (agent):** staged files were only `lib/prisma.js`, `eslint.config.mjs` and `PROMPT_LOG.md`; no `.env` or generated files staged; a scan of the staged diff found no part of the real credentials.
- **Commit reference:** `b51b80ee2c3dbd0e9135837de9b6b046bbe8175a` (short `b51b80e`), 3 files changed; pushed to `origin/main`. `git ls-remote origin main` returned the same hash, and `git status` was clean after the push.
- **Follow-up prompt:** `Yes, update the log and commit it`.
- **Second commit:** `Record shared Prisma client commit in prompt log` (log-only; its hash is visible in `git log`).

---

## Milestone 2, Step 2.5 — Define the Opportunity model (schema only)

- **Date:** 2026-10-15
- **Objective:** Design and then implement the `Opportunity` model and its enums in `prisma/schema.prisma`, preserving the original OpenRaiz fields, and validate it. No migration, tables, import, API routes or frontend components.

### Exact prompts
1. ```
   Yes, update the log and commit it
   ```
   → Log commit for Step 2.4 (`0517a3e`). The agent then asked the user for the model decisions (enums vs strings, ID strategy).
2. ```
   I've reviewed your proposed Opportunity model decisions and approve the following:
   1. Use Prisma enums for:
   - Opportunity type
   - Opportunity status
   - Lived-experience relevance
   - Location type
   - Application method type
   Preserve the exact existing values from the original OpenRaiz data/opportunities.json unless you identify a specific compatibility issue.
   2. Use automatically generated IDs.
   Use a generated string ID with Prisma's cuid() default.
   Additionally, include an optional legacyId field to preserve the readable identifiers from the original OpenRaiz listings when we eventually migrate that data.
   The legacyId field should be unique when provided but nullable for new opportunities.
   3. Preserve the original opportunity fields.
   Use the original OpenRaiz JSON data structure as the reference.
   Preserve fields including:
   - Title
   - Organization
   - Description
   - Compensation
   - Opportunity type
   - Lived-experience relevance
   - Status
   - Source
   - Paid/unpaid indicator
   - Date posted
   - Last updated
   - Deadline
   - Location type
   - City
   - State
   - Address
   - Application method type
   - Application method value
   Use appropriate field types and make fields optional only when appropriate.
   4. Keep the model simple.
   Do not create User or Organization models yet.
   Do not add authentication or organizational relationships.
   Do not implement opportunity approval workflows yet.
   Preserve the original active and filled status values.
   5. Your task is limited to designing the database model.
   Before modifying files, show me:
   - The complete proposed Prisma schema.
   - An explanation of each field in plain English.
   - Which fields are required and optional.
   - The enums and their allowed values.
   - Any differences between the original JSON structure and the proposed database structure.
   - Any potential problems with importing the existing ten opportunities later.
   Important constraints
   Do not modify prisma/schema.prisma yet.
   Do not run migrations.
   Do not create database tables.
   Do not modify API routes or frontend components.
   Do not commit or push anything.
   I want to review and approve the complete schema before implementation.
   After presenting the model, stop and wait for my approval.
   ```
   → The agent analyzed all ten original records plus the original `docs/ADDING-AN-OPPORTUNITY.md` and `js/archive.js` (read-only), validated a draft schema in a throwaway copy outside the project, and presented the proposal. It identified one compatibility issue: the original docs and code also recognize an `archived` status that the data does not yet use. Nothing in the project was modified.
3. ```
   I've reviewed your proposed Opportunity model and approve the overall structure with the following decisions.
   Decision 1: Opportunity Status
   Include all three statuses:
   - active
   - filled
   - archived
   Preserve these as a Prisma enum.
   Archived opportunities should remain in the database but eventually be excluded from the public opportunities directory.
   An expired deadline should not automatically change the stored status to archived.
   Decision 2: Preserve Original Fields
   Keep all the existing OpenRaiz fields you identified.
   Preserve the original enum values, location structure, application methods, compensation information, and optional legacyId.
   Decision 3: Add Created Timestamp
   Add:
   createdAt DateTime @default(now())
   This should represent when a listing was created in the OpenRaiz 2.0 database.
   Preserve datePosted as a separate field representing the opportunity's publication date.
   Decision 4: Last Updated
   Keep your proposed lastUpdated approach for now, but document the distinction between the original listing's last-updated date and future database updates.
   Before we import any existing opportunities, verify that the original dates can be preserved correctly.
   Your task
   Implement the approved Opportunity model in prisma/schema.prisma.
   Do not make any unrelated changes.
   Verification
   1. Run npx prisma validate.
   2. Confirm the schema passes validation.
   3. Explain the enums and required fields.
   4. Confirm that all original opportunity fields remain represented.
   5. Explain what each new field does.
   6. Confirm no database tables were created.
   7. Confirm no migrations were executed.
   Documentation
   Update PROMPT_LOG.md with the exact prompt, changes, verification results, and any errors or corrections.
   Git
   Show me the modified files and propose a commit message.
   Do not commit or push without my approval.
   Important
   Do not run prisma migrate dev yet.
   Do not create database tables.
   Do not import opportunity listings.
   Do not build API endpoints or frontend components.
   Stop after schema validation and wait for my approval.
   ```
4. ```
   I approve the Step 2.5 Opportunity model and the proposed commit.
   Commit message:
   Define Opportunity model and enums in Prisma schema
   Please complete the following:
   1. Stage only prisma/schema.prisma and PROMPT_LOG.md.
   2. Keep design-reference/openraiz-2-mockup.png out of this commit. We will add it during our frontend development milestone.
   3. Confirm no environment files, credentials, generated Prisma files, or unrelated changes are staged.
   4. Review the staged diff for unintended changes.
   5. Commit the approved files and push to origin/main.
   6. Provide the commit hash and confirm the push succeeded.
   Documentation
   Confirm that PROMPT_LOG.md includes:
   - The original Step 2.5 prompt.
   - The schema decisions.
   - Validation results.
   - The date-handling tests and findings.
   - The unrequested prisma generate command as a minor scope deviation.
   Do not fabricate test results or corrections.
   If recording the final commit hash requires modifying the prompt log again, propose that as a separate documentation-only commit.
   Next step
   After completing the commit, prepare a plan for Step 2.6: Creating the Opportunities table through our first Prisma migration.
   The Step 2.6 plan should explain:
   - What migration command you propose running.
   - What tables and database objects will be created.
   - How we'll verify that the table exists in Neon.
   - How we'll verify that the fields and enums match our approved Prisma schema.
   - How we'll test date handling in PostgreSQL.
   - How we'll test whether Prisma preserves an explicitly supplied lastUpdated value during creation.
   - How we'll verify that our original OpenRaiz project remains unchanged.
   Do not run the migration yet.
   Stop after presenting the Step 2.6 plan and wait for approval.
   ```
   → The agent checked this log against the list above, fixed two gaps (labeled the `generate` command as a scope deviation; updated the stale user-review line), staged only the two approved files, and committed. The mockup image stays untracked until the frontend milestone.

### Commands executed
- Read-only analysis of the original repo: a Python script over `data/opportunities.json` (field presence, value sets, nulls, date formats, `isPaid` vs `compensation` consistency), `grep` of `js/*.js`, reading `docs/ADDING-AN-OPPORTUNITY.md`
- `npx prisma validate --schema <scratchpad copy>` (draft check during the proposal phase; project untouched)
- `npx prisma validate`, `npx prisma format --check`, `npx prisma format`, `npx prisma validate` (again), `npx prisma generate` (local only, writes the git-ignored `generated/prisma/` folder)
- Inspection of the generated `OpportunityCreateInput` type
- A date round-trip test over all original dates under five time zones (`TZ=UTC`, `America/Los_Angeles`, `Pacific/Kiritimati`, `Pacific/Pago_Pago`, `Asia/Tokyo`)
- A script that maps every original field to a model column
- A read-only query of `information_schema.tables` through `lib/prisma.js` (same harness as Step 2.4)
- `ls prisma`, credential scan, `npm run lint`, `npm run build`, `git status --short` in both repos

### Files created or modified
- **Modified:** `prisma/schema.prisma` (enums and the `Opportunity` model; comments added), `PROMPT_LOG.md` (this entry).
- **Regenerated, git-ignored:** `generated/prisma/` (so the local client matches the new schema).
- Not part of this step: an untracked `design-reference/openraiz-2-mockup.png` appeared in the project during this step. The agent did not create it (it appears to be a mockup the user added). It is left untouched and is not to be included in this step's commit.
This step affects the **database design** only: no frontend, API routes or tables.

### What the code does
- **Enums** (original values unchanged, lowercase): `OpportunityType` = job, internship, fellowship, volunteer; `LivedExperienceRelevance` = required, preferred, welcomed, relevant; `OpportunityStatus` = active, filled, archived; `LocationType` = remote, hybrid, onsite; `ApplyMethodType` = url, email.
- **Required fields:** `title`, `organization`, `description`, `type`, `livedExperienceRelevance`, `locationType`, `isPaid`, `compensation`, `datePosted`, `applyMethodType`, `applyMethodValue`.
- **Automatic or defaulted:** `id` (generated `cuid()`), `status` (defaults to `active`), `source` (defaults to `"owner-added"`), `createdAt` (defaults to now), `lastUpdated` (set by Prisma on each change).
- **Optional:** `legacyId` (unique when present), `city`, `state`, `address`, `deadline` (empty = rolling).
- **Status rule:** an expired `deadline` does not change the stored status; expiry is computed when listings are displayed, and `archived` listings stay in the database but will be excluded from the public directory.
- **`createdAt` (new):** when the row was created in the OpenRaiz 2.0 database. It is different from `datePosted`, the opportunity's publication date.
- **`legacyId` (from the proposal):** keeps the original readable ID from the old site.
- **`lastUpdated` vs the original:** in the original site, `lastUpdated` was a date set by hand when a listing changed. In 2.0, Prisma sets it to the current date whenever the database row changes. These are different meanings, so imported records must keep their original `lastUpdated` values rather than "today". This is documented in a comment in the schema.

### Verification results
- `npx prisma validate`: "The schema at prisma/schema.prisma is valid". It passed before and after `npx prisma format` (which only realigned columns; see Corrections).
- **All original fields represented:** 19 of 19 flattened original fields map to a column (`id` becomes `legacyId`; `location.*` and `applyMethod.*` become flat columns). The only column not in the original is `createdAt`.
- **No tables:** a read-only query found 0 user tables in Neon.
- **No migrations:** `prisma/migrations/` does not exist, and `prisma/` contains only `schema.prisma`.
- **Dates (pre-import verification, partial):**
  - Treating the original `YYYY-MM-DD` strings as UTC dates and formatting them back with `toISOString().slice(0, 10)` reproduced all 28 original dates exactly (10 `datePosted`, 10 `lastUpdated`, 8 non-null `deadline`) under all five time zones tested.
  - Formatting those same dates in local time was wrong for all 28 in the two Pacific time zones tested (`America/Los_Angeles`, `Pacific/Pago_Pago`), so any API or display code must use UTC date handling.
  - The generated create type accepts an explicit `lastUpdated` (`lastUpdated?: Date | string`), so an import should be able to supply the original value.
- **NOT yet verified:** this date testing exercised JavaScript only. Two things can only be proven against a real table and remain open for the migration/seed steps: (1) that Postgres and the pg adapter store and return `@db.Date` values without shifting a day, and (2) that Prisma keeps an explicitly supplied `lastUpdated` on create instead of overwriting it with today's date. These will be tested before any import (for example inside a rolled-back transaction). If (2) fails, the fallback is to manage `lastUpdated` in the API code.
- Credential scan: no part of the real credentials appears in the schema or the log. `npm run lint` passes and `npm run build` compiles. The original `openraiz` repo has 0 changed files.
- **User review:** the user reviewed the implemented model and approved it and the commit (prompt 4 below). The user did not report running any tests of their own in this step.

### Errors or mistakes identified
- **Minor scope deviation:** the agent ran `npx prisma generate` (regenerating the git-ignored client in `generated/prisma/`) although the prompt asked only for `npx prisma validate`. It changed no tracked files and touched no database; it was done to inspect the generated create type. The user identified it as a deviation in prompt 4.
- `npx prisma format --check` reported the first version of the schema as not formatted to Prisma's standard column alignment (cosmetic; validation still passed).
- While testing, the agent copied the schema to `/tmp` instead of the session scratchpad folder, against its instructions; the temporary copy was deleted immediately.

### Corrections made
- Ran `npx prisma format` (alignment of columns only, no content changes; validated again afterwards).
- Removed the stray `/tmp` copy.

### Git
- **Commit message:** `Define Opportunity model and enums in Prisma schema` (no Co-Authored-By trailer)
- **Pre-commit checks (agent):** only `prisma/schema.prisma` and `PROMPT_LOG.md` were staged; no `.env`, generated Prisma files or mockup staged (`design-reference/` left untracked at the user's request); the staged schema diff added 62 lines and removed 1 (the obsolete "No models yet" comment); a scan of the staged diff found no part of the real credentials.
- **Commit reference:** `a733f031f99894dd58a9fd75b6fe29423c066668` (short `a733f03`), 2 files changed; pushed to `origin/main`. `git ls-remote origin main` returned the same hash, and `git status` showed only the untracked `design-reference/`.
- **Follow-up prompt:** the user approved a documentation-only commit with the message `Record Opportunity model commit in prompt log` (the first part of their next message, quoted in full under Step 2.6A).
- **Second commit:** `Record Opportunity model commit in prompt log` (log-only; its hash is visible in `git log`).

---

## Milestone 2, Step 2.6A — Migration preparation (no database changes)

- **Date:** 2026-10-15
- **Objective:** Before creating the first migration: record the Step 2.5 commit hash (documentation-only commit), run read-only pre-flight checks, determine which Neon branch the local connection strings point to, plan a safer development branch, and review the proposed migration SQL against the approved schema. The migration is **not** generated or applied in this step, and the database is not changed.

### Exact prompts
1. ```
   I approve the documentation-only follow-up commit for Step 2.5.
   Use the commit message:
   Record Opportunity model commit in prompt log
   Confirm that only PROMPT_LOG.md is staged, review the diff, and verify that no credentials are included.
   Commit and push the documentation update to origin/main.
   Next: Step 2.6A — Migration preparation
   I approve beginning the migration preparation process, but I do not yet approve applying the migration.
   Before generating anything:
   1. Run npx prisma validate.
   2. Run npx prisma migrate status.
   3. Confirm the database schema is currently empty.
   4. Confirm the Git working tree is clean, apart from our previously approved untracked design-reference image.
   5. Determine which Neon branch our local database connection strings reference.
   Important Neon precaution
   Our existing Neon branch is named production.
   I would prefer to perform development migrations against a separate Neon development branch.
   Please determine whether our current configuration points to the production branch.
   If it does, explain the safest way to create a development branch and use it for this project.
   Do not create the branch or change connection strings without my approval.
   Migration preparation
   Once we have confirmed the appropriate development database, we will generate the initial migration SQL for review.
   The migration should create:
   - The five approved enum types.
   - The Opportunity table.
   - The unique index on legacyId.
   - Prisma's migration tracking infrastructure, where applicable.
   The Opportunity table should initially contain zero records.
   Review the proposed SQL against the approved Prisma schema.
   Do not apply the migration yet.
   Do not reset the database.
   Do not import sample opportunities.
   Do not create API endpoints or frontend components.
   Documentation
   Update PROMPT_LOG.md with the exact prompt, commands executed, verification results, and any issues encountered.
   Do not record tests as successful unless they actually ran.
   Stop and wait for my approval before making any database changes.
   ```
   (The user's message before this one asked the agent to plan Step 2.6; the agent's plan is in chat and is summarized under "Plan proposed" below.)

### Documentation-only commit (first part of the prompt)
- Only `PROMPT_LOG.md` staged; diff reviewed (it only replaced the two PENDING lines of Step 2.5's Git section with the commit details); a scan found no part of the real credentials.
- **Commit:** `7d3e9117b6f915a7a05b71ec419b22923cbdd6bd` (short `7d3e911`), `Record Opportunity model commit in prompt log`; pushed to `origin/main`; `git ls-remote` returned the same hash. `design-reference/` stayed untracked.

### Commands executed (all read-only; the project folder was not changed by them)
- `npx prisma validate`
- `npx prisma migrate status`
- An inline Node script (no files written) that opened a read-only connection with each connection string and ran `SELECT current_database()`, a count of user tables in `information_schema.tables`, a count of enum types, and `current_setting('neon.endpoint_id')`; it printed no hostnames or passwords (only yes/no results and a short non-reversible fingerprint)
- `npx prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script` (offline: prints SQL from the schema, does not connect to the database), run twice, with an inline script that compared the SQL to `schema.prisma`
- `git status --short`, `git log --oneline -1`
All command output was filtered to hide URLs and Neon hostnames.

### Verification results (only what actually ran)
- **`npx prisma validate`:** the schema is valid.
- **`npx prisma migrate status`:** reported `No migration found in prisma/migrations` and `The current database is not managed by Prisma Migrate`. This is expected for an empty database that has never been migrated; it is not an error. (The tool's link text mentions baselining an "existing production database"; that does not apply here.)
- **Database is empty:** through both the direct and the pooled connection, database `neondb`, schema `public`: 0 user tables and 0 enum types.
- **Both connections work:** the direct and pooled strings both connected successfully (no timeout this time).
- **Git:** the working tree was clean except the approved untracked `design-reference/` folder (HEAD `7d3e911`).
- **Which Neon branch?** Findings:
  - The pooled and direct strings point to the **same Neon compute endpoint** (checked without printing it), the pooled string has `-pooler` and the direct one does not, and both use database `neondb`.
  - Neon identifies a branch by the compute endpoint in the connection string, but the branch's *name* is not exposed to the database, so the name cannot be read from the local files or by querying the database.
  - Evidence that it is the **`production`** branch: while copying the strings, the user reported that the Connect dialog's branch said "production" (the default branch of a new project). No other branch is known to exist.
  - Conclusion: the current configuration very likely points to `production`, but that is inferred, not proven by a tool. The user can confirm in the Neon console (Branches page, compare the branch's endpoint ID with the host in `.env`).
- **Proposed migration SQL reviewed against the approved schema (offline script):** 8 statements, all `CREATE`: `CREATE SCHEMA IF NOT EXISTS "public"` (a no-op, since it exists), 5 `CREATE TYPE ... AS ENUM`, 1 `CREATE TABLE "Opportunity"`, 1 `CREATE UNIQUE INDEX` on `legacyId`. Matches the schema: the 5 enums and their values; all 21 columns with the right types, required/optional status and defaults (`status` default `active`, `source` default `owner-added`, `createdAt` default current time; `id` and `lastUpdated` have no database default because Prisma fills them in); primary key on `id`. It contains no INSERT, DROP, ALTER, DELETE or UPDATE statement, so no rows are created. Prisma's tracking table `_prisma_migrations` is not in this SQL; Prisma creates it itself when a migration is first applied.
- **Not done in this step:** no migration file was generated (`prisma/migrations/` still does not exist), no migration applied, no table created, no reset, no import, no API or frontend change.

### Plan proposed (awaiting the user's decision)
Using a separate Neon development branch:
1. In the Neon console, create a branch named `development` from `production` (current data; the database is empty anyway) with a read-write compute.
2. From the Connect dialog on the `development` branch, copy the pooled and direct strings and replace the values in `.env`. Keep real credentials only in `.env` (never in chat or the log); keep only development credentials on this computer.
3. Re-run the same read-only checks to confirm the new strings point to a different endpoint than before, with 0 tables.
4. Then generate the migration file for review (`npx prisma migrate dev --create-only --name init`), review, and only after approval apply it.
Notes: a child branch can later be reset from its parent, which makes migration experiments safer. Migrations will later be applied to `production` separately (with `prisma migrate deploy`) when a deployment needs it. Branch limits depend on the Neon plan and should be checked in the console.

### Issues encountered
- My first automated check of the SQL reported one difference: a test that searched the SQL for the words INSERT, DROP, ALTER, DELETE or UPDATE matched "Update" inside the column name `lastUpdated`. A second check of the actual statement types (8 statements, all `CREATE`) showed this was a false positive in my check, not a problem with the SQL.
- The session's scratchpad folder became unavailable during this step, so the checks above ran as inline scripts with no temporary files; the older helper scripts from earlier steps (outside the project) were not used.
- The branch name cannot be determined by a tool (see above); this is stated as an inference.

### Errors or mistakes identified
- The false-positive check above (agent's check, not the SQL).

### Corrections made
- Replaced the word-search check with a statement-type check.

### Git
- **Commit message:** PENDING — nothing committed for this entry; awaiting the user's decision on the Neon branch and approval.
- **Commit reference:** PENDING.

---

## Milestone 2, Step 2.6B — Switch the local configuration to the Neon `development` branch

- **Date:** 2026-10-15
- **Objective:** Point the local `.env` at the new Neon `development` branch (child of `production`) instead of `production`, and verify the switch without printing any credentials. No migration, tables, import, API or frontend changes.

### Exact prompts
1. ```
   I've successfully created a new Neon database branch named development, using production as the parent.
   I can access the Connect dialog and retrieve both connection strings.
   Your task is to help me configure OpenRaiz 2.0 to use the new development database.
   Please guide me through updating my local .env file:
   - DATABASE_URL should contain the pooled connection string from the development branch.
   - DIRECT_URL should contain the direct connection string from the development branch.
   Do not display or print the connection strings or credentials.
   Verification requirements:
   1. Confirm both variables are configured.
   2. Verify both connection strings reference the same development database and its corresponding pooled/direct endpoints.
   3. Confirm they do not reference the original production endpoint.
   4. Test connectivity using a read-only query such as SELECT 1.
   5. Confirm the development database contains zero application tables and zero custom enum types.
   6. Confirm .env is excluded from Git.
   7. Confirm the production database has not been modified.
   8. Confirm the original OpenRaiz repository remains unchanged.
   If you cannot conclusively identify the Neon branch from the connection strings, explain how I can verify the correct endpoint in the Neon console.
   Documentation:
   Update PROMPT_LOG.md with this step, including the exact prompt, commands executed, verification results, and any corrections.
   Never include database credentials or connection strings in the log.
   Git:
   Once verification passes, propose a documentation-only commit.
   Do not commit or push without my approval.
   Important constraints:
   Do not generate or apply database migrations.
   Do not create tables or import opportunities.
   Do not modify frontend components or API routes.
   Stop after verifying the development database connection.
   ```
2. ```
   done
   ```
   → The user had replaced both values in `.env` (in VS Code, from the Neon Connect dialog with the `development` branch selected). The agent then ran the verification below.

### Work done by the user
Created the `development` branch in the Neon console (parent `production`), copied the pooled and direct strings from the Connect dialog with the `development` branch selected, and pasted them into `.env`. The user did not paste any credentials into chat. The old production strings are no longer on this computer (they can be re-copied from the Neon console by selecting the `production` branch).

### Commands executed (read-only)
- Before the switch: an inline Node script (no files written) compared each connection string's endpoint, via a short non-reversible fingerprint, to the production fingerprint recorded in Step 2.6A. It showed both strings still pointed to production, so the user was given the steps to update `.env`.
- After the switch: one inline Node script using the `pg` package that checked the variables and opened a read-only connection with each string, running `SELECT 1`, `SELECT current_database()`, a count of user tables in `information_schema.tables`, a count of custom enum types, and `current_setting('neon.endpoint_id')`. Output was filtered so no URL or hostname could appear, and the script printed only PASS/FAIL results and fingerprints.
- `git check-ignore -v .env`, `git status --short`, `git ls-files | grep "^\.env$"`
- In the original repo: `git status --short`, `git rev-parse --short HEAD`, and the same file-timestamp fingerprint used in Step 1.

### Verification results (only what actually ran)
All items below passed unless marked otherwise.
1. **Configured:** `DATABASE_URL` and `DIRECT_URL` are both set and not placeholders.
2. **Same development database, corresponding endpoints:** the `DATABASE_URL` host is the pooled one (`-pooler`); the `DIRECT_URL` host is the direct one; both belong to one compute endpoint; both use database `neondb` and `sslmode=require`.
3. **Not production:** the endpoint fingerprint of both strings differs from the production fingerprint recorded in Step 2.6A. The server-reported endpoint on each connection also differs from production's.
4. **Connectivity:** `SELECT 1` returned 1 through both the direct connection (about 1.4 s) and the pooled connection (about 0.5 s). The server-reported endpoint matched the URL host on each.
5. **Empty:** through both connections, application tables: 0; custom enum types: 0.
6. **`.env` excluded from Git:** `git check-ignore` matches `.gitignore:34 .env*`, `.env` is not tracked, and `git status` shows only the modified `PROMPT_LOG.md` and the approved untracked `design-reference/`.
8. **Original repo unchanged:** 0 changed files, commit `0113d35`, and the file-timestamp fingerprint matches the Step 1 baseline.
- **Item 7 — production not modified: NOT directly re-verified.** After the switch, the local files no longer hold production credentials, so the agent could not query production. What is established: the last read-only look at production (Step 2.6A) showed 0 tables and 0 enum types, and no command run since then writes to any database (only `SELECT` queries; no migration, no table creation, no import). To check directly, the user can open the `production` branch in the Neon console's Tables page; it should be empty.
- **Branch identity:** the branch name cannot be read from the connection strings or the database. The user can confirm in the Neon console (Branches page → `development`): its compute endpoint ID (starting `ep-`) should match the first part of the host in `.env`, ignoring `-pooler`. The user has not reported doing this check.
- **Not done (as required):** no migration file generated, no migration applied, no table created, no import, no change to frontend or API code.

### Issues encountered
None. The verification ran correctly on the first attempt.

### Errors or mistakes identified
None in this step.

### Corrections made
None.

### Git
- **Commit message:** `Record migration preparation and development branch setup in prompt log` (no Co-Authored-By trailer); documentation-only, includes the Step 2.6A and Step 2.6B entries.
- **Follow-up prompt:** `Yes, commit and push the documentation update`.
- **Pre-commit checks (agent):** only `PROMPT_LOG.md` staged; `.env` and `design-reference/` not staged; a scan of the staged diff found no credential, hostname or endpoint parts.
- **Commit reference:** `bd29c859562d4dd13ec79692e1f1296044269654` (short `bd29c85`), 1 file changed (`PROMPT_LOG.md`, 177 lines added); pushed to `origin/main`; `git ls-remote origin main` returned the same hash. Recorded here during Step 2.6C at the user's request.

---

## Milestone 2, Step 2.6C — Generate the initial migration file (not applied)

- **Date:** 2026-10-15
- **Objective:** Generate and review the SQL migration that will create the `Opportunity` table and its five enum types on the Neon `development` branch, **without applying it**.
- **Previous documentation commit:** `bd29c85` (`Record migration preparation and development branch setup in prompt log`).

### Exact prompts
1. ```
   I approve generating the initial Prisma migration file for OpenRaiz 2.0.
   Objective
   Generate the SQL migration that will eventually create our Opportunity table in the Neon development database.
   This step is for generating and reviewing the migration, not applying it.
   Pre-flight verification
   Before generating the migration:
   1. Confirm DATABASE_URL and DIRECT_URL still reference the Neon development database.
   2. Confirm the development database has zero application tables and zero custom enum types.
   3. Run npx prisma validate.
   4. Confirm the Git working tree contains no unexpected changes.
   5. Confirm .env remains excluded from Git.
   Migration generation
   Run:
   npx prisma migrate dev --create-only --name init
   Before running it, confirm that this command is supported by our installed Prisma version.
   If the command would reset the database, require destructive confirmation, or target an unexpected database, stop and ask for approval.
   Migration review
   After generating the migration:
   1. Identify all generated files.
   2. Show me the complete SQL migration.
   3. Confirm that it creates the five approved enum types.
   4. Confirm that it creates the Opportunity table with all 21 columns.
   5. Confirm the unique constraint on legacyId.
   6. Confirm that all required and optional fields match our approved schema.
   7. Confirm that createdAt and lastUpdated are configured as expected.
   8. Confirm that no existing application tables or data are being deleted or modified.
   9. Check whether the command created any Prisma migration bookkeeping objects.
   Important
   Do not apply the migration to create the Opportunity table.
   Do not run prisma migrate dev without --create-only.
   Do not run prisma migrate deploy.
   Do not reset the database.
   Do not import opportunities.
   Do not modify frontend components or API routes.
   Documentation
   Update PROMPT_LOG.md with:
   - The exact prompt.
   - Commands executed.
   - Files created or modified.
   - Migration verification results.
   - Any problems or corrections.
   - The previous documentation commit reference bd29c85.
   Do not include credentials or connection strings.
   Git
   After reviewing the migration, propose a commit message.
   Do not commit or push without my approval.
   Stop after generating and reviewing the SQL migration.
   Wait for my approval before applying it to Neon.
   ```
   (The user's message before this one was the approval of the documentation commit `bd29c85`, "Yes, commit and push the documentation update"; the agent's plan for this step was given in chat.)

### Pre-flight results (all ran before the migration command)
- **Development database:** both strings still reference the development endpoint (the short non-reversible fingerprint matches the one recorded in Step 2.6B) and neither references production.
- **Empty:** 0 application tables (this count also covers any `_prisma_migrations` table) and 0 custom enum types. The branch had the databases `neondb` and `postgres`. The database role is allowed to create databases, which the temporary shadow database needs.
- **`npx prisma validate`:** the schema is valid.
- **Command supported:** `npx prisma migrate dev --help` lists `--name` and `--create-only` ("Create a new migration but do not apply it") for the installed Prisma 7.10.0, and no reset or force option applies to this command line. The database was empty and had no migration history, so no reset prompt was expected. The command ran with no input available (`< /dev/null`) so any confirmation prompt would have failed instead of proceeding.
- **Git:** only the approved untracked `design-reference/` folder; HEAD was `bd29c85`. `.env` is excluded (`.gitignore:34 .env*`).

### Commands executed
- `npx prisma validate`, `npx prisma migrate dev --help`, `npx prisma --version`
- Inline Node scripts (no files written) using `pg` with read-only queries, output filtered to hide URLs and hostnames: the pre-flight checks above, and a post-command check of tables, enum types, `_prisma_migrations` and the list of databases
- **`npx prisma migrate dev --create-only --name init`** (the one migration command run; never run without `--create-only`)
- `cat` of the generated files; `npx prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script` (offline) to compare with the generated SQL; an inline script reviewing the SQL against `schema.prisma`
- `git status --short`; in the original repo, `git status --short` and `git rev-parse --short HEAD`
No `prisma migrate deploy`, no reset, no migration applied.

### Files created
- `prisma/migrations/20261016011916_init/migration.sql` (44 lines): the SQL that will create the enums, table and index. The folder name uses a UTC timestamp, 2026-10-16 01:19:16 UTC.
- `prisma/migrations/migration_lock.toml`: a Prisma file recording the database provider (`postgresql`); Prisma says it should be committed.
No existing file was modified by the command. (This log entry modifies `PROMPT_LOG.md`.)

### Migration verification results (the SQL file was reviewed; it has not been run on any database)
1. **Five enum types:** `OpportunityType` (job, internship, fellowship, volunteer), `LivedExperienceRelevance` (required, preferred, welcomed, relevant), `OpportunityStatus` (active, filled, archived), `LocationType` (remote, hybrid, onsite), `ApplyMethodType` (url, email), each exactly matching the approved schema.
2. **Table and columns:** `CREATE TABLE "Opportunity"` with 21 columns (matching the 21 model fields) and a primary key on `id`.
3. **Unique constraint:** `CREATE UNIQUE INDEX "Opportunity_legacyId_key" ON "Opportunity"("legacyId")`; `legacyId` is nullable.
4. **Required vs optional:** 16 NOT NULL columns and 5 nullable ones (`legacyId`, `city`, `state`, `address`, `deadline`), matching the schema.
5. **`createdAt`:** `TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP`, so the database fills it in.
6. **`lastUpdated`:** `DATE NOT NULL` with **no** database default. Prisma sets it when it creates or updates a row; any insert that bypasses Prisma must supply it. (Whether Prisma preserves an explicitly supplied original value is still untested and is planned for after the table exists.) `datePosted` is `DATE NOT NULL` and `deadline` is `DATE` (calendar dates, no time zone). `status` defaults to `active`, `source` to `owner-added`.
7. **Nothing is deleted or modified:** all 7 statements are `CREATE` (5 `CREATE TYPE`, 1 `CREATE TABLE`, 1 `CREATE UNIQUE INDEX`). There is no `DROP`, `ALTER`, `DELETE`, `UPDATE` or `INSERT`, and the database had no application tables or data to affect.
8. **Compared with the earlier offline preview:** identical, except that the preview also began with `CREATE SCHEMA IF NOT EXISTS "public"` (a no-op because the schema already exists), which the generated file leaves out.
9. **Bookkeeping objects created by the command:** yes, one. After the command the development database contains one table, `public._prisma_migrations` (Prisma's migration-history table), with **0 rows**. It was created on the `development` branch only. The `Opportunity` table and the enum types were **not** created (0 custom enum types). The temporary shadow database was cleaned up (the branch again lists only `neondb` and `postgres`).
- **Original OpenRaiz repo:** 0 changed files, still at commit `0113d35`.
- **Production:** not touched; the local configuration points to the development branch only.

### Problems encountered
- My first comparison of the generated SQL with the offline preview reported "differ" because of a macOS `sed` syntax error in my own script, and the first line of the offline output (a "Loaded Prisma config" message) was not stripped. A corrected comparison showed the only real difference is the no-op `CREATE SCHEMA` statement described above.

### Errors or mistakes identified
- The faulty comparison script above (agent's script, not the migration).

### Corrections made
- Replaced the comparison with a Node script that strips the config message and the `CREATE SCHEMA` block before comparing.
- Filled in the earlier Step 2.6B commit reference (`bd29c85`).

### Git
- **Proposed commit message:** `Add initial Prisma migration for Opportunity table` (files: `prisma/migrations/20261016011916_init/migration.sql`, `prisma/migrations/migration_lock.toml`, `PROMPT_LOG.md`).
- **Commit message:** `Add initial Prisma migration for Opportunity table` (no Co-Authored-By trailer)
- **Follow-up prompt:** `Yes, commit and push the migration files`.
- **Pre-commit checks (agent):** only `prisma/migrations/20261016011916_init/migration.sql`, `prisma/migrations/migration_lock.toml` and `PROMPT_LOG.md` staged; `.env`, `design-reference/` and generated files not staged; a scan of the staged diff found no credential, hostname or endpoint parts.
- **Commit reference:** `4059b63c5f6d2102075f2dfb48ed43091c6db8cd` (short `4059b63`), 3 files changed (`migration.sql`, `migration_lock.toml`, `PROMPT_LOG.md`); pushed to `origin/main`; `git ls-remote origin main` returned the same hash. Recorded here during Step 2.6D. At the time of this commit the migration had **not** been applied.

---

## Milestone 2, Step 2.6D — Apply the initial migration to the Neon development database

- **Date:** 2026-10-15
- **Objective:** Apply the previously reviewed and committed migration `20261016011916_init` (commit `4059b63`) to the Neon **development** branch, and verify that PostgreSQL created exactly the approved `Opportunity` table and enum types. No test rows, date tests, import, API or frontend work, and no change to the schema.

### Exact prompts
1. ```
   I approve Milestone 2, Step 2.6D: Applying our initial Prisma migration to the Neon development database.
   Objective
   Apply our previously reviewed migration and verify that PostgreSQL creates the approved Opportunity table and enum types.
   Approved migration
   20261016011916_init
   This migration was committed to GitHub in commit 4059b63.
   Step 1 — Pre-flight verification
   Before making any database changes:
   1. Confirm DATABASE_URL and DIRECT_URL reference the Neon development branch.
   2. Confirm neither points to the production endpoint.
   3. Confirm the development database contains only the empty _prisma_migrations table.
   4. Confirm no Opportunity table or custom enum types exist.
   5. Run npx prisma validate.
   6. Run npx prisma migrate status and confirm exactly one pending migration.
   7. Confirm the Git working tree contains no unexpected changes.
   If any check fails, stop and explain the issue before proceeding.
   Step 2 — Apply migration
   Run:
   npx prisma migrate deploy
   Apply only the previously reviewed migration.
   Do not generate additional migrations or modify the schema.
   Do not run prisma migrate reset.
   Step 3 — Verify database structure
   After the migration:
   1. Confirm the Opportunity table exists in Neon development.
   2. Confirm all five approved enum types exist.
   3. Verify all 21 columns match our approved schema.
   4. Confirm the primary key and unique legacyId constraint exist.
   5. Confirm createdAt and lastUpdated have the expected definitions.
   6. Run npx prisma migrate status and confirm the database is up to date.
   7. Run the Prisma schema comparison and confirm there are no differences.
   8. Confirm _prisma_migrations contains one successful migration record.
   9. Confirm the Opportunity table contains zero records.
   Step 4 — Security
   Confirm:
   - The production database was not targeted.
   - No credentials were printed or committed.
   - .env remains excluded from Git.
   - The original OpenRaiz repository remains unchanged.
   Step 5 — Documentation
   Update PROMPT_LOG.md with:
   - The exact prompt.
   - Commands executed.
   - Migration results.
   - Database verification results.
   - Any errors or corrections.
   - The previous migration commit reference 4059b63.
   Important boundaries
   Do not insert test opportunities yet.
   Do not perform the date-handling tests yet.
   Do not import the ten original OpenRaiz listings.
   Do not create API endpoints or frontend components.
   Do not modify the approved Prisma schema.
   Git
   After verification, show me any modified files and propose a commit message.
   Do not commit or push without my approval.
   Stop after verifying the migration
   ```
   (The user's message before this one was the approval of the migration commit, "Yes, commit and push the migration files"; the agent's plan for this step was given in chat.)

### Pre-flight results (all ran before the migration; all passed)
1. `DATABASE_URL` and `DIRECT_URL` reference the development endpoint (the short non-reversible fingerprint matches the one recorded in Step 2.6B).
2. Neither points to the production endpoint.
3. The development database contained only `public._prisma_migrations`, with 0 rows.
4. No `Opportunity` table and 0 custom enum types.
5. `npx prisma validate`: valid.
6. `npx prisma migrate status`: "1 migration found in prisma/migrations. Following migration have not yet been applied: 20261016011916_init" (exactly one pending).
7. Git: only the approved untracked `design-reference/`; HEAD `4059b63`; `.env` excluded.

### Commands executed
- Inline Node scripts (no files written) using `pg`, output filtered to hide URLs and hostnames: the pre-flight checks, and the post-migration structure checks below
- `npx prisma validate`
- `npx prisma migrate status` (before and after)
- **`npx prisma migrate deploy`** (run with no input available; the only command that changed the database)
- `npx prisma migrate diff --from-config-datasource --to-schema prisma/schema.prisma --exit-code`
- `git status --short`, `git check-ignore -v .env`, `git ls-files`; in the original repo `git status --short`, `git rev-parse --short HEAD` and the file-timestamp fingerprint
Not run: `prisma migrate dev`, `prisma migrate reset`, any new migration generation, any insert.

### Migration result
`prisma migrate deploy` output: "1 migration found in prisma/migrations", "Applying migration `20261016011916_init`", "All migrations have been successfully applied." Only the reviewed migration was applied. The schema file was not modified.

### Database verification results (Neon development branch)
1. **`Opportunity` table exists:** the `public` schema contains exactly two tables: `Opportunity` and Prisma's `_prisma_migrations`.
2. **Five enum types exist** with exactly the approved values: `OpportunityType` (job, internship, fellowship, volunteer), `LivedExperienceRelevance` (required, preferred, welcomed, relevant), `OpportunityStatus` (active, filled, archived), `LocationType` (remote, hybrid, onsite), `ApplyMethodType` (url, email).
3. **21 columns** (schema: 21); every column's type and nullability matches the approved schema (checked column by column from the live database against `schema.prisma`).
4. **Keys:** the primary key is exactly `id`; a unique index `Opportunity_legacyId_key` exists on `legacyId`. The table's indexes are only that unique index and the primary key.
5. **Definitions:** `createdAt` is `timestamp(3)`, NOT NULL, default `CURRENT_TIMESTAMP`. `lastUpdated` is `date`, NOT NULL, with no database default (Prisma sets it). `status` defaults to `active` and `source` to `owner-added`.
6. **`npx prisma migrate status`:** "1 migration found in prisma/migrations. Database schema is up to date!"
7. **Schema comparison** (live database vs `prisma/schema.prisma`, `migrate diff --from-config-datasource --to-schema ... --exit-code`): "No difference detected", exit code 0.
8. **`_prisma_migrations`:** exactly 1 record, `20261016011916_init`, finished, not rolled back, 1 applied step, no error log; its recorded checksum equals the SHA-256 of the committed `migration.sql`.
9. **`Opportunity` contains 0 records.**

### Security checks
- **Production not targeted:** `migrate deploy` ran with the strings in `.env`, which still reference the development endpoint and not production (fingerprint check run after the migration). No production credentials exist locally.
- **No credentials printed or committed:** all output was filtered, and a scan found no credential, hostname or endpoint parts in this log entry. No file was staged or committed in this step.
- **`.env`** is excluded from Git (`.gitignore:34 .env*`) and untracked.
- **Original OpenRaiz repo:** 0 changed files, still at commit `0113d35`, file-timestamp fingerprint matches the Step 1 baseline.

### Not done (as required)
No test rows inserted, no date-handling or `lastUpdated` tests, no import of the ten original listings, no API or frontend changes. These remain for later steps.

### Problems encountered
- My first run of the structure-verification script crashed with "(intermediate value)... .join is not a function". The `pg` driver returned an array of enum labels as a text string, so the script's comparison code failed. This was a bug in the agent's check, not in the database. The migration-status and schema-comparison results from that same run were valid. After casting the labels to text in the query, the full structure check was re-run and passed. The reported results above come from the re-run.

### Errors or mistakes identified
- The verification-script bug above (agent's script, not the migration).

### Corrections made
- Fixed the script (cast enum labels to text) and re-ran the complete structure verification.
- Recorded the earlier migration commit reference `4059b63` in the Step 2.6C entry.

### Git
- **Files modified (uncommitted):** `PROMPT_LOG.md` only. The migration application changed the Neon development database, not any project file. `design-reference/` remains untracked.
- **Proposed commit message:** `Apply initial migration to Neon development database and record results`
- **Commit message:** `Apply initial migration to Neon development database and record results` (no Co-Authored-By trailer); documentation-only.
- **Follow-up prompt:** `Yes, commit and push the documentation update`.
- **Pre-commit checks (agent):** only `PROMPT_LOG.md` staged; `.env` and `design-reference/` not staged; a scan of the staged diff found no credential, hostname or endpoint parts.
- **Commit reference:** `5f0397020915e19beae9344ea6992707f5347cda` (short `5f03970`), 1 file changed (`PROMPT_LOG.md`); pushed to `origin/main`; `git ls-remote origin main` returned the same hash. Recorded here during Step 2.7.

---

## Milestone 2, Step 2.7 — Test Opportunity date and timestamp behavior

- **Date:** 2026-10-15
- **Objective:** Before building the API, verify with fictional rows (all rolled back) that PostgreSQL and Prisma handle opportunity calendar dates correctly across time zones, and find out whether Prisma preserves or overwrites a supplied `lastUpdated`.
- **Previous documentation commit:** `5f03970` (`Apply initial migration to Neon development database and record results`).

### Exact prompts
1. ```
   I approve Milestone 2, Step 2.7: Testing Opportunity database behavior.
   Objective
   Verify that Prisma and PostgreSQL correctly handle opportunity dates and automatic update timestamps before we begin building our API layer.
   Step 1 — Pre-flight
   1. Confirm both database connection strings reference our Neon development branch.
   2. Confirm neither references production.
   3. Verify the Opportunity table contains zero records.
   4. Confirm the migration status is up to date.
   5. Confirm the Git working tree contains no unexpected modifications.
   If any check fails, stop and explain the issue.
   Step 2 — Date handling
   Using clearly fictional opportunity records:
   1. Test datePosted with a value such as 2026-09-01.
   2. Test both a populated deadline and a null deadline.
   3. Read the stored values through Prisma and directly through PostgreSQL.
   4. Repeat the tests under UTC, America/Los_Angeles, and Pacific/Kiritimati.
   5. Confirm that calendar dates remain consistent across all three time zones.
   Explain the results in plain English.
   Step 3 — Test lastUpdated
   Test the following behaviors:
   1. Creating an opportunity with an explicitly supplied historical lastUpdated date.
   2. Creating opportunities using createMany with an explicitly supplied historical date.
   3. Updating an opportunity without supplying lastUpdated.
   4. Updating an opportunity while explicitly supplying lastUpdated.
   Confirm whether Prisma preserves or overwrites the supplied values.
   If the behavior differs from our intended data model, stop and explain the issue.
   Do not change the Prisma schema without my approval.
   Step 4 — Transaction safety
   All test records must be created inside transactions designed to roll back.
   Do not use transactions that automatically commit after successful tests.
   Run the tests sequentially.
   If a test fails, confirm the transaction was rolled back before proceeding.
   After all tests, verify that the Opportunity table contains zero records.
   If any records remain, stop and report them. Do not delete them without my approval.
   Step 5 — Final verification
   1. Confirm the migration status remains up to date.
   2. Confirm the database structure still matches our approved Prisma schema.
   3. Confirm the production database was not targeted.
   4. Confirm the original OpenRaiz repository remains unchanged.
   5. Confirm no credentials were exposed.
   Documentation
   Update PROMPT_LOG.md with:
   - The exact prompt.
   - Commands executed.
   - Test results.
   - Any failures or corrections.
   - What I learned about PostgreSQL dates and Prisma timestamps.
   - The previous documentation commit reference 5f03970.
   Do not fabricate test results or imply that I personally verified anything I haven't confirmed.
   Git
   After completing the tests:
   1. Show me any modified files.
   2. Propose a commit message.
   3. Wait for my approval before committing or pushing.
   Important constraints
   Do not import the original ten opportunities.
   Do not modify the Prisma schema.
   Do not create API endpoints or frontend components.
   Do not modify the original OpenRaiz project.
   Stop after completing Step 2.7.
   ```
   (The user's message before this one was the approval of the documentation commit `5f03970`, "Yes, commit and push the documentation update"; the agent's plan for this step was given in chat.)

### Pre-flight results (ran before any test; all passed)
Both connection strings reference the development endpoint; neither references production; `Opportunity` had 0 records; `_prisma_migrations` had 1 successful record; `npx prisma migrate status` said "Database schema is up to date!"; Git had only the approved untracked `design-reference/` folder (HEAD `5f03970`).

### Commands executed
- Inline Node scripts only (no files written, nothing to commit), output filtered to hide URLs and hostnames: the pre-flight checks, one test script run three times in a row (`TZ=UTC`, `TZ=America/Los_Angeles`, `TZ=Pacific/Kiritimati`), and the final verification
- `npx prisma migrate status` (before and after), `npx prisma migrate diff --from-config-datasource --to-schema prisma/schema.prisma --exit-code`
- `git status --short`, `git log --oneline -1`, `git check-ignore -v .env`; in the original repo `git status --short`, `git rev-parse --short HEAD`, and the file-timestamp fingerprint
**How the tests worked:** the script created the Prisma client the same way `lib/prisma.js` does (the pg adapter with the pooled `DATABASE_URL`, loading the generated client directly). Each test ran inside an interactive Prisma transaction that **always throws on purpose after the checks**, so PostgreSQL rolls it back and nothing is saved. "Read directly through PostgreSQL" means a raw SQL query (`"datePosted"::text` and so on) inside the same transaction, because uncommitted rows are visible only to that transaction. A separate connection (the direct string) counted the `Opportunity` rows after every test. All test rows were clearly fictional ("ZZ FICTIONAL TEST", organization "Fictional Test Org", `example.org` link, legacy IDs starting `zz-test-`). Tests ran sequentially.

### Test results (identical in all three time zones: 0 failed checks in each run)
**Dates**
- **D1** `datePosted` 2026-09-01 with `deadline` 2026-11-15: PostgreSQL stored exactly `2026-09-01` and `2026-11-15`; Prisma returned values that read back as the same UTC dates (as JavaScript dates they are `2026-09-01T00:00:00.000Z`). PASS.
- **D2** `deadline` null, `datePosted` 2026-09-22: PostgreSQL stored NULL; Prisma returned null; `datePosted` exact. PASS.
- **D3** edge dates (2026-03-08 and 2026-11-01, the US daylight-saving changes; 2026-12-31; 2027-01-01; 2028-02-29, a leap day), stored with `createMany`: all stored and returned unchanged. PASS.
- **D4** (informational) passing a plain `"2026-09-01"` string straight to Prisma was **rejected**: "Invalid value for argument `datePosted`: premature end of input. Expected ISO-8601 DateTime." So an API must convert date strings to dates first (for example `new Date("2026-09-01")`, which JavaScript reads as UTC midnight).
- **D5** (pitfall demonstration, informational) a date built from **local** midnight, `new Date(2026, 8, 1)`: stored as `2026-09-01` in UTC and in America/Los_Angeles, but as **`2026-08-31`** in Pacific/Kiritimati (UTC+14). This shows why dates must be built as UTC dates, not from local time.

**`lastUpdated`**
- **L0** create without a value: filled in automatically with today's **UTC** date. PASS.
- **L1** create with explicit `2020-01-15`: **preserved**. PASS.
- **L2** `createMany` with explicit `2019-06-30` and `2021-03-04`: both **preserved**; a third row with no value received today's UTC date. PASS.
- **L3** update without supplying `lastUpdated` (row created with `2020-01-15`): automatically set to today's UTC date. PASS.
- **L4** update while explicitly supplying `2022-02-02`: **preserved**. PASS.
**Transaction safety:** after every one of the tests above, the separate connection found `Opportunity` had 0 rows, so every transaction rolled back. After all tests in each run the table contained 0 rows. No record had to be reported or deleted.

### Final verification
1. `npx prisma migrate status`: "Database schema is up to date!"
2. Schema comparison (live database vs `prisma/schema.prisma`): exit code 0, no differences. Structure unchanged: tables `Opportunity` and `_prisma_migrations`, 21 columns, 5 enum types, indexes `Opportunity_legacyId_key` and `Opportunity_pkey`; `_prisma_migrations` has 1 finished, not-rolled-back record (`20261016011916_init`); `Opportunity` has 0 records.
3. Production not targeted: the strings used still match the development endpoint fingerprint recorded in Step 2.6B and differ from production's. No production credentials exist on this computer.
4. Original OpenRaiz repo: 0 changed files, commit `0113d35`, file-timestamp fingerprint matches the Step 1 baseline.
5. No credentials exposed: all output was filtered; a scan of this log found no credential, hostname or endpoint parts. `.env` is excluded from Git (`.gitignore:34 .env*`). The Prisma schema was not modified; no schema, API or frontend files changed.

### What was learned (explanations by the agent; the user has not yet confirmed these in their own words)
- **A PostgreSQL `DATE` is a plain calendar date.** It has no time and no time zone, so by itself it cannot "shift". All the date risk is in JavaScript, which represents a day as a moment in time (midnight).
- **Build date values as UTC dates** (for example `new Date("2026-09-01")`) and **read them back as UTC dates** (`toISOString().slice(0, 10)`). Done that way, all dates were exact in every time zone tested, including daylight-saving days and a leap day. Building from local midnight can store the wrong day, as the Kiritimati case showed.
- **Prisma will not accept a bare `"YYYY-MM-DD"` string**; the API must convert it to a `Date` (or a full ISO string) first.
- **`@updatedAt` does not stop you supplying a value.** In these tests, an explicitly supplied `lastUpdated` was kept on `create`, on `createMany`, and on `update`; when none is supplied, Prisma fills in today's date. So the original OpenRaiz `lastUpdated` dates can be preserved when the ten listings are imported, and ordinary edits will update the field automatically. The intended data model works as designed and **no schema change is needed**.
- **"Today" is the UTC date.** Prisma fills `lastUpdated` with the UTC calendar date. In the America/Los_Angeles run (local date 2026-10-15, UTC date 2026-10-16) it stored `2026-10-16`, a day ahead of the local calendar date. This matches the intended model as described ("today" in UTC) but may surprise someone in a US time zone in the evening. Whether to keep it or set the date in code is a decision for later; nothing was changed.
- **A database default is not what fills `lastUpdated`.** The column has no default in PostgreSQL; Prisma's client supplies the value, which is why raw SQL inserts must provide one.

### Limits of these tests
- All test rows were rolled back, so they did not test data that is committed and then read back later; persistence after a browser refresh is a Milestone 4 check.
- The values were set through Prisma with the adapter and the pooled connection. They did not test the original JSON files or the real import yet.
- The checks measured the date part of `lastUpdated`; Prisma passes a full timestamp to a date column, and only the UTC date was observed.

### Failures or problems
None. All 0 checks failed in all three runs, and no script errors occurred.

### Errors or mistakes identified
None in this step.

### Corrections made
None. (Filled in the earlier Step 2.6D commit reference `5f03970`.)

### Git
- **Files modified (uncommitted):** `PROMPT_LOG.md` only. No scripts were created in the project. `design-reference/` remains untracked.
- **Proposed commit message:** `Verify date and lastUpdated behavior in Neon development database`
- **Commit message:** `Verify date and lastUpdated behavior in Neon development database` (no Co-Authored-By trailer); documentation-only.
- **Follow-up prompt:** `Yes, commit and push the documentation update`.
- **Pre-commit checks (agent):** only `PROMPT_LOG.md` staged; `.env` and `design-reference/` not staged; a scan of the staged diff found no credential, hostname or endpoint parts.
- **Commit reference:** PENDING — the hash is not known until the commit exists; to be recorded in a later log update.
