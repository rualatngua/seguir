define({ "api": [
  {
    "type": "get",
    "url": "/feed/:username",
    "title": "Get a feed for a user",
    "name": "GetFeed",
    "group": "Feeds",
    "version": "1.0.0",
    "description": "<p>Retrieves a set of feed items for a specific user</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>the username of the user</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n   [\n     {\n         \"post\": \"247455fe-0e8e-4e3f-af4d-458ac13508b8\",\n         \"content\": \"HELLO WORLD!\",\n         \"user\": {\n             \"user\": \"cbeab41d-2372-4017-ac50-d8d63802d452\",\n             \"username\": \"cliftonc\"\n         },\n         \"posted\": \"2015-01-18T20:37:32.626Z\",\n         \"type\": \"post\",\n         \"timeuuid\": \"d4065671-9f51-11e4-889d-9f08914a01c0\",\n         \"date\": \"2015-01-18T20:37:32.631Z\",\n         \"fromNow\": \"a few seconds ago\",\n         \"fromFollow\": false,\n         \"isLike\": false,\n         \"isPost\": true,\n         \"isFollow\": false,\n         \"isFriend\": false\n     },\n     {\n       \"friend\": \"7b3891d8-cc27-4284-8fb4-d3b455186f99\",\n       \"user\": {\n           \"user\": \"cbeab41d-2372-4017-ac50-d8d63802d452\",\n           \"username\": \"cliftonc\"\n       },\n       \"user_friend\": \"cbeab41d-2372-4017-ac50-d8d63802d452\",\n       \"since\": \"2015-01-18T20:36:38.632Z\",\n       \"username_friend\": \"cliftonc\",\n       \"type\": \"friend\",\n       \"timeuuid\": \"b3d781d0-9f51-11e4-889d-9f08914a01c0\",\n       \"date\": \"2015-01-18T20:36:38.637Z\",\n       \"fromNow\": \"5 minutes ago\",\n       \"fromFollow\": false,\n       \"isLike\": false,\n       \"isPost\": false,\n       \"isFollow\": false,\n       \"isFriend\": true\n   }\n   ]",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Feeds",
    "groupDescription": "<p>This is a collection of methods that allow you to retrieve the news feed for a user.</p> ",
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>You did not provide a username</p> "
          },
          {
            "group": "4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>The user was not found.</p> "
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>There was a server problem.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Bad-Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"BadRequestError\",\n  \"message\": \"You must provide a username.\"\n}",
          "type": "json"
        },
        {
          "title": "Not-Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"Could not find that user.\"\n}",
          "type": "json"
        },
        {
          "title": "Server-Error:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"Something specific about the server error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/follow",
    "title": "Add a follower to a user",
    "name": "AddFollower",
    "group": "Followers",
    "version": "1.0.0",
    "description": "<p>Adds a new friend to a user account.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": false,
            "field": "user",
            "description": "<p>the guid representation of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": false,
            "field": "user_follower",
            "description": "<p>the guid of the user to become friends with</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\"status\":\"OK\"}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Followers",
    "groupDescription": "<p>This is a collection of methods that allow you to create and retrieve follows.</p> ",
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>You did not provide a username</p> "
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>There was a server problem.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Bad-Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"BadRequestError\",\n  \"message\": \"You must provide a username.\"\n}",
          "type": "json"
        },
        {
          "title": "Bad-Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"BadRequestError\",\n  \"message\": \"You must provide a follow guid.\"\n}",
          "type": "json"
        },
        {
          "title": "Server-Error:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"Something specific about the server error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/:username/followers",
    "title": "Get followers for a user",
    "name": "GetFollowers",
    "group": "Followers",
    "version": "1.0.0",
    "description": "<p>Retrieves a set of feed items for a specific user</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>the username of the user</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n[\n       {\n           \"user_follower\": {\n               \"user\": \"379554e7-72b0-4009-b558-aa2804877595\",\n               \"username\": \"Mabel.Sporer\"\n           },\n           \"since\": \"1993-11-19T00:58:16.000Z\"\n       },\n       {\n           \"user_follower\": {\n               \"user\": \"cbeab41d-2372-4017-ac50-d8d63802d452\",\n               \"username\": \"cliftonc\"\n           },\n           \"since\": \"2015-01-18T20:37:09.383Z\"\n       }\n   ]",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Followers",
    "groupDescription": "<p>This is a collection of methods that allow you to create and retrieve follows.</p> ",
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>You did not provide a username</p> "
          },
          {
            "group": "4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>The user was not found.</p> "
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>There was a server problem.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Bad-Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"BadRequestError\",\n  \"message\": \"You must provide a username.\"\n}",
          "type": "json"
        },
        {
          "title": "Not-Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"Could not find that user.\"\n}",
          "type": "json"
        },
        {
          "title": "Server-Error:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"Something specific about the server error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/friend",
    "title": "Add a friend to a user",
    "name": "AddFriend",
    "group": "Friends",
    "version": "1.0.0",
    "description": "<p>Adds a new friend to a user account.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>the guid representation of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username_friend",
            "description": "<p>the guid of the user to become friends with</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\"status\":\"OK\"}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Friends",
    "groupDescription": "<p>This is a collection of methods that allow you to create and retrieve friend links.</p> ",
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>You did not provide a username</p> "
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>There was a server problem.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Bad-Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"BadRequestError\",\n  \"message\": \"You must provide a username.\"\n}",
          "type": "json"
        },
        {
          "title": "Bad-Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"BadRequestError\",\n  \"message\": \"You must provide a friend guid.\"\n}",
          "type": "json"
        },
        {
          "title": "Server-Error:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"Something specific about the server error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/:username/friends",
    "title": "Get friends for a user",
    "name": "GetFriends",
    "group": "Friends",
    "version": "1.0.0",
    "description": "<p>Retrieves a set of friends for a specific user</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>the username of the user</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "  HTTP/1.1 200 OK\n[\n       {\n           \"user_friend\": {\n               \"user\": \"cbeab41d-2372-4017-ac50-d8d63802d452\",\n               \"username\": \"cliftonc\"\n           },\n           \"since\": \"2015-01-18T20:36:38.632Z\"\n       }\n   ]",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Friends",
    "groupDescription": "<p>This is a collection of methods that allow you to create and retrieve friend links.</p> ",
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>You did not provide a username</p> "
          },
          {
            "group": "4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>The user was not found.</p> "
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>There was a server problem.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Bad-Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"BadRequestError\",\n  \"message\": \"You must provide a username.\"\n}",
          "type": "json"
        },
        {
          "title": "Not-Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"Could not find that user.\"\n}",
          "type": "json"
        },
        {
          "title": "Server-Error:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"Something specific about the server error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/like",
    "title": "Add a like by a user",
    "name": "AddLike",
    "group": "Likes",
    "version": "1.0.0",
    "description": "<p>Creates a new like of an item</p> ",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --data \"username=cliftonc&item=github.com\" http://localhost:3000/like",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": false,
            "field": "user",
            "description": "<p>the guid representation of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "item",
            "description": "<p>a canonical url to the item liked</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{ 'like': '8a3c8e57-67a1-4874-8f34-451f59f6d153',\n  'user': '405d7e5e-c028-449c-abad-9c11d8569b8f',\n  'item': 'http://github.com',\n  'timestamp': 1421585133444 }",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Likes",
    "groupDescription": "<p>This is a collection of methods that allow you to create and retrieve likes.</p> ",
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>You did not provide a username</p> "
          },
          {
            "group": "4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>The user was not found.</p> "
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>There was a server problem.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Bad-Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"BadRequestError\",\n  \"message\": \"You must provide a username.\"\n}",
          "type": "json"
        },
        {
          "title": "Bad-Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"BadRequestError\",\n  \"message\": \"You must provide an item.\"\n}",
          "type": "json"
        },
        {
          "title": "Not-Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"Could not find that user.\"\n}",
          "type": "json"
        },
        {
          "title": "Server-Error:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"Something specific about the server error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/like/:like",
    "title": "Get a specific like",
    "name": "GetLike",
    "group": "Likes",
    "version": "1.0.0",
    "description": "<p>Retrieves details of a specific like</p> ",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/like/cliftonc/github.com",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": false,
            "field": "post",
            "description": "<p>The guid of the like</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{ 'like': '8a3c8e57-67a1-4874-8f34-451f59f6d153',\n  'user': '405d7e5e-c028-449c-abad-9c11d8569b8f',\n  'item': 'github.com',\n  'timestamp': 1421585133444 }",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Likes",
    "groupDescription": "<p>This is a collection of methods that allow you to create and retrieve likes.</p> ",
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>You did not provide a username</p> "
          },
          {
            "group": "4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>The user was not found.</p> "
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>There was a server problem.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Bad-Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"BadRequestError\",\n  \"message\": \"You must provide a username.\"\n}",
          "type": "json"
        },
        {
          "title": "Bad-Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"BadRequestError\",\n  \"message\": \"You must provide an item.\"\n}",
          "type": "json"
        },
        {
          "title": "Not-Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"Could not find that user.\"\n}",
          "type": "json"
        },
        {
          "title": "Server-Error:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"Something specific about the server error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/post",
    "title": "Add a post by a user",
    "name": "AddPost",
    "group": "Posts",
    "version": "1.0.0",
    "description": "<p>Creates a new post.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>of the post</p> "
          },
          {
            "group": "Parameter",
            "type": "Timestamp",
            "optional": false,
            "field": "timestamp",
            "description": "<p>the time that the post occurred</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{ 'post': '19a8bfd1-8ebe-4462-bf93-9bd48efe08b7',\n  'user': '4be37f53-7b79-4b77-9b08-c06346f507aa',\n  'content': 'Hello, this is a post',\n  'timestamp': 1421584990835 }",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Posts",
    "groupDescription": "<p>This is a collection of methods that allow you to create and retrieve posts.</p> ",
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>You did not provide a guid for the user</p> "
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>There was a server problem.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Bad-Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"BadRequestError\",\n  \"message\": \"You must provide a user guid.\"\n}",
          "type": "json"
        },
        {
          "title": "Bad-Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"BadRequestError\",\n  \"message\": \"You must provide content for the post.\"\n}",
          "type": "json"
        },
        {
          "title": "Server-Error:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"Something specific about the server error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/post/:post",
    "title": "Get a specific post",
    "name": "GetPost",
    "group": "Posts",
    "version": "1.0.0",
    "description": "<p>Retrieves details of a specific post</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Guid",
            "optional": false,
            "field": "post",
            "description": "<p>The guid of the post</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\"status\":\"OK\"}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Posts",
    "groupDescription": "<p>This is a collection of methods that allow you to create and retrieve posts.</p> ",
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>You did not provide a post guid</p> "
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>There was a server problem.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Bad-Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"BadRequestError\",\n  \"message\": \"You must provide a post guid.\"\n}",
          "type": "json"
        },
        {
          "title": "Server-Error:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"Something specific about the server error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Add a user",
    "name": "AddUser",
    "group": "Users",
    "version": "1.0.0",
    "description": "<p>Creates a new user.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>the name of the user</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --data \"username=cliftonc\" http://localhost:3000/user",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\":\"1b869349-d8f8-45b1-864e-19164e1b925a\",\n  \"username\": \"cliftonc\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Users",
    "groupDescription": "<p>This is a collection of methods that allow you to create and retrieve users.</p> ",
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>You did not provide a username</p> "
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>There was a server problem.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Bad-Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"BadRequestError\",\n  \"message\": \"You must provide a username.\"\n}",
          "type": "json"
        },
        {
          "title": "Server-Error:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"Something specific about the server error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/:username",
    "title": "Get a specific user",
    "name": "GetUser",
    "group": "Users",
    "version": "1.0.0",
    "description": "<p>Retrieves details of a specific user</p> ",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/user/cliftonc",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The name of the user</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200 OK",
          "content": "HTTP/1.1 200 OK\n{\n  \"user\":\"cbeab41d-2372-4017-ac50-d8d63802d452\",\n  \"username\":\"cliftonc\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Users",
    "groupDescription": "<p>This is a collection of methods that allow you to create and retrieve users.</p> ",
    "error": {
      "fields": {
        "4xx": [
          {
            "group": "4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>You did not provide a username</p> "
          },
          {
            "group": "4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>The user was not found.</p> "
          }
        ],
        "5xx": [
          {
            "group": "5xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>There was a server problem.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Bad-Request:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"code\": \"BadRequestError\",\n  \"message\": \"You must provide a username.\"\n}",
          "type": "json"
        },
        {
          "title": "Not-Found:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"Could not find that user.\"\n}",
          "type": "json"
        },
        {
          "title": "Server-Error:",
          "content": "HTTP/1.1 500 Server Error\n{\n  \"code\": \"NotFoundError\",\n  \"message\": \"Something specific about the server error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_Users_cliftonc_work_seguir_doc_main_js",
    "groupTitle": "_Users_cliftonc_work_seguir_doc_main_js",
    "name": ""
  }
] });