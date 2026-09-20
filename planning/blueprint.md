# Website blueprint

## Reader promise

Help readers choose what to learn, understand it, try it, assess the result, and find the next step. Comprehensive coverage is the long-term goal; a complete learning path is the unit of each release.

Every instructional page serves one identifiable reader and outcome. Age, years played, equipment price, and highest note do not determine a person's level. Returning players may revisit physical fundamentals while retaining advanced reading and musical knowledge.

## Navigation

| Area | Reader question | Content |
| --- | --- | --- |
| Start Here | Where should I begin? | Beginner and returning-player routes; skill-based path selection |
| Learn | What should I learn next? | Ordered foundation and intermediate lessons; advanced preparation |
| Practice | What can I work on today? | Adaptable routines, exercises, practice logs, self-assessment |
| Solve a Problem | What could help with this difficulty? | Observable symptoms, simple checks, relevant lessons, limits of self-help |
| Styles and Performance | How do I prepare for this musical setting? | Classical, jazz, improvisation, ensembles, auditions, professional work |
| Reference and Equipment | What does this mean or how does it work? | Notation, fingerings, terminology, instrument selection, care |
| Music and Listening | What should I play or listen for? | Repertoire pathways and annotated links to legitimate recordings |

The homepage should offer “Start learning,” “Find a practice session,” and “Solve a problem.” Keep navigation labels concise. Add search and a clearly visible contents list on longer pages when integrating the site. Do not expose empty categories.

## Proposed final content hierarchy

```text
AGENTS.md
planning/                       # Internal editorial documents; not public lessons
  samples/                      # Temporary review examples
  templates/
docs/                           # Canonical published Markdown
  start-here/
  learn/
    beginner/
    intermediate/
    advanced/
  practice/
    routines/
    exercises/
  solve-a-problem/
  styles-and-performance/
    classical/
    jazz-and-improvisation/
    ensembles/
    auditions/
    professional-preparation/
  reference/
  equipment/
  instrument-care/
  music-and-listening/
static/
  img/lessons/
  audio/lessons/
  scores/                       # Original or permission-checked material
blog/                           # News and attributed personal writing
```

Use lowercase hyphenated filenames. Keep one canonical explanation of a shared topic and link to it from different paths. URLs should be explicit and stable; sidebar order belongs in metadata, not numbered filenames. Reference and Equipment may group several directories in navigation.

Drafts beyond the samples should live in `planning/drafts/` using their intended `docs/` relative paths. Move approved content into `docs/`; do not maintain two editable copies after publication. The tracker records intended paths and status.

## Release sequence and completion criteria

| Release | Scope | Complete when |
| --- | --- | --- |
| 0: Establish standards | This package and three samples | Voice feedback incorporated; teaching questions resolved; sample workflow evaluated |
| 1: Start and sustain | B01–B08, P01, R01–R03, C01, E01, T01, and start pages | A new player can navigate from setup to an easy musical phrase and repeat a useful practice session; all dependencies and essential media exist |
| 2: Build independence | I01–I06, returning-player route, expanded routines and troubleshooting | Readers can plan practice, learn unfamiliar music, and assess rhythm, pitch, and phrasing |
| 3: Specialize | Advanced foundations and specialist paths in curriculum | Each released path has entry guidance, worked activities, assessment, and a realistic next step |
| 4: Broaden and maintain | Expanded repertoire, listening, equipment, and professional resources | Additions have sources, rights checks, and assigned review needs; existing paths stay current |

Release numbers describe scope, not promised dates. “All levels” does not mean promising a self-contained substitute for every teacher or professional training program.

## Success measures

- A first-time visitor can identify an appropriate starting page without knowing trumpet terminology.
- Every lesson has an observable outcome and an activity appropriate to its prerequisites.
- Every public path has working next-step links and no required unpublished lesson.
- A reader can locate a short practice option without scrolling through an essay.
- Sample readers can explain the instructions in their own words and attempt them; record misunderstandings and revise.
- Track unanswered reader questions and failed searches if privacy-respecting feedback or analytics are added later.

Start with editorial and usability checks; do not use page count as a quality measure.
