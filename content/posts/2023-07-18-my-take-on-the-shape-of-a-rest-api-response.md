---
title: "My take on the shape of a REST API response"
summary: "I have built a few REST APIs and seen many approaches to the response interface. I prefer to keep things simple, so I have come up with an interface that works well for me in most cases and I wanted to share it with you."
photo: "2023-07-18.jpg"
---

I have built a few REST APIs and seen many approaches to the response interface. A few specifications try to standardize the response shape, such as [JSON:API](https://jsonapi.org), [OData JSON Format](http://docs.oasis-open.org/odata/odata-json-format/v4.0/errata02/os/odata-json-format-v4.0-errata02-os-complete.html), and [JSend](https://github.com/omniti-labs/jsend). I prefer to keep things simple, so I have developed an interface that works well for me in most cases and wanted to share it with you.

## Successful/error response

Look at the example of a successful response and the one in case of an error. This interface serverd me well on multiple projects.

```json
{
  "status": "error",
  "statusCode": 404,
  "data": {
    "user": {
      "id": 123,
      "name": "Paweł Grzybek"
    }
  },
  "error": null
}
```

```json
{
  "status": "error",
  "statusCode": 404,
  "data": null,
  "error": "Uuups! Not found."
}
```

You may wonder why I keep `status` and `statusCode` if this information can be inferred from the raw response. The convenience of having all this information in the response body makes my job a lot easier. Laziness is the short answer. Objects in the `data` field are explicitly grouped by the entity name, making it almost impossible to confuse when working with more complex payloads. A single string as an `error` message is enough for most cases.

That's all for today. I hope you find this approach useful — it's not a silver bullet, but it works great for me and can be a good starting point for your next project.
