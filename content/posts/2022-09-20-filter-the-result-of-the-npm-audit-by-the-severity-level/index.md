---
title: "Filter the result of the npm audit by the severity level"
summary: "Let me walk you through a quick real-life example I experienced today, my learnings and a hacky little solution I crafted."
---

I am not a big fan of how npm audit works, and [I am not the only one](https://overreacted.io/npm-audit-broken-by-design/). The core design is not perfect, and the overall user experience deserves some love.

Let me walk you through a quick real-life example I experienced today, my learnings and a hacky little solution I crafted. First, like many JavaScript developers do thousands of times a day, I typed `npm i` in my terminal and went away to brew a coffee. Then, I came back to this.

```
9 vulnerabilities (2 low, 5 moderate, 2 high, 0 critical)
```

Classic! I wondered what these two highly vulnerable packages are, so I typed `npm audit --audit-level=high` to see a miles-long list of all vulnerabilities in the output. Lesson learnt! The `--audit-level` flag does not filter the result but specifies the minimum severity level for npm audit to exit with a non-zero exit code. This flag is helpful when running on the pipeline but not so much to consume the results.

```
npm audit --log-level=high
$?
1
```

```
npm audit --log-level=critical
$?
0
```

The `$?` allows us to preview the exit code of a previous command. A handy little trick, but I still wanted to see only high severity vulnerabilities. So I spent 14 seconds googling around, but I couldn't find anything that worked as I expected. So I spent another 14 seconds and came out with this snippet.

```
npm audit --json | node -e 'const fs = require("fs"); const auditLevel = (process.argv[1] || "critical").toLowerCase(); const { vulnerabilities } = JSON.parse(fs.readFileSync(0).toString("utf-8")); const result = Object.values(vulnerabilities).filter((i) => i.severity.toLowerCase() === auditLevel); console.table(JSON.stringify(result, null, 2));' high
```

Maybe not the most elegant, perhaps not the most efficient, but it works just fine. If you are a `grep` wizard, drop a comment below. I will be happy to see your solution.

Thanks for reading, and until next time, stay safe 👋
