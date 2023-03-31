---
slug: "/vite-react-deploy-issue"
date: "2023-03-31"
lastUpdated: "N/A"
title: "Vite React App Displaying Blank White Screen"
tags: ""
---

I just fixed an issue with my React App displaying a blank white screen after a successful build and deploy. The error in the console read:

    `Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/octet-stream".`

There are several fixes suggested online, but my issue stemmed from my build command not creating a build folder even after successfully building the app. To resolve this issue, I added

```
build: {
	outDir:  'build'
}
```

to the `defineConfig()` function in my vite.config.ts file and rebuilt the app. This block will specifiy the output directory for the build if it is not doing it automatically. My site now works and no longer displays a blank white screen!