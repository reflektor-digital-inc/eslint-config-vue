# Branching model
We are following a ticket(issue) per branch model. This concept is more atomic than a feature per 
branch model.

So, every time you need to fix something in the application make sure that the ticket exists and if 
it doesn't exist then go ahead and create it.

The branching convention is to branch off develop.
The branching naming convection is as follows:
> [topic]/[natural-name]

## Breakdown:

We are inheriting some of these commit rules from [`@commitlint/config-conventional`](https://github.com/conventional-changelog/commitlint)

[topic]: This is the purpose of the branch, can be:
 - `fix`: Bug fixing.
 - `feature`: Brand new feature; introduces new code to the code base.
 - `research`: Branch to research, prototype, and test new features
 - `refactor`: Improves our code; modifies existing code.
 - `chore`: Changes to documentation; updating grunt tasks, webpack config, etc; 
 essentially no production code changes.
 - `style`: Code formatting/reformatting, missing semi colons, etc; no code change, clean up.

[natural-name]: It is a human-readable identification, like `non-scroll-home`, `video-lightbox`

## Linking Tickets

If the pull request has an associated ticket (from apps like Linear, Trello or JIRA), link the
associated ticket in the branch name and PR Title. This ensures that the app's integration with
GitHub will move the corresponding ticket to the correct status.

Example:
```text
# Branch Name
feature/ref-120-product-page-video-player

# PR Title
[Feature - REF-120] Product Page Video Player
```

# Pull Request Requirements
You should always create Pull Request to merge something to the repository. 
Never merge directly to master|develop|staging (any of the main branches).

## Goal
Just push a specific change, future, fix to the Pull Request. 
Avoid different solutions in one PR; keep them really tight.

## Line Change Limits
The limit of allowed code changes per Pull Request is 1000 lines of codes for addition and 1000 
lines of codes for deletion. 

If the amount of code is bigger than the limit the Pull Request must be reviewed for rejection.

More code than the limit of code will affect:
 - The quality of the review
 - The timing of the reviewer
 - Increase the risk of bugs
 - Commits and PR Naming Convention
 - The name of a Pull Request will follow the best practices rules of a commit message.

By default will be: [feature] - [natural-name]

Example:
```text
# Branch Name
feature/product-page-video-player

# PR Title
[Feature] Product Page Video Player
```

## Assignation
Please assign your Lead Developer as a reviewer and the creator of the code if it's not yours.

## Commits
The commits inside a Pull Request must tell the story of how you solved the ticket. For other 
developers to understand your commits, messages should be clear and detailed. Information in the 
commit message should give a high level understanding of the changes made.

## General Rules
 - 100 character limit for PR and commit messages. 
 - Use full sentences in the body of your messages. Remember, messages are read by all team 
 members. Using your own short form or abbreviations will lead to confusion.
 - Remove commented code.
