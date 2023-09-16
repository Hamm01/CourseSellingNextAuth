## Course Selling Website ~ Assignment Week-11

### Milestone -3 done

This is 3rd part of Course Selling App using Nextjs-13.

1. User Authentication using Next-auth . Signup using credientials and signin using google
2. Used App router
3. Used prisma with postgres and schema is designed using it
4. Tailwind for UI
5. Recoil for State management
6. backend written in Next also

Things covered in milestone -3 branch

1. Divided all the ServerSide routes and functionality in /app directory
2. all the components that will serve as client component are shifted in components folder in src
3. Recoil used for all the client components , the provider file is in component folder but used in page.tsx
   so that all the client components can used that recoil functionality
4. The homepage have me-request function used to serve the request on server. so that will save the extra hop
   for me request which intialy was done on appbar of homepage-> after page is loaded in browser
