# Agent workflow

## One conversation, several roles

The coordinating agent reads the tracker, chooses work whose prerequisites are ready, and reports completed files and unresolved decisions. The owner does not need to manually transfer drafts between agents. Roles below may be performed sequentially. If delegated agents are requested, give each a bounded set of files; the coordinator alone reconciles the tracker and shared navigation.

## Planner

Input: blueprint, curriculum, inventory, and existing content. Output: a brief using [the brief template](templates/page-brief.md), proposed path/slug, prerequisites, sources to inspect, essential media, and review requirements. Resolve overlap before drafting. For a new path, define its entry point and completion task first.

## Writer

Input: ready brief, editorial guide, and actual opened sources. Output: Markdown draft, source ledger updates, and explicit open questions. Use [the lesson template](templates/lesson.md) flexibly. Do not produce an entire section before validating a representative page. Work in batches of three to five focused pages after the pilot.

## Editor and reviewer

Read the brief and sources as well as the draft; do not accept the writer's confidence as evidence. Review in three passes: factual/technical accuracy, reader teachability, then voice and structure. Return actionable findings with severity: publication blocker, required revision, or optional improvement. Recheck changes against the original outcome. Record AI and human reviews separately.

For physical setup, range/endurance, contested technique, and specialist advice, prepare a concise question for a knowledgeable human reviewer. Continue independent research or other pages while it remains open. Never mark a blocked page ready because review time is unavailable.

## Website integrator

Input: ready content and resolved dependencies. Follow [website integration](website-integration.md). Output: integrated Markdown, navigation/asset changes where needed, URL mapping, build result, and preview findings. Publication is a separate state from integration.

## Status flow

`planned → brief-ready → drafting → review → ready → integrated → published`

Use `needs-revision` when review finds a problem. Record blockers in a separate field so the current stage remains clear. Ready requires resolved source/rights checks, applicable teaching review, required media, and all required linked content. Published requires evidence of actual publication, not just a successful local build.

At session end update the tracker with changed files, actual checks, open issues, and the next independent task. Do not overwrite unrelated user changes. Do not silently broaden a content task into redesign or deployment.

## Reusable task prompts

**Plan:** “Read the planning package. Write release-one page briefs in dependency order, updating the tracker. Research uncertain claims. Keep public pages unchanged.”

**Draft:** “Draft the next three brief-ready pages using the editorial guide. Record sources, media needs, and unresolved teaching questions. Keep them in planning/drafts.”

**Review:** “Review these drafts against their briefs and actual sources. Check instructions from the reader's perspective. Record blockers and revisions without claiming human validation.”

**Integrate:** “Integrate the ready pages, preserve existing URLs or verified redirects, check links and rendering, and run the production build. Report publication readiness.”

## When to create skills

After feedback and revision of the samples, extract the repeatable authoring and reviewing steps into project-local skills. Keep the curriculum, tracker, and editorial guide as ordinary Markdown referenced by those skills. Update one authoritative guide rather than copying its rules into several skills. A dedicated planner or integration skill is worthwhile only if repeated work demonstrates a need.
