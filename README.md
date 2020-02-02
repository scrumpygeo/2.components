## Basic use of components in react.

This eg is in the form of a blog post and uses procedures rather than classes.

1. framework of hard-coded blogs are written out.

   - used semantic-ui cdn to quickly style it so we can focus on react parts
   - used faker.js for avatar images

2. refactored so each blog is a reusable module

   - extracted duplicate part into separate appropriately-named file (eg CommentDetail)
   - linked this with index via export and import statements
   - in index.js referenced CommentDetail as a JSX tag: <CommentDetail />
   - configured components (eg author, date, comments) via props
     and sent properties from parent to child component

3. Wrapped above CommentDetail component in an approve/reject card implemented as another separate component (ApprovalCard.js)
