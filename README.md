 将json 对象中的json格式字符串转换成成json对象， 方便查看



重命名 jq3 


```
{
  "key": "a string ",
  "b": "{\"key\":\"a string \"}",
  "c": "{\"key\":\"a string \",\"b\":\"{\\\"key\\\":\\\"a string \\\"}\"}",
  "d": {
    "a": {
      "a": "{\"key\":\"a string \",\"b\":\"{\\\"key\\\":\\\"a string \\\"}\",\"c\":\"{\\\"key\\\":\\\"a string \\\",\\\"b\\\":\\\"{\\\\\\\"key\\\\\\\":\\\\\\\"a string \\\\\\\"}\\\"}\"}"
    }
  }
}

```



```
{
  "key": "a string ",
  "b": undefined,
  "b[____STR_OBJ____]": {
    "key": "a string "
  },
  "c": undefined,
  "c[____STR_OBJ____]": {
    "key": "a string ",
    "b[____STR_OBJ____]": {
      "key": "a string "
    }
  },
  "d": {
    "a": {
      "a": undefined,
      "a[____STR_OBJ____]": {
        "key": "a string ",
        "b[____STR_OBJ____]": {
          "key": "a string "
        },
        "c[____STR_OBJ____]": {
          "key": "a string ",
          "b[____STR_OBJ____]": {
            "key": "a string "
          }
        }
      }
    }
  }
}
```
