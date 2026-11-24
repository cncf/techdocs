# Issue output

`/create-issues` writes numbered standalone issue files here
(`{issue-number}-{condensed-title}.md`) and `/create-umbrella-issues` writes
umbrella issue files (`U-{issue-number}-{condensed-title}.md`). The upload
process treats every `*.md` file in this folder except this readme as an issue
to create.

To keep a previous run, move its files into a sub-folder (for example
`prev_1/`); the prompts ignore sub-folders.
