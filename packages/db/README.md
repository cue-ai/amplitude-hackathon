# db

Database schemas from Prisma.

## How our DB is structured
### Users / Auth
- `User` - represents the main user object that we make edits too and update
- `Account` - provided by NextAuth to handle session state
- `Session` - provided by NextAuth to handle session state

### Workflows

**How workflows are created**

When a workflow is created, we create:
- `Workflow` - the main workflow object that ontians info on the trigger, which object the workflow is interacting with, conditions on which it should run
- `Step` - the steps that the workflow should run through. This step bundles a group of actions together for logging purposes
  - `Action` - an actual action that is taken by the workflow. This can contain things like sending a message in slack. The `data` json contains information on what is actually performed


**How workflows are run**

When a workflow is ran, we create a `WorkflowRun` object, along with 
- `WorkflowRun` - the main workflow run object that contains info on the workflow that was ran, the object that triggered the workflow, and the steps that were ran
- `StepRun` - the steps that were ran. This step bundles a group of actions together for logging purposes
  - `ActionRun` - an actual action that was taken by the workflow. This can contain things like sending a message in slack.

Each of these objects has both a `Status` `error` and `logs` field which keep track of the status of the workflow run, any errors that occur, and any logs respectively.

