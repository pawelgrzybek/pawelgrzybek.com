---
title: "Escape the maze of React props with the Context API"
description: ""
photo: 2018-04-26.jpg
draft: true
---

So you built some React app before. If you haven't you probably don't want to waste your time trying to solve an issue that is not and issue for you yet. If you you have build a Reacty thing before and you found the maze of passing props on every component level a little bit dounting — stick with me. If you are even more experienced in a subject and you embraced the power of Redux of any other app state manager, you may find this one interesting.

## The maze of props

Lets say that we have a score table app with 3 levels deep components structure. The one on top level (`<App />`) holds a state and methods responsible for it with deeper nested components (`<Controls />` and `<Score />`).

```
<App />             (holds state)
— <Player />
— — <Avatar />
— — <Controls />    (triggers state change)
— <Player />
— — <Avatar />
— — <Controls />    (triggers state change)
— <Score />         (displays state)
```
