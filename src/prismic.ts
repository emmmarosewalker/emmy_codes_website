import * as prismic from '@prismicio/client';

// Fill in your repository name
export const repositoryName = 'emmycodes';

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken: 'MC5ZdUpxTlJBQUFDY0Ftc2l1.77-977-977-9FB5M77-9eDLvv71PCu-_vQDvv70GEVVMCD4pW--_ve-_vV3vv73vv70s77-9ee-_vQ',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
//   routes: [
//     {
//       type: 'homepage',
//       path: '/',
//     },
//   ],
});
